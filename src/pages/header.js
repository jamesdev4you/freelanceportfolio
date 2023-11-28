import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ReactComponent as Worldwide } from '../assets/svg/worldwide.svg';
import { motion } from 'framer-motion';
import ReactTyped from 'react-typed';
import '../index.css';

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'secondary.main',
        width: '100%',
        height: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant='h2'
        sx={{ width: '50%', color: 'white', fontFamily: 'Judson' }}
      >
        Comprehensive strategies for the digitization of your small business.
        Advancing your online presence done easy. I <span />
        <ReactTyped
          style={{ color: 'red' }}
          strings={[
            ' develop websites.',
            ' design websites.',
            ' do social media marketing.',
            ' do SEO.',
            ' help people.',
          ]}
          typeSpeed={100}
          loop
          backSpeed={70}
          cursorChar='|'
          showCursor={true}
        />
      </Typography>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
      >
        <Worldwide style={{ height: '400px' }} />
      </motion.div>
    </Box>
  );
};

export default Header;
