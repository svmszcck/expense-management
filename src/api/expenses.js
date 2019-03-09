import axios from 'axios';

export default {
  getExpenses: () => axios.get('/expenses'),
  checkInvitationHash: hash => axios.get(`/users/invite/${hash}`),
  postExpense: id => axios.post(`/${id}`),
  postReceipts: id => axios.post(`/${id}/receipts`),
};
