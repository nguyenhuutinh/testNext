import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import useWindowDimensions from "../hooks/windowsize";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Container, Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: "#ecf6e8",
  },
  promovideo: {
    backgroundColor: "white",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    border: "1px solid #084f1f",
    backgroundSize: "cover",
    marginBottom: "70px",
    display: "flex",
    flexDirection: "column",


  },
  videotitle: {
    paddingTop: "30px",
    textAlign: "center",

  },
  text1: {
    width: "95%",
  },
  text2: {
    marginTop: "10px",
    width: "95%"
  },
  videoitem: {
    marginTop: "40px",
    // margin-left: 2px;
    // margin-right: 2px;
    marginBottom: "0px",
    width: "calc(100% - 0.5px)"
  }
}));

function PageFour() {
  const classes = useStyles();
  const { height } = useWindowDimensions();
  const halfHeight = height / 3;
  const [touchDevice, setTouchDevice] = useState(false);
  useEffect(() => {
    setTouchDevice("touchstart" in document.documentElement);
  }, []);
  return (
    <>{touchDevice && <div className={classes.root}>
      <Container>
        <Grid
          container
          alignContent="center"
          justify="center"
        >
          {true ?
            <div className={classes.promovideo}>
              <div className={classes.videotitle}>
                <LazyLoadImage effect="blur" className={classes.text1} src={"../mbtext1.png"} />
                <LazyLoadImage effect="blur" className={classes.text2} src={"../mbtext2.png"} />
              </div>
              <video
                className={classes.videoitem}
                controls
                data-automation="MIKIEUMACH_OLDHENRY_heroVideo_video"
                autoPlay={false}
                preload="auto"
                loop="loop"
                muted="muted"
                webkit-playsinline="true"
                playsInline= {true}
                poster=""
              >

                <source src={"https://oldhenryvn.s3-ap-southeast-1.amazonaws.com/assets/chi-tai-preview.mp4"} type="video/mp4" />
              </video>

            </div> : ""}
        </Grid>
        </Container> 
        </div>}
    </>
  );
}

export default PageFour;
