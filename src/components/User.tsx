import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import User from '../types/user';

type Props = {};

const UserComponent = (props: Props) => {

  const [userDetails, setUserDetails] = useState<User>({
    firstName: '',
    lastName: '',
    age: 0,
    city: ''
  }); 

  const user = useSelector( (store: any) => store.user);

  const dispatch = useDispatch();

  console.log(userDetails);

  return (
    <div style={{backgroundColor: 'pink'}}>
      <div>
        <h1>My name is { user.firstName + " " + user.lastName }.</h1>
        <h1>I'm { user.age } years old.</h1>
        <h1>I'm from { user.city }.</h1>
      </div>
      <div>
        <div>
          <label htmlFor="fname">First Name: </label>
          <input type="text" placeholder='first name' onChange={ (e) => {
            console.log(e.target.value);
            setUserDetails({
              ...userDetails,
              firstName: e.target.value,
            });
          } }/>
        </div>
        <div>
          <label htmlFor="lname">Last Name: </label>
          <input type="text" placeholder='last name' onChange={ (e) => {
            console.log(e.target.value);
            setUserDetails({
              ...userDetails,
              lastName: e.target.value,
            });
          }}/>
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input type="text" placeholder='age' onChange={ (e) => {
            console.log(e.target.value);
            setUserDetails({
              ...userDetails,
              age: parseInt(e.target.value),
            });
          }}/>
        </div>
        <div>
          <label htmlFor="fname">City: </label>
          <input type="text" placeholder='city' onChange={ (e) => {
            console.log(e.target.value);
            setUserDetails({
              ...userDetails,
              city: e.target.value,
            });
          }}/>
        </div>
        <button
          onClick={ () => dispatch({
            type: 'setUserDetails',
            payload: userDetails
          }) }
        >Submit</button>
      </div>
    </div>
  )
}

export default UserComponent;