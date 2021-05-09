// API
export type ExpensePayload = {
    limit: number;
    offset: number;
}

export type Receipt = {
    url: string
}

export type Expense = {
    id: string;
    amount: {
        value: string;
        currency: string;
    },
    date: string;
    merchant: string;
    receipts: Array<Receipt>,
    comment: string;
    category: string;
    user: {
        first: string;
        last: string;
        email: string;
    }
}

// REDUX
export type Store = {
    expense: {
        list: Array<Expense>;
        data: Expense;
        updateStatus: string;
        offset: number;
    }
}