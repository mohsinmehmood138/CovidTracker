import { Search } from "@mui/icons-material";
import { AppBar, Select, Toolbar, Typography } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import "./CovidNavbar.css";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import {Details} from "./Details";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export function CovidNav(props) {
    let [mycountry, setmycountry] = useState([])
    let formynextpagecity=props.mycity
    
    const handleChange = (event) => {
        props.setmycity(event.target.value);
    };
    useEffect(() => {
        
        let getCovidData = async () => {
            try {

                let res = await fetch(`https://covid19.mathdro.id/api/countries`)

                let finaldata = await res.json();
                console.log(finaldata);
               
                setmycountry(finaldata.countries)



            }
            catch (error) {
                console.log(error);
            }
        }
        getCovidData();
    }, [])



    return <AppBar position="static" >
        <Toolbar className="navbar">
            <div>
                <Typography variant="h6" className="navbarwebsite">Covid Tracker Website</Typography>
            </div>

            <Typography className="navbarapp" variant="h6">
                COVID APP
            </Typography>
            <div>
            <Button  variant="contained" size="large" endIcon={<SendIcon /> }>
            <Link to="/details" state={formynextpagecity} >Details</Link>
            
      </Button>
            </div>
            <div className="searchicon" >
                <Search />
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small" style={{
                        color:"white"
                    }}>country</InputLabel>
                    <Select labelId="demo-select-small"
                        id="demo-select-small"
                        // value={age}
                        label="country"
                        style={{
                            color:"white",
                            border:"1px solid white"
                        }}
                        
                        onChange={handleChange}>

                        {
                            mycountry.map((items) => {
                                return <MenuItem style={{}} value={items.name}>{items.name}</MenuItem>
                            })
                        }



                    </Select>
                </FormControl>
            </div>
        </Toolbar>


    </AppBar>
}