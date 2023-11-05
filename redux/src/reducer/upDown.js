const initialState = 0;
const changeTheNumber = (state = initialState, action) => {


    switch (action.type) {

        case 'INCREMENT': return state + action.jp;
        case 'DECREMENT': return state -action.payload;
        default: return state;
    }
}

export default changeTheNumber;