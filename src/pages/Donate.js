import React from 'react';
import TeamSea from '../images/image-donation/team-seas-logo.png';
import TeamTree from '../images/image-donation/team-trees-logo.png';
import Team350 from '../images/image-donation/360-logo.png';
import DonateCard from '../components/Nav/DonateCard';
import { Grid } from '@mui/material';


function Donate() {

const Orginisation =[
  {
    name:'Team tree',
    pictures:TeamTree,
    note:"uhdeijfei"
  },
  {
    name: 'Team Sea',
    pictures:TeamSea,
    note:"hhffn"
  },
  {
    name:"350.ORG",
    pictures:Team350,
    note:'360nfnfn'
  }
];




  return (
    <div>
        Donate Page
        <h1>Want to help? <br/> Make a change by donating one of these organisation!</h1>
        <br/>
        <Grid container spacing={4}>
      {Orginisation.map((element) =>{
        return(
          <Grid item xs={3}>
        <DonateCard  name={element.name} note={element.note} pictures={element.pictures}/>
        </Grid>
        )
      })}
      
      </Grid>
    </div>
    );
}

export default Donate;