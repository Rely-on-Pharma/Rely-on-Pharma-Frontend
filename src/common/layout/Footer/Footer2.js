"use client"
import React from 'react';
import { Box, Typography, Grid, List, ListItem, Link, styled } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const CustomFooter = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main, // Set your desired background color
  color: theme.palette.common.white,
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
}));

const Footer2 = () => {
  return (
    <CustomFooter>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Quick Links</Typography>
          <List>
            <ListItem>
              <Link href="#">Home</Link>
            </ListItem>
            <ListItem>
              <Link href="#">About Us</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Services</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Contact</Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Follow Us</Typography>
          <List>
            <ListItem>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
              </Link>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </CustomFooter>
  );
};

export default Footer2;
