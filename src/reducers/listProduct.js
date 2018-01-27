export default (state = [], action) => {
    switch (action.type) {
        case "SHOW_LIST":
            return [action.payload];
        default:
            return state;
    }
}