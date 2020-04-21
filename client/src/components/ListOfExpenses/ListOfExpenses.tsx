import React from "react";

interface IListOfExpensesProps {
  expenses: Array<any>
};

class ListOfExpenses extends React.Component<IListOfExpensesProps> {
  render() {
    console.log(this.props)
    return (
      <div className="list-of-expenses">
        <table className="list">
          <tbody>
            {this.props.expenses.map(item => {
              return <tr>
                <td>{item.id}</td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListOfExpenses;