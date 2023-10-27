import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
const initialTransactionList = []
class MoneyManager extends Component {
  state = {
    optionId: transactionTypeOptions[0].optionId,
    titleInput: '',
    amountInput: '',
    transactionList: initialTransactionList,
  }

  deletePreviousTransaction = id => {
    const {transactionList} = this.state
    const filteredTransactionList = transactionList.filter(
      filterEachTransactionItem => filterEachTransactionItem.id !== id,
    )
    this.setState({transactionList: filteredTransactionList})
  }

  onClickSubmit = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransactionTypeOption =>
        eachTransactionTypeOption.optionId === optionId,
    )

    const {displayText} = typeOption

    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeTypeOFTransaction = event => {
    this.setState({optionId: event.target.value})
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }

  getIncome = () => {
    const {transactionList} = this.state
    let incomeAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    const {transactionList} = this.state
    let expensesAmount = 0
    let incomeAmount = 0
    let balanceAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  render() {
    const {titleInput, amountInput, transactionList, optionId} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()

    return (
      <div className="back-page">
        <div className="bg-container">
          <div className="background">
            <h1 className="heading-richard">Hi, Richard</h1>
            <p className="money-manager">
              Welcome back to your <span className="money">Money Manager</span>
            </p>
          </div>
        </div>

        <MoneyDetails
          balanceAmount={balanceAmount}
          incomeAmount={incomeAmount}
          expensesAmount={expensesAmount}
        />

        <div className="middle-container">
          <div className="add-transaction-container">
            <h1 className="add-heading">Add Transaction</h1>
            <form className="form-container" onSubmit={this.onClickSubmit}>
              <label className="title-text" htmlFor="title">
                TITLE
              </label>
              <input
                className="title"
                placeholder="TITLE"
                id="title"
                value={titleInput}
                onChange={this.onChangeTitle}
              />
              <label className="title-text" htmlFor="amount">
                AMOUNT
              </label>
              <input
                className="title"
                placeholder="AMOUNT"
                id="amount"
                value={amountInput}
                onChange={this.onChangeAmount}
              />
              <p className="title-text">TYPE</p>
              <select
                className="title"
                onChange={this.onChangeTypeOFTransaction}
                value={optionId}
              >
                {transactionTypeOptions.map(transactionTypeOptionsDetails => (
                  <option
                    key={transactionTypeOptionsDetails.optionId}
                    value={transactionTypeOptionsDetails.optionId}
                  >
                    {transactionTypeOptionsDetails.displayText}
                  </option>
                ))}
              </select>
              <button className="button-add" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="right-side-container">
            <h1 className="heading-history">History</h1>
            <div className="transaction-list-container">
              <div className="list-heading-container">
                <p className="list-paragraph-heading">Title</p>
                <p className="list-paragraph-heading">Amount</p>
                <p className="list-paragraph-heading">Type</p>
              </div>
              <ul className="unordered-list-container">
                {transactionList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    eachTransactionDetails={eachTransaction}
                    deletePreviousTransaction={this.deletePreviousTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
