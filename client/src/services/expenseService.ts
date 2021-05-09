import axios from 'axios';

import { BASE_URL, AXIOS_CONFIG } from 'config';

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

export const updateExpense = async (id: string, comment: string) => {
    try {
        const response = await axios.post(`${BASE_URL}/expenses/${id}`, {
            comment
        });
        return response?.data;
    } catch (error) {
        console.error("Api Error: ", error);
    }
}

export const uploadReceipt = async (id: string, receipt: File) => {
    try {
        const formData = new FormData();
        formData.append("receipt", receipt);
        const response = await axios.post(`${BASE_URL}/expenses/${id}/receipts`, formData, {
            ...AXIOS_CONFIG
        });
        return response?.data;
    } catch (error) {
        console.error("Api Error: ", error);
    }
}