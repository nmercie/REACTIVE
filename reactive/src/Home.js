import React, { useState, useEffect } from "react";
import { Paper } from "@mui/material";
import  { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from '@mui/material/styles';
import Navbar from "./components/Navbar/Navbar";
import { Zoom } from "@mui/material";


const useStyles = styled((theme) => ({
  section: {
    height: "90vh",
    position: "relative",
  },
  content: {
    height: "100%",
    zIndex: 100,
    position: "relative",
  },
  container: {
    height: "100%",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 2,
  },
  heroImage: {
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
}));

export default function HeroSection() {
  const styles = useStyles();
  const [shouldShow, setShouldShow] = useState(false);
  useEffect(() => setShouldShow(true), []);
  return (
    <Paper className={styles.section} id="about">
      <Navbar />
      <img
        className={styles.heroImage}
        src="https://images.unsplash.com/photo-1574610758891-5b809b6e6e2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1512&q=80"
        alt=""
        style={{ position: "absolute" }}
      />
      <div className={styles.overlay}></div>
      <Container className={styles.container} maxWidth="md">
        <Grid
          className={styles.content}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Zoom in={shouldShow}>
            <Grid item sm={8}>
              <Typography component="h1" variant="h3">
                Hi, my name is Pheezx Coding. I'm a software engineer.
              </Typography>
              <Typography variant="h5">
                I build websites, web applications and responsive user
                interfaces. I create educational video content on Youtube.
              </Typography>
              <Box my={2}>
                <Button
                  href="mailto:address@email.com"
                  variant="outlined"
                  color="secondary"
                >
                  Get in Touch!
                </Button>
              </Box>
            </Grid>
          </Zoom>
          
        </Grid>
      </Container>
    </Paper>
  );
}