import React, { useState, useEffect } from 'react';

import { Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';

function HomePage({ className }) {
  const [events, setEvents] = useState([]);

  const serverUri = (location.hostname === "localhost" || location.hostname === "127.0.0.1") ? 'http://localhost:5000' : 'https://musicline-backend.vercel.app';


  useEffect(() => {
    fetch(`${serverUri}/events`, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setEvents(data);
      }
      ).catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className={className}>
      {
        events[0] ?

          <Box sx={{ flexGrow: 2, height: '100%' }}>
            <Grid container spacing={1} sx={{ height: '100%' }}>
              {events.map((ev) => {
                return (
                  <Grid item xs={11} md={4}>
                    <Card sx={{ display: 'flex' }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                          <Typography component="div" variant="h6" fontSize={'15px'}>
                          {ev.title}
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div" fontSize={'11px'} paddingTop={"10px"}>
                          {ev.date}
                          </Typography>
                          <Typography variant="subtitle2" color="text.secondary" component="div" fontSize={'11px'}paddingTop={"10px"}>
                          {ev.location}
                          </Typography>
                        </CardContent>
                        {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}> */}
                          <CardActions>
                            <Button size="small" fontSize={'12px'} href={ev.link}>Link</Button>
                          </CardActions>
                        {/* </Box> */}
                      </Box>
                      <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={ev.img}
                        alt="event image"
                      />
                    </Card>
                    {/* <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        sx={{ height: 140 }}
                        image={ev.img}
                        title="event image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {ev.title}
                        </Typography>
                        <Typography variant="body3" color="text.secondary">
                          {ev.date}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {ev.location}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" href={ev.link}>Link</Button>
                      </CardActions>
                    </Card> */}
                  </Grid>
                );
              })}
            </Grid>
          </Box>

          :

          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
      }

    </div>
  );
};

export default HomePage;