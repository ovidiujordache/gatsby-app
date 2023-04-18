import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Navbar from './Navbar'
import Grid from "@mui/material/Grid";
import Img from "gatsby-image"
import { FreePlan, ProPlan, PremiumPlan } from './plans'

import { useStaticQuery, graphql } from "gatsby"


export default function HomeComponent() {

    return (<React.Fragment>
      <CssBaseline />
      <Navbar/>
      <Container>
        <Typography>
        Irure exercitation irure id dolore fugiat dolore culpa exercitation 
        enim cupidatat dolore incididunt laboris nostrud cupidatat amet nostrud sit pariatur fugiat fugiat in in consectetur culpa duis pariatur.
       Ut excepteur in id est anim non aute sunt incididunt non incididunt dolor reprehenderit esse labore voluptate pariatur consequat voluptate anim consectetur ad sit minim aute eiusmod magna reprehenderit qui excepteur dolore incididunt proident officia in aute labore consectetur non nostrud anim commodo et eu ut pariatur dolor elit consectetur anim laborum ex fugiat nisi cillum exercitation cupidatat dolor aliquip exercitation non ea veniam sit ut dolore dolor aute irure mollit nulla ut in eu elit fugiat ex nostrud reprehenderit aute consequat sunt anim sunt nisi occaecat do sint aliquip officia in proident commodo magna ullamco laboris laboris est mollit ut mollit do ut esse qui non sint officia aute dolor velit nisi tempor quis anim dolor nisi cillum sunt in adipisicing aliqua anim ad amet reprehenderit nostrud est fugiat non laborum sunt quis enim proident duis occaecat veniam qui do adipisicing culpa ut culpa reprehenderit fugiat ex sit pariatur cupidatat consectetur dolor aute do aliquip veniam deserunt enim consectetur proident adipisicing irure excepteur adipisicing ea consectetur occaecat dolore adipisicing fugiat officia non anim consequat cupidatat qui ullamco irure aute ut occaecat dolor ut aliqua enim commodo veniam cillum sed laborum sint incididunt et qui do sed culpa labore consectetur cillum ut nulla aute cillum et qui duis sed enim aute qui veniam occaecat id anim commodo et enim in nostrud voluptate id proident officia est ea ex voluptate deserunt fugiat ad eu quis aute cupidatat incididunt nostrud aliqua commodo esse ex elit do dolor qui anim sit sunt magna exercitation et est dolore reprehenderit ea ut duis sunt sunt est nulla.
        </Typography>
      </Container>
      <Container >
    

            <Box component="main" sx={{ width:'50',justifyContent:'',padding:'20px'}}>
        <Toolbar />
        <Typography>
       <Grid
          direction="row" 
          container
          spacing={1}
          justifyContent="flex-start"
          alignItems="flex-start"
          
        >
          <Grid item xs={10} sm={4}>
            <FreePlan />
          </Grid>
          <Grid item xs={10} sm={4}>
            <ProPlan />
          </Grid>
          <Grid item xs={10} sm = { 4 }>
            <PremiumPlan />
          </Grid>
        </Grid>
        </Typography>
      </Box>
      <Footer/>
      </Container>

    </React.Fragment>

    )
}
export const Footer = () => {
    const data = useStaticQuery(query)
    const year = new Date().getFullYear();

    return <footer>
    <Container>
    <h5> <span>  {`Copyright © Workeye ${year}`}</span></h5>

   <Img 
                fixed={data.brand.childImageSharp.fixed}
               
               
              />
   
</Container>
    </footer>;
};


export const fluidAndFixedImage = graphql `
 fragment fluidAndFixedImage on File {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
          fixed(width:650){
            ...GatsbyImageSharpFixed
          }
          original {
            width
          }
        }
    }

`
export const query = graphql `
     query {
      
       brand: file(
         relativePath: { eq: "brand.png" }
       ) {
         ...fluidAndFixedImage
       }
       quoteMagic: file(
         relativePath: { eq: "quotemagic.png" }
       ) {
         ...fluidAndFixedImage
       }
          freePlan: file(
         relativePath: { eq: "freeplan.png" }
       ) {
         ...fluidAndFixedImage
       }
        proPlan: file(
         relativePath: { eq: "proplan.png" }
       ) {
         ...fluidAndFixedImage
       }
       premiumPlan: file(
         relativePath: { eq: "premiumplan.png" }
       ) {
         ...fluidAndFixedImage
       }
     
      
  
     }

`