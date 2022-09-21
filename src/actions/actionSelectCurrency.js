const actionSelected = name => ({type: 'CURRENCY', name})

const actionSelectCurrency = (name) =>
async (dispatch) => {
    dispatch(actionSelected(name))
}

export {actionSelectCurrency}
