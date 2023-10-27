// Write your code here
import {Component} from 'react'
import './index.css'

class MoneyDetails extends Component {
  render() {
    const {balanceAmount, incomeAmount, expensesAmount} = this.props
    return (
      <div className="container">
        <div className="first-container">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
          <div className="paragraph-container">
            <p className="moneys">Your Balance</p>
            <p className="rupees" data-testid="balanceAmount">
              Rs {balanceAmount}
            </p>
          </div>
        </div>
        <div className="second-container">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
          />
          <div className="paragraph-container">
            <p className="moneys">Your Income</p>
            <p className="rupees" data-testid="incomeAmount">
              Rs {incomeAmount}
            </p>
          </div>
        </div>
        <div className="third-container">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
          <div className="paragraph-container">
            <p className="moneys">Your Expenses</p>
            <p className="rupees" data-testid="expensesAmount">
              Rs {expensesAmount}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyDetails
