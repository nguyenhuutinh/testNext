import React, { useState, useEffect } from "react";
import { makeStyles , createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";

import useWindowDimensions from "../hooks/windowsize";
import Button from '@material-ui/core/Button';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Container, Grid } from "@material-ui/core";


const redTheme = createMuiTheme({ palette: { primary: {light: '#f6685e',
main: '#f44336',
dark: '#aa2e25',
contrastText: '#fff',} } })

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
    marginBottom: "5px",
    display: "flex",
    flexDirection: "column",
    overflow:'hidden',
    position:"relative"

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
  },
  card:{
    display: "flex",
    padding:"10px",
    alignItems:'center',
    position:'relative'
    // borderBottom: "1px dotted black"

  },
  active:{
    backgroundColor:'#26C281'
  },
  image:{
    width: "100px",
    height:"70px",
    display:'table',
    backgroundSize:"cover",
    borderRadius: "10px",
    marginRight: "10px"
    
  },
  title:{
    fontSize: 16,
    paddingRight: 10

  },
  button:{
    color: "white",
    background:'red',
    marginBottom:'60px',
    
  },
  
}));

function PageFour({ data }) {
  const classes = useStyles();
  const { height } = useWindowDimensions();
  const halfHeight = height / 3;
  const [isSelected, setIsSelected] = useState(false);
  const [touchDevice, setTouchDevice] = useState(false);
  const [videoId, setVideoId] = useState();
  useEffect(() => {
    setTouchDevice("ontouchstart" in document.documentElement);
  }, []);

  const playItem = (id, pos) =>{
    setIsSelected(pos)
    setVideoId(id)
  }
  return (
    <>{touchDevice && <div className={classes.root}>
      <Container>
        <Grid
          container
          alignContent="center"
          justify="center"
        >
          
            <div className={classes.promovideo}>
              {/* <div className={classes.videotitle}>
                <LazyLoadImage effect="blur" className={classes.text1} src={"../mbtext1.png"} />
                <LazyLoadImage effect="blur" className={classes.text2} src={"../mbtext2.png"} />
              </div> */}
              <iframe height="200" src={`https://www.youtube.com/embed/${videoId ?? "z9qukTOx7mI"}`} sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation" frameborder="0" allow="accelerometer; autoplay;" allowfullscreen></iframe>
              <div>
              {data.items.slice(0,3).map(({ id, snippet = {}, entry }, index) => {
                  
                    const { title, thumbnails = {}, resourceId = {} } = snippet;
                    const { medium } = thumbnails;
                    return (
                      <div key={id} className={isSelected == index ? `${classes.card} ${classes.active}` : `${classes.card}`} onClick={()=>{playItem(resourceId.videoId, index)}}>
                          <div className={classes.image} style={{backgroundImage: `url(${medium.url})`}} alt="" />
                          <h5 className={classes.title} >{ title }</h5>
                      </div>
                    )
                  })}
              </div>
              

            </div> 
            <MuiThemeProvider theme={redTheme}>
              <Button className={classes.button} variant="contained" href="https://www.youtube.com/playlist?list=PLYtQnSZdvHMigAe_ip_fWNHQrwtEBzT3j">XEM THÊM TRÊN YOUTUBE</Button>      
            </MuiThemeProvider>
            
        </Grid>
        </Container> 
  </div> }
    </>
  );
}

export default PageFour;
