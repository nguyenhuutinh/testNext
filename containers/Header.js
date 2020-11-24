import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
    header: {
        // position: fixed;
        // top: 0;
        width: "100%",
        // z-index: 10;
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#012b1e",
        position: "relative",
        alignItems: "center",
        height: "60px",

    } ,
    link2:{
        display: "flex",
        alignItems: "center"
      },
    logo:{
        padding: "10px 15px",
        fontFamily: 'Oswald',
        fontSize: "24px",
        color: "#fddfa2",
        
        lineHeight: '20px',
        fontWeight: '500',
        
        link:{
            color: "#fddfa2",
            '&:hover': {
                color: "#fad281"
            }   
        },
    },
    slogan: {
        fontFamily: 'Oswald',
        color: "#fad281",
        fontSize: "16px",
        lineHeight: "18px",
        textAlign: "center",
    },
    messenger2 : {
        height: "40px"  
    }
  
}));

function Header() {
  const classes = useStyles();
  useEffect(() => {
    setTouchDevice("ontouchstart" in document.documentElement);
  }, []);
  const [touchDevice, setTouchDevice] = useState(true);
  return (
    <>
      {(
        <>
          <div >
            <Container disableGutters>
              <Grid
                container
                // direction="column"
                justify="space-between"
                // spacing={10}
                // alignItems="flex-start"
              >
                <Grid item xs={12}>
                    <div className={classes.header}>
						<a
                        className={classes.link2}
						
						onClick={() => {
							window.location.href = '/';
						}}
					>
							<div className={classes.logo}>
								Old
								<br />
								Henry
							</div>
							<div className={classes.slogan}>{"Mì Kiều Mạch"}</div>
							</a>
							
							<img src="../messenger.png" className={classes.messenger2} ></img>
						</div>
						
                </Grid>
                
              </Grid>
            </Container>
          </div>
        </>
      )}
    </>
  );
}

export default Header;
