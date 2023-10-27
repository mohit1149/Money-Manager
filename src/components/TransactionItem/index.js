// Write your code here
import {Component} from 'react'
import './index.css'

class TransactionItem extends Component {
  render() {
    const {eachTransactionDetails, deletePreviousTransaction} = this.props
    const {title, amount, type, id} = eachTransactionDetails
    const deleteOldTransaction = () => {
      deletePreviousTransaction(id)
    }
    return (
      <li className="list-container">
        <div className="response-container">
          <p>{title}</p>
          <p>{amount}</p>
          <p>{type}</p>
          <button
            className="delete-button"
            type="button"
            onClick={deleteOldTransaction}
            data-testid="delete"
          >
            <img
              className="delete-image"
              alt="delete"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default TransactionItem
