import { Card, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const ComparePage = () =>{
    const [firstCurrency,   setFirstCurrency] = useState([]);
    const [secondCurrency, setSecondCurrency] = useState([]);
    const [topPrice,       setTopPrice] = useState('');
    const [bottomPrice, setBottomPrice] = useState('');
    const [coefficient, setCoefficient] = useState(36)

    const currencies = useSelector(state => state?.promise?.allCurrency?.payload ? Object.entries(state?.promise?.allCurrency?.payload[1]): [])
    
    useEffect(()=>{
        setFirstCurrency(['USD', 1])
        setSecondCurrency(['UAH', 36.959372])
    },[])

    useEffect(()=>{
        if(firstCurrency[1] || secondCurrency[1]) console.log(firstCurrency, secondCurrency); setCoefficient(firstCurrency[1] /secondCurrency[1]) 
    },[firstCurrency,secondCurrency])
    
    useEffect(()=>{
    console.log('coefficient',coefficient,firstCurrency[1],secondCurrency[1])
    },[coefficient])
    
    const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: 200,
        width: 50,
        },
    },
    };

    useEffect(()=>{
        console.log('currencies',secondCurrency)
    },[secondCurrency])


    const changeFirstCurrency = (event) => {
        setFirstCurrency(currencies[event.target.value]);
    };

    const changeSecondCurrency = (event) => {
        setSecondCurrency(currencies[event.target.value]);
    };

    return (
    <>
        <Card
        style={{
            width:350,
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            padding:'40px'
        }}
        >
            <Box sx={{
            height:"80%",
            display: "flex",
            flexDirection:"column",
            justifyContent: "space-between",
            }}>

                <Typography>
                    <h1>Один {firstCurrency[0]}  равен {secondCurrency[1]} {secondCurrency[0]}</h1>
                </Typography>

                <Box 
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems:"center",
                        marginBottom:"20px",
                    }}
                >
                    <Select
                    defaultValue={158}
                    value={firstCurrency[0]}
                    onChange={changeFirstCurrency}
                    MenuProps={MenuProps}
                    sx={{height:"50px", width:"100px",}}
                    >
                        {currencies?.map((currency,index) =>{
                            return  <MenuItem value={index}>{currency[0]}</MenuItem>
                        })}
                    </Select>

                    <TextField
                    type='number'
                    id="outlined-required"
                    label="from"
                    value={topPrice}
                    sx={{}}
                    onChange={(e) => {
                        setTopPrice(e.target.value)
                        console.log(e.target.value/coefficient, e.target.value, coefficient)
                        setBottomPrice(e.target.value/coefficient)
                    }}
                    />
                </Box>
                

                
                
                <Box 
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems:"center"
                    }}
                >
                    <Select
                    defaultValue={156}
                    value={secondCurrency[0]}
                    onChange={changeSecondCurrency}
                    MenuProps={MenuProps}
                    sx={{height:"50px", width:"100px",}}
                    >
                        {currencies.map((currency,index) =>{
                            return  <MenuItem value={index}>{currency[0]}</MenuItem>
                        })}
                    </Select>

                    <TextField
                    type='number'
                    id="outlined-required"
                    label="to"
                    value={bottomPrice}
                    sx={{}}
                    onChange={(e) => {
                        setBottomPrice(e.target.value)
                        setTopPrice(e.target.value*coefficient.toFixed(2))
                    }}
                    />
                </Box>
            </Box>
            
        </Card>
    </>)
}
