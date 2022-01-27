import React from 'react';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
      <div>
          <EmailIcon className='contact' fontSize='large' onClick={() => window.open("mailto:save-earth@we-are-the-world.com", "_blank")}/>
      </div>
  );
}

export default Contact;
