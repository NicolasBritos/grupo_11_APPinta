import { useState } from 'react';
import Payment from './Payment.js';

function Payments() {

    const payments = [
        {
            id: 1,
            buyer: 'Carla Diaz',
            date: 'Martes 30 18:50',
            amount: '3000'
        },
        {
            id: 2,
            buyer: 'Nicolas Britos',
            date: 'Martes 30 19:30',
            amount: '350'
        },
        {
            id: 3,
            buyer: 'Francisco Gianotti',
            date: 'Miércoles 30 10:05',
            amount: '3000'
        },
        {
            id: 1,
            buyer: 'Francisco Gianotti',
            date: 'Miércoles 30 10:20',
            amount: '2950'
        },
        {
            id: 3,
            buyer: 'Juana Perez',
            date: 'Miércoles 30 8:00',
            amount: '3000'
        },
        {
            id: 1,
            buyer: 'Jorge Lopez',
            date: 'Jueves 30 09:20',
            amount: '2950'
        }
    ]
    console.log(payments);

    const [ statePayments, setPayments ] = useState(payments);
 
    return (
            <div className="row card-body">
                <div className="col-12">
                    {
                       statePayments && statePayments.map((payment, idx)    => {
                            return <Payment key={idx} payment={payment} />;
                        })                            
                    }
                </div>
            </div>           
    );
  }
  
  export default Payments;
  