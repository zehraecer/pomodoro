export const reducer = (state = initialState, action) => {
    const { type, payload } = action
    console.log(action);
    switch (type) {
        case "Increment":
            return {
                ...state,
                counter: state.counter + payload
            };
        case "Decrement":
            return {
                ...state,
                counter: state.counter - payload
            };
        case "Impact":
            return {
                ...state,
                counter: state.counter * payload
            }
        case "LogInUser": {
            return {
                ...state,
                isLoggedIn: true
            }
        }
        case "LogoutUser": {
            return {
                ...state,
                isLoggedIn: false
            }
        }
        default:
            return state;
    }
}