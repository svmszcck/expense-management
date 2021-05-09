// API
export type ExpensePayload = {
    limit: number;
    offset: number;
}

export type Expense = {
    id: string;
    amount: {
        value: string;
        currency: string;
    },
    date: string;
    merchant: string;
    receipts: Array<any>,
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
        data: any
    }
}