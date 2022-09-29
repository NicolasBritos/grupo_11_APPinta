function Payment(props) {
    const payment = props.payment;

    return (
            <div className="row item">
                <div className="item-icon col-5 name">
                    <span className="text-muted">{payment.buyer}</span>
                </div>
                <div className="item-title col-5 date">
                    <span className="text-muted">{payment.date}</span>
                </div>
                <div className="item-title col-2 price">
                    <span className="text-success">$ {payment.amount}</span>
                </div>
            </div>
    )              
}

export default Payment;
  