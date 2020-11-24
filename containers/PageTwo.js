import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import useWindowDimensions from "../hooks/windowsize";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const useStyles = makeStyles({
  banner: {
    background: "url('../Group23.jpg')",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    // height: 60vh;
    width: "100%",
    // display: flex;
    // ju
  },
  col1: {
    display: "flex",
    flexFlow: "row wrap",
    paddingLeft: "10px",
    paddingRight: "10px",
    alignItems: "center",
    justifyContent: "space-between"
  },
  col2 :{
    // display: flex;
    flexFlow: "row wrap"
    
  },
  mainbow: {
    minHeight: "50vh",
    paddingLeft: "10px",
    paddingRight: "10px",
    position: "relative",
    marginTop: "5vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexFlow: "row wrap",
    textAlign: "center",
    "& img":{
      width: "100%"
    }
  },
  logo: {
    display: "flex",
    alignItems: "center"
  },
  logovn: {
    height: "100px"
  },
  commingsoon : {
    // background-color: red;
    fontFamily: 'Oswald',
    fontSize: "1rem",
    display: "inline-flex",
    minWidth: "150px",
    color: "#fed797",
    // margin-top: 20px;
    marginBottom: "0px",
    lineHeight: "1.4rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
  
    
  }
});

function PageTwo() {
  const classes = useStyles();
  const { height } = useWindowDimensions();
  const halfHeight = height / 6;
  const imgHeight = height + halfHeight;
  // useEffect(() => {
  //   setTouchDevice("ontouchstart" in document.documentElement);
  // }, []);
  // const [touchDevice, setTouchDevice] = useState(false);
  return (
    <>
       
          <Container disableGutters>
            <Grid
              container
              className={classes.grid}
         
              justify="center"
              alignContent="center"
              spacing={0}
            >
              <Grid item xs={12} className={classes.banner}>
                <div className={classes.col1}>
                  <div className={classes.logo}>
                    <LazyLoadImage effect="blur"  className={classes.logovn} src={"../logo-03.webp"} />
                      <h5 className={classes.commingsoon}>
                        
                        HỖ TRỢ ỔN ĐỊNH <br/>
                        ĐƯỜNG HUYẾT HIỆU QUẢ 
                       
                      </h5>
                    </div>
                  </div>
                  <div className={classes.col2}>
                    <div className={classes.mainbow}>
                    <LazyLoadImage effect="blur" className={classes.image} src={"../bowl.webp"} />
                    </div>
                  </div>
                </Grid>
          </Grid>
          </Container>
     
      
    </>
  );
}

export default PageTwo;
