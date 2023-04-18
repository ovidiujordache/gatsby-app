import React from 'react'
import { ProposalComponent } from '../components/ProposalComponent'
import Navbar from '../components/Navbar'
import SidebarNav from '../components/SideBar.js';
import Box from '@mui/material/Box';


export default function Proposals () 
{
  return (
    <>
    <Navbar/>
    <Box height={70}/>
    <Box sx={{ display: 'flex' }}>
      <SidebarNav item1="Account" item2="Customers" item3="Invoices" item4="Templates"/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      This is the Proposal page
      </Box>
    </Box>
    </>
  )
};
