import React, {Component} from "react";
import {Expense} from "../models/Expense";
import {ExpenseComponent} from "./ExpenseComponent";

export class ExpensesList extends Component<IPropTypes, IState> {
    render() {

        const expenses = this.props.expenses;

        return (
            <React.Fragment>
                    <div className="py-3">
                        <ul>
                            {expenses.map(expense =>
                            {
                                if (expenses.length !== 0)
                                    return <ExpenseComponent key={expenses.indexOf(expense)} expense={expense}/>;
                                else return <h3>Something went wrong again.</h3>
                            })}
                        </ul>

                    </div>
            </React.Fragment>
        );
    }
}

interface IState{

}

interface IPropTypes{
    expenses : Expense[]
}


