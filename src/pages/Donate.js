import React from 'react';
import TeamSea from '../images/image-donation/team-seas-logo.png';
import TeamTree from '../images/image-donation/team-trees-logo.png';
import Team350 from '../images/image-donation/360-logo.png';
import DonateCard from '../components/DonateCard';
import { Grid, Typography } from '@mui/material';
import Background from '../images/image-donation/Earth-green.jpeg';



function Donate() {

  const Orginisation = [
    {
      name: 'Team Tree',
      pictures: TeamTree,
      note: "Team Trees, stylized as #TEAMTREES,"
        + "is a collaborative fundraiser that raised 20 million U.S. dollars before 2020 to plant 20 million trees. ... "
        + "All donations go to the Arbor Day Foundation, a tree-planting organization that pledges to plant one tree for every U.S. dollar donated.",
        give:"https://teamtrees.org"
    },
    {
      name: 'Team Sea',
      pictures: TeamSea,
      note: "Team Seas, stylized as #TeamSeas, is an international collaborative fundraiser project run" +
        "by YouTubers MrBeast and Mark Rober as a follow up to Team Trees.",
      give:"https://teamseas.org"
    },
    {
      name: "350.ORG",
      pictures: Team350,
      note: "350.org is an international environmental organization addressing the climate crisis. Its stated goal is to end the use of fossil fuels"
        + "and transition to renewable energy by building a global, grassroots movement.",
      give:"https://act.350.org/donate/web_donate_button/"
    }
  ];

  return (
    <div  style={{backgroundImage:`url(${Background})`}}> 
      <div className="donation-container" >
      <Typography
        className="donate-heading"
        variant="h3"
        style={{ }}
      >
        <h3 >Want to help? <br /> Make a change by donating one of these organisation!</h3>
        <br />
      </Typography>
      <div>
      <Grid container  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {Orginisation.map((element) => {
          return (
            
              <Grid item>
                <DonateCard name={element.name} note={element.note} pictures={element.pictures} give={element.give} />
              </Grid>
           
          )
        })}

      </Grid>
      </div>
    </div>
    </div>
  );
}

export default Donate;
