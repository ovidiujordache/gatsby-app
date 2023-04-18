import * as React from 'react';
import SidebarNav from './SideBar.js';
import Typography from '@mui/material/Typography';
import DrawerHeader from'@mui/material/Drawer';
import Box from '@mui/material/Box';
import Navbar from './Navbar.js';
import AccountAccordion from './AccountAccordion.js';
import Barchart from './charts.js';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import './AccountComp.css';
import { blue } from '@mui/material/colors';


export default function AccountComponent ({children,user}) {
  return(
    <>
    <div className='bgcolor'>
    {children}
    <Navbar/>
    <Box height={70}/>
    <Box sx={{ display: 'flex' }}>
      <SidebarNav item1="Customers" item2="Proposals" item3="Invoices" item4="Templates"/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      {/* <h1>Hello {user}</h1> */}
      {/* Live updates of current proposals and invoices */}
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Stack spacing={2} direction="row">
              <Card sx={{ minWidth: 49 + "%" , height: 150}} className="gradient" >
                  <CardContent>
                    <div><AnalyticsIcon sx={{fontSize: 20, color:"#13315c"}}/></div>
                    <Typography gutterBottom variant="h5" component="div">
                    345 Inv
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{color:"#13315c"}}>
                     Total Invoices
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 49 + "%" , height: 150 }} className="gradient">
                  <CardContent>
                  <div><AnalyticsIcon sx={{fontSize: 20, color:"#13315c"}}/></div>
                    <Typography gutterBottom variant="h5" component="div">
                      200 P
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{color:"#13315c"}}>
                    Total Proposals
                    </Typography>
                  </CardContent>
                </Card>
            </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack spacing={2}>
            <Card sx={{ minWidth: 345 }} /*className="gradient_180"*/ >
              <Stack spacing={2} direction="row">
                <div className='iconStyle'>
                  <Inventory2RoundedIcon sx={{fontSize: 20, color:blue[500]}}/>
                </div>
                <div className='paddingAll'>
                    <span className='title'>30 Inv</span>
                    <br/>
                    <span className='subTitle'>Invoices Ready</span>
                </div>
                </Stack>
            </Card>
            <Card sx={{ minWidth: 345 }}>
              <Stack spacing={2} direction="row">
                <div className='iconStyle'>
                  <Inventory2RoundedIcon sx={{fontSize: 20, color: blue[500]}}/>
                </div>
                <div className='paddingAll'>
                    <span className='title'>30 P</span>
                   <br/>
                    <span className='subTitle'>Proposals Pending</span>
                </div>
                </Stack>
            </Card>
          </Stack>
        </Grid>
      </Grid>
      <Box height={20}/>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Card sx={{ height: 60 + "vh"}}>
            <CardContent>
            <Barchart/>
            </CardContent>
          </Card> 
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ height: 60 + "vh"}}>
              <CardContent>
              <div className='paddingAll'>
                    <span className='title'>Most Recent Activity</span>
                </div>
              <AccountAccordion/>
              </CardContent>
          </Card>
        </Grid>
      </Grid>
      </Box>
    </Box>
    </div>
    
    </>
  )
}

