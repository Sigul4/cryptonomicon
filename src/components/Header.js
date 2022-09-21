import { AppBar, CardMedia, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useSelector } from "react-redux"

const Header = () =>{

    const val = useSelector(state => state?.promise?.allCurrency?.payload)
    console.log('val', val)
    const uah = useSelector(state => state?.promise?.allCurrency?.payload? state?.promise?.allCurrency?.payload[1]?.UAH: '' )
    const eur = useSelector(state => state?.promise?.allCurrency?.payload? state?.promise?.allCurrency?.payload[1]?.EUR: '' )
    const time = useSelector(state => state?.promise?.allCurrency?.payload? state?.promise?.allCurrency?.payload[2]: '' )

    return(
        <>
            <Box sx={{ flexGrow: 1,  }}>
                <AppBar position="static" style={{background:'rgba(255, 99, 71, 0)', boxShadow: '0,white'}}>
                    <Toolbar
                        style={{
                            display:'flex',
                            alignItems:'center',
                            padding:"20px"
                        }}
                    >
                        {/* <CardMedia
                            component="img"
                            height="194"
                            image="https://cdn-icons-png.flaticon.com/512/2228/2228894.png"
                            alt="Paella dish"
                        /> */}
                        <Box style={{display:"flex", width:'100%',alignItems:'center',justifyContent:"space-between"}}>
                            <Typography  variant="h4">
                                <strong>$Cryptonomicon</strong>
                            </Typography>
                            <Box style={{display:'flex', flexDirection:'column',alignItems:"flex-start"}}>
                                <h3 style={{ margin:0}}>USD:{uah? uah?.toFixed(2): ''}</h3>
                                <h3 style={{margin:0}} >EUR:{(eur*uah)? (eur*uah)?.toFixed(2): ''}</h3>
                                <p style={{margin:0}} >last update was in :{time? time.slice(11,19): ''}</p>
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}   

export { Header }

