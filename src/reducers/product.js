export default (state = [], action) => {
    switch (action.type) {
        case "SHOW_DETAIL":
            return [action.payload];
        default:
            return state;
    }
}