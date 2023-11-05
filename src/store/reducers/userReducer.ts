//this is the reducer function
//this can change the state
const userReducer = (state = { firstName: 'Jeral', lastName: 'Sandeeptha', age: 23, city: 'Ragama' }, action: any) => {
    if (action.type === 'setUserDetails') {
        return action.payload
    }
    return state;
};
  
export default userReducer;