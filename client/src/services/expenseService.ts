import axios from 'axios';

import { BASE_URL } from 'config';

export const getExpenses = async (limit: number, offset: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/expenses?limit=${limit}&offset=${offset}`);
        return response?.data?.expenses;
    } catch (error) {
        console.error("Api Error: ", error);
    }
}

export const getExpense = async (id: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/expenses/${id}`);

        return response?.data;
    } catch (error) {
        console.error("Api Error: ", error);
    }
}

export const updateExpense = (id: string, comment: string) => {

}

export const uploadReceipt = (id: string, receipt: any) => {

}