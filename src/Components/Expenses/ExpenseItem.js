import React from 'react';
import Card from '../UI/card';
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
const ExpenseItem = (props) => {
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date}></ExpenseDate>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">₹{props.amount}</div>
                </div>
            </Card>
        </li>
    );
} 

export default ExpenseItem;
