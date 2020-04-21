import React, { Component } from 'react';
import ListOfExpenses from "../../components/ListOfExpenses/ListOfExpenses";

interface IExpensesPageState {
    expenses: Array<any>
};
class ExpensesPage extends Component<IExpensesPageState> {
    state = {
        expenses: []
    }

    componentDidMount() {
        this.fetchExpenses();
    }

    fetchExpenses = async () => {
        const response = await fetch(
            `http://localhost:3000/expenses?limit=25offset=25`
        );
        const json = await response.json();
        const expenses = await json.expenses;
        this.setState({ expenses })
    };

    render() {
        return (
            <>{this.state.expenses.length > 0 &&
                <>
                    All expenses
                <ListOfExpenses expenses={this.state.expenses} />
                </>}
            </>
        )
    }
}
export default ExpensesPage;
