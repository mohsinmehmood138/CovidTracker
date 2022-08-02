import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import Container from '@mui/material/Container';
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';
import React from "react";
import "./CovidBody.css";


export function CountryDetails(props) {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    // AIzaSyBhXCEkUuBCRX-AtT7yAFAZCTlHB_BHC0Q
    
    let [countrydetail, setcountrydetail] = useState(0)
    let [Capital, setCapital] = useState(0)
    let [Population, setPopulation] = useState(0)
    let [Region, setRegion] = useState(0)
    let [flag, setflag] = useState(0)
    let [mymaplat, setmymaplat] = useState(0)
    let [mymaplong, setmymaplong] = useState(0)
    let data = useLocation();
    let mydata = data.state

    useEffect(() => {
        let getCovidData = async () => {
            try {

                let res = await fetch(`https://restcountries.com/v3.1/name/${mydata}`)

                let finaldata = await res.json();
                setmymaplat(finaldata[0].latlng[0])
                setmymaplong(finaldata[0].latlng[1])
                setcountrydetail(finaldata[0].area)
                setCapital(finaldata[0].capital)
                setPopulation(finaldata[0].population)
                setRegion(finaldata[0].region)
                setflag(finaldata[0].flags.png)
                setmymaplong(finaldata[0].maps.googleMaps)
            }
            catch (error) {
                console.log(error);
            }
        }

        getCovidData();
    }, [])

    return <Container maxWidth="lg" style={{
        textAlign: "center",
        marginTop: "30px",

    }}>

        <Box>
            <Typography variant="h3" color="white" className='covidheading'>All Details About {mydata}</Typography>
            <Typography variant="h3" color="white" className='covidheading2'>{mydata}</Typography>

        </Box>
        <Grid container style={{
            marginTop: "10px"
        }} rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

            <Grid item className='coviditem' lg={4} sm={6} md={4} xs={12}  >
                <Box p={4}   ><Typography className='itemdata' variant='h4'>IN<span style={{}}><h3>{mydata}</h3></span></Typography></Box>
            </Grid>
            <Grid item className='coviditem' lg={4} sm={6} md={4} xs={12} >
                <Box p={4} ><Typography className='itemdata' variant='h4'>Area<span style={{}}><h3>{countrydetail}</h3></span></Typography></Box>
            </Grid>
            <Grid item className='coviditem' lg={4} sm={6} md={4} xs={12}>
                <Box p={4} ><Typography className='itemdata' variant='h4'>Capital<span style={{}}><h3>{Capital}</h3></span></Typography></Box>
            </Grid>
            <Grid item className='coviditem' lg={4} sm={6} md={4} xs={12}>
                <Box p={4} ><Typography className='itemdata' variant='h4'>Population<span style={{}}><h3>{Population}</h3></span></Typography></Box>
            </Grid>
            <Grid item className='coviditem' lg={4} sm={6} md={4} xs={12}>
                <Box p={4} ><Typography className='itemdata' variant='h4'>Region<span style={{}}><h3>{Region}</h3></span></Typography></Box>
            </Grid>
            <Grid item className='coviditem' lg={4} sm={6} md={4} xs={12}>
                <Box    ><Typography className='itemdata' variant='h4'><span style={{}}><h3><img src={flag}></img></h3></span></Typography></Box>
            </Grid>
            <Grid item className='coviditem' lg={12} sm={12} md={12} xs={12}>
                <Box p={40}>
                  
                </Box>
            </Grid>


        </Grid>
    </Container>
}

