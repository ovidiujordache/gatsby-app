import * as React from 'react';
import { useState,useEffect } from 'react';
import { IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

export default function AddFrom ({closeEvent}) 
{
    const[name,setName] = useState("");
    const[address,setAddress] = useState("");
    const[phoneNo,setPhone] = useState("");
    const[email,setEmail] = useState("");


    const handleNameChange = (event) =>{
        setName(event.target.value);
    }

    const handleAddressChange = (event) =>{
        setAddress(event.target.value);
    }

    const handlePhoneChange = (event) =>{
        setPhone(event.target.value);
    }

    const handleEmailChange = (event) =>{
        setEmail(event.target.value);
    }


    const createCustomer = ()=>{

    }
  return (
    <>
       <Box sx={{m:2}}/>
       <Typography variant='h5' align="center">
        Add Customer
       </Typography>
       <IconButton
       style={{position:"absolute",top:"0",right:"0"}}
       onClick={closeEvent}
       >
        <CloseIcon/>
       </IconButton>
       <Box height={20}/>
       <Grid container spacing={2}>
        {/* Text Fields */}
        {/* Name */}
        <Grid item xs={12}>
        <TextField id="outlined-basic" 
        label="Name" 
        variant="outlined" 
        value={name}
        size="small" 
        sx={{minWidth: "100%" }} />
        </Grid>

        <Grid item xs={12}>
        <TextField id="outlined-basic" 
        label="Address" 
        multiline maxRows={4} 
        variant="outlined" 
        value={address}
        size="small" 
        sx={{minWidth: "100%" }} />
        </Grid>
        <Grid item xs={6}>
        <TextField id="outlined-basic" 
        label="Phone Number" 
        variant="outlined"
        value={phoneNo} 
        size="small" 
        sx={{minWidth: "100%" }} />
        </Grid>
        <Grid item xs={6}>
        <TextField id="outlined-basic" 
        label="Email Address" 
        variant="outlined" 
        value={email}
        size="small" 
        sx={{minWidth: "100%" }} />
        </Grid>
        {/* Submit button */}
        <Grid item xs={12}>
        <Typography variant='h5' align='center'>
            <Button variant="contained" onClick={createCustomer}>
                Submit
            </Button>
        </Typography>
        </Grid>
       </Grid>
       <Box sx={{m:4}}/>
    </>
    
  )
};