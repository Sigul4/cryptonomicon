function currencyReducer(state, { type, name }) {
    if (state === undefined) {
        return {};
    }

    if (type === "CURRENCY") {
        return {
        ...state,
        mainCurrency: name,
        };
    }
    
    return state;
}

export { currencyReducer }
