import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import Container from '@mui/material/Container';
import "./CovidBody.css";
import { useState,useEffect } from 'react';



export function CovidBody(props){
    let [totaldata,settotaldata]=useState(0)
    let [recovered,setrecovered]=useState(0)
    let[deaths,setdeaths]=useState(0)
    let[mydate,setmydate]=useState(0)
    let[mycondition,setmycondition]=useState('Better')

  
    let mylink=`https://covid19.mathdro.id/api/countries/${props.mycity}`
    

     let getCovidData=async()=>{
            try{
                
        let res=await fetch(mylink)

            let finaldata=await res.json();
           
            settotaldata(finaldata.confirmed.value)
            setrecovered(finaldata.recovered.value)
            setdeaths(finaldata.deaths.value)
            let mydatestring=new Date(finaldata.lastUpdate)
           let finaldate= mydatestring.toLocaleString(); 
            setmydate(finaldate)

         }
        catch(error){
            console.log(error);
        }
        }
        getCovidData();
     

return  <Container  maxWidth="lg" style={{
    textAlign:"center",
    marginTop:"30px",

}}>

<Box>
    <Typography variant="h3" color="white" className='covidheading'>Live Covid Tracker By Mohsin</Typography>
    <Typography variant="h3" color="white" className='covidheading2'>Covid Tracker</Typography>
    
    </Box>
<Grid container style={{
    marginTop:"10px"
}} rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    
    <Grid item className='coviditem' lg={4} sm={6} md={4} xs={12}  >
        <Box  p={4}   ><Typography className='itemdata' variant='h4'>IN<span style={{}}><h3>{props.mycity}</h3></span></Typography></Box>
    </Grid>
    <Grid  item className='coviditem' lg={4} sm={6} md={4} xs={12} >
        <Box  p={4} ><Typography className='itemdata' variant='h4'>TOTAL<span style={{}}><h3>{totaldata}</h3></span></Typography></Box>
    </Grid>
    <Grid  item className='coviditem' lg={4} sm={6} md={4} xs={12}>
        <Box  p={4} ><Typography className='itemdata' variant='h4'>RECOVERD<span style={{}}><h3>{recovered}</h3></span></Typography></Box>
    </Grid>
    <Grid   item className='coviditem' lg={4} sm={6} md={4} xs={12}>
        <Box  p={4} ><Typography className='itemdata' variant='h4'>DEATHS<span style={{}}><h3>{deaths}</h3></span></Typography></Box>
    </Grid>
    <Grid  item className='coviditem' lg={4} sm={6} md={4} xs={12}>
        <Box  p={4} ><Typography className='itemdata' variant='h4'>CURRENT CONDITION<span style={{}}><h3>{mycondition}</h3></span></Typography></Box>
    </Grid>
    <Grid   item className='coviditem' lg={4} sm={6} md={4} xs={12}>
        <Box   p={4} ><Typography className='itemdata' variant='h4'>LAST UPDATE<span style={{}}><h3>{mydate}</h3></span></Typography></Box>
    </Grid>
        

</Grid>
</Container>






}