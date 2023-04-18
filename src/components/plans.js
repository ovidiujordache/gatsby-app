import * as React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';



const freePlanFeatures = ['Free feature 1', 'Free feature 2', 'Free feature 3', 'Free feature 4']
const proPlanFeatures = ['Pro  feature 1', 'Pro  feature 2', 'Pro feature 3', 'Pro  feature 4']
const premiumPlanFeatures = ['Premium  feature 1', 'Premium  feature 2', 'Premium feature 3', 'Premium  feature 4']
const cardStyle = {
    card: {
        maxWidth: 345
    },
    media: {
        height: 300,
        border: '2px solid #a10165',
        boxShadow: 3
    }
}


export const FreePlan = () => {
    const data = useStaticQuery(query)

    return (

        <Card style={cardStyle.card}>

   <Img 
                fluid={data.freePlan.childImageSharp.fluid} 
               
               
            />

    
      <CardContent>
      <List>
       {freePlanFeatures.map((feature)=><ListItem>{feature}
        </ListItem>)}

      </List>
        <Typography gutterBottom variant="h5" component="div">
          Free Plan
        </Typography>
        <Typography variant="body2" color="text.secondary">
Free Plan 100/month 
proposals Ullamco adipisicing 
proident tempor tempor aute 
dolor enim aliqua eiusmod 
voluptate aliquip proident
 sunt officia.
        </Typography>
      </CardContent>
      <CardActions>
       <Button size="small">Sign up Today</Button>
        <Button size="small">Free trial</Button>
      </CardActions>
    </Card>
    )
}






export const ProPlan = () => {
    console.log("pro plan.")

    const data = useStaticQuery(query)
    return (

        <Card style={cardStyle.card}>
      <Img 
                fluid={data.proPlan.childImageSharp.fluid}
        />
              <List>
       {proPlanFeatures.map((feature)=><ListItem>{feature}</ListItem>)}

      </List>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pro Plan
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Free Plan 100/month proposals 
        Ullamco adipisicing proident tempor tempor aute dolor enim aliqua eiusmod voluptate aliquip proident sunt officia.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Sign up Today</Button>
        <Button size="small">Free trial</Button>
      </CardActions>
    </Card>
    )
}
export const PremiumPlan = () => {

    console.log(query)
    const data = useStaticQuery(query)
    console.log("premium plan ...")
    console.log(data)
    return (

        <Card style={cardStyle.card}>
    
        <Img 
                fluid={data.premiumPlan.childImageSharp.fluid}
               
               
              />
              <List>
       {premiumPlanFeatures.map((feature)=><ListItem>{feature}</ListItem>)}

      </List>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Premium Plan
        </Typography>
        <Typography variant="body2" color="text.secondary">
     Free Plan 100/month proposals Ullamco adipisicing proident tempor tempor aute dolor enim aliqua eiusmod voluptate aliquip proident sunt officia.
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">Sign up Today</Button>
        <Button size="small">Free trial</Button>
      </CardActions>
    </Card>
    )
}

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