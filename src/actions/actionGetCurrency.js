import getCurrency from "../takeData/getCurrency";
import { actionPromise } from "./actionPromise";

const actionGetCurrency = () =>
async (dispatch) => {
    await dispatch(actionPromise('allCurrency',getCurrency))
}

export{ actionGetCurrency }
