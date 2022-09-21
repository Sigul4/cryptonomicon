import { Button, Card } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { actionGetCurrency } from "../actions/actionGetCurrency.js";
import { actionSelectCurrency } from "../actions/actionSelectCurrency";
import { ComparePage } from "./ComparePage.js";
import { CurrenciesList } from "./CurrenciesList.js";


const Content = ({allCurrencies}) =>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(actionGetCurrency())
    },[])
    
    const rows = allCurrencies? Object.entries(allCurrencies[1]) : [];

    return(
        <Box>
            <Box style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: "40px"
            }}>
                
            <Card style={{height: "500px",maxWidth: '300px', overflowY:"scroll"}}><CurrenciesList rows={rows}>
                </CurrenciesList>   
            </Card>
            <Box style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <ComparePage/>
            </Box>
            </Box>
        </Box>
    )
}   

const CContent = connect(state => ({allCurrencies: state?.promise?.allCurrency?.payload}),{onUpdate: actionGetCurrency} )(Content)

export { CContent };

