import * as express from 'express';

import { expenses } from '../data/expenses';
import { UploadedFile } from 'express-fileupload';
import { dirname } from 'path';

import axios from 'axios';
import { start } from 'repl';

const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  const limit = parseInt(req.query.limit) || 25;
  const offset = parseInt(req.query.offset) || 0;

  res.send({
    expenses: expenses
      .sort((a, b) => {
        const valA = Date.parse(a.date);
        const valB = Date.parse(b.date);

        if (valA > valB) {
          return -1;
        }
        if (valB > valA) {
          return 1;
        }
        return 0;
      })
      .slice(offset, offset + limit)
      .map((expense, index) => {
        return {
          ...expense,
          index: offset + index
        };
      }),
    total: expenses.length
  });
});

router.get('/:id', (req, res) => {
  const expense = expenses.find(expense => expense.id === req.params.id);

  if (expense) {
    res.send(expense);
  } else {
    res.status(404);
  }
});

router.post('/:id', (req, res) => {
  const expense = expenses.find(expense => expense.id === req.params.id);
  if (expense) {
    if (
      req.body.date !== expense.date ||
      req.body.currency !== expense.amount.currency
    ) {
      if (req.body.date) expense.date = req.body.date;
      if (req.body.comment) expense.comment = req.body.comment;
      if (req.body.price) expense.amount.value = req.body.price;
      if (req.body.currency) expense.amount.currency = req.body.currency;

      let endDate = new Date(expense.date);
      let endYear = endDate.getFullYear();
      let endMonth = endDate.getMonth() + 1;
      let endDay = endDate.getDate();

      let startDate = new Date(expense.date);
      let currencyMarginDays = 2;
      startDate.setDate(startDate.getDate() - currencyMarginDays);
      let startYear = startDate.getFullYear();
      let startMonth = startDate.getMonth() + 1;
      let startDay = startDate.getDate();

      let startMonthString;
      let startDayString;
      let endMonthString;
      let endDayString;

      startMonth < 10
        ? (startMonthString = `0${startMonth}`)
        : (startMonthString = `${startMonth}`);
      startDay < 10
        ? (startDayString = `0${startDay}`)
        : (startDayString = `${startDay}`);
      endMonth < 10
        ? (endMonthString = `0${endMonth}`)
        : (endMonthString = `${endMonth}`);
      endDay < 10
        ? (endDayString = `0${endDay}`)
        : (endDayString = `${endDay}`);

      let startString = `${startYear}-${startMonthString}-${startDayString}`;
      let endString = `${endYear}-${endMonthString}-${endDayString}`;
      let currencyString = expense.amount.currency;
      axios
        .get(
          `https://api.exchangeratesapi.io/history?start_at=${startString}&end_at=${endString}&symbols=${currencyString}`
        )
        .then(response => {
          if (response.data.rates[endString]) {
            expense.amount.baseEUR = response.data.rates[endString][currencyString];
          } else {
            expense.amount.baseEUR =
            response.data.rates[startString][currencyString];
          }
          console.log(expense.amount);
          return res.status(200).send(expense);
        })
        .catch(err => console.log(err.response.data));
    }
  } else {
    res.status(404);
  }
});

router.post('/:id/receipts', (req, res) => {
  if (!req.files) {
    return res.status(400).send('No files were uploaded.');
  }

  const id = req.params.id;
  const expense = expenses.find(expense => expense.id === id);

  if (expense) {
    const receipt = req.files.receipt as UploadedFile;
    const receiptId = `${id}-${expense.receipts.length}${path.extname(
      receipt.name
    )}`;

    receipt.mv(`${process.cwd()}/receipts/${receiptId}`, err => {
      if (err) {
        return res.status(500).send(err);
      }

      expense.receipts.push({
        url: `/receipts/${receiptId}`
      });
      res.status(200).send(expense);
    });
  } else {
    res.status(404);
  }
});

export default router;
