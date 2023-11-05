//this is the reducer function
//this can change the state
const counterReducer = (state: any = { number: 0 }, action: any) => {
    switch (action.type) {
      case 'increase':
        return { ...state, number: state.number + 1 };
      case 'decrease':
        return { ...state, number: state.number - 1 };
      default:
        return state;
    }
};
  
export default counterReducer;
  