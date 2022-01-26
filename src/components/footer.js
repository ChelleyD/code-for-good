import React, {useState, useEffect} from 'react';
import { Typography, button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import RedditIcon from "@mui/icons-material/Reddit";
import { PortalWithState } from 'react-portal';
import Faq from '../pages/Faq';

const Footer = () => {
  const [isOpen, setOpen] = useState(false);
  useEffect(()=>{
    if (isOpen){
      document.getElementById('root').style.opacity = '.5'
    }
    else {
      document.getElementById('root').style.opacity = '1'
    }
  }, [isOpen])

  console.log(isOpen)
  return (
    <div className="footer">
      <PortalWithState
        node={document.getElementById("portal")}
        closeOnOutsideClick={false}
        closeOnEsc
        onOpen={()=>setOpen(true)}
        onClose={()=>setOpen(false)}
      >
        {({ openPortal, closePortal, isOpen, portal }) => (
          <React.Fragment>
            <Typography
              variant="body2"
              onClick={openPortal}
              sx={{ cursor: "pointer" }}
            >
              FAQ
            </Typography>
            {portal(<Faq onClose={closePortal}/>)}
            </React.Fragment>
        )}
      </PortalWithState>


        <div className="footer-social">
          <Typography variant="body2">Social:</Typography>
          <FacebookIcon
            color="white"
            onClick={() => window.open("https://www.facebook.com/", "_blank")}
          />
          <InstagramIcon
            color="white"
            onClick={() => window.open("https://www.instagram.com/", "_blank")}
          />
          <RedditIcon
            color="white"
            onClick={() => window.open("https://www.reddit.com/", "_blank")}
          />
        </div>
      </div>
  );
};

export default Footer;
