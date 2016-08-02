import React, { Component } from 'react'

class ResultItem extends Component {

  render() {
    return (
      <li className="list-view">
        <div className="item-child"><strong>Car Price</strong>: Rp. {this.props.result.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}. <strong>Down Payment</strong>: Rp. {this.props.result.dp.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")} </div>
        <div className="item">Rp. <strong>{this.props.result.monthly.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}</strong> / months x {(this.props.result.year).toString()}</div>
        <div className="item-child"><strong>Interest Rate</strong>: {this.props.result.interest_rate}% / year. <strong>Loan Total</strong>: Rp. {this.props.result.primary_loan.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")} </div>
      </li>
    )
  }
}


export default ResultItem
