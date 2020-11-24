import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Collapsed from "../components/Collapse";


const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: "#ecf6e8",
  },
  hightlight: {
    width: "100%",
    background: "url('../rect.jpg')",
    backgroundSize: "cover",
    paddingTop: "10px",
    // padding-left: 20px;
    // padding-right: 20px;
    paddingBottom: "10px",
    "& h5": {
      fontFamily: 'Oswald',
      fontSize: "1.4rem",
      // line-height: 1.3rem;
      color: "white",
      textAlign: "center",
      marginBottom: "0px",
      marginTop: "8px"
    }
  },
  advantage:{
    marginTop: "10p",
    marginBottom: "10px"
  }
}));

function PageThree() {
  const classes = useStyles();
  useEffect(() => {
    setTouchDevice("ontouchstart" in document.documentElement);
  }, []);
  const [touchDevice, setTouchDevice] = React.useState(false);
  return (
    <>
      {true && <div className={classes.root}>
        <Container>
          <Grid
            container
            direction="column"
            alignContent="center"
            justify="center"
          >
            <div className={classes.hightlight}>
              <h5 style={{ textTransform: 'uppercase' }}>
                ĐẶC ĐIỂM NỔI BẬT
							<br />
              </h5>

            </div>

          </Grid>
          <Grid
            container
            direction="column"
            alignContent="center"
            justify="center"
          >
            <div className={classes.advantage}>
              <Collapsed />
            </div>
          </Grid>
        </Container>
      </div>}
    </>
  );
}

export default PageThree;
