import React from 'react';
import ListOfExpenses from "../../components/ListOfExpenses/ListOfExpenses";
import { connect } from "react-redux";
import { startFetchExpenses } from "../../actions/expensesAction";
import { Expense } from "../../types/Expense";
import { AppActions } from "../../types/actions";
import { AppState } from "../../store";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";

interface ExpensesPageProps {
}
interface ExpensesPageState { }

type Props = ExpensesPageProps & LinkStateProps & LinkDispatchProps;

export class ExpensesPage extends React.Component<Props, ExpensesPageState> {
    componentDidMount() {
        this.props.startFetchExpenses(0)
    }

    render() {
        const { expenses, total } = this.props.data
        return (
            <>
                <h1>List of expenses</h1>
                <ListOfExpenses expenses={expenses} />
            </>
        );
    }
}

interface LinkStateProps {
    data: { expenses: Expense[], total: number }
}
interface LinkDispatchProps {
    startFetchExpenses: (page?: number) => void;
}

const mapStateToProps = (
    state: AppState,
    ownProps: ExpensesPageProps
): LinkStateProps => {
    return ({
        data: state.data
    });
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: ExpensesPageProps
): LinkDispatchProps => ({
    startFetchExpenses: bindActionCreators(startFetchExpenses, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExpensesPage);