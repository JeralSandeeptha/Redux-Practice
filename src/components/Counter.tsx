import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import store from '../store/store';

type Props = {};

const Counter = (props: Props) => {

    //this is how we use state in a store
    //we use useSelector to get the state we wanted
    const number = useSelector( (store: any) => store.number );

    //we use a dispatcher to setState
    const dispatch = useDispatch();

    console.log(store);

    return (
        <div style={{backgroundColor: 'yellow'}}>
            <h1>Counter: { number }</h1> 
            <button onClick={ () => dispatch({
                type: 'increase',
            }) }>Increase</button>
            <button onClick={ () => dispatch({
                type: 'decrease',
            }) }>Decrease</button>
        </div>
    );

}

export default Counter;
