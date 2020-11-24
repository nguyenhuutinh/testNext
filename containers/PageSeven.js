import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import useWindowDimensions from "../hooks/windowsize";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Container, Grid } from "@material-ui/core";
import "react-image-lightbox/style.css"
import { Carousel } from 'react-responsive-carousel';
import Lightbox from 'react-image-lightbox';
const images_large = [ "../g1.webp", "../g2.webp" ];
const images = [ "../g1.jpg", "../g2.jpg" ];
const useStyles = makeStyles(() => ({
  certpart:{
    backgroundImage: "url('../bg.jpg')",
    paddingTop: "30px",
    width: "100%",
    backgroundPosition: "top",
    backgroundSize: "cover"
  },
  item:{
    margin: "10px",
    border: "5px solid rgba(255,202,108,1)"
  },
  cert:{

    background: "linear-gradient(90deg, rgba(255,202,108,1) 0%, rgba(242,210,146,1) 6%, rgba(255,202,108,1) 50%, rgba(242,210,146,1) 93%, rgba(255,202,108,1) 100%)",
    borderRadius: "6px",
    margin: "10px",
    marginTop: "20px",
   
  },
  certtitle: {
    color: "#23682b",
    fontFamily: 'UTMCenturBold',
    padding: "10px",
    paddingLeft: "5px",
    paddingRight: "5px",
    textTransform: "uppercase",
    fontSize: "19px",
    // font-weight: 600;
    textAlign: "center"
  },
  cert_desc:{
    color: "#facd7a",
    fontFamily: 'UTMCenturBold',
    padding: "10px",
    textTransform: "uppercase",
    fontSize: "15px",
    minHeight: "50px",
    fontWeight: 600,
    textAlign: "center",
  },
  slider:{
    "& >div":{
      paddingBottom: "30px",
    }
    
  }
}));

function PageSeven() {
  const classes = useStyles();
  const [touchDevice, setTouchDevice] = useState(false);
  useEffect(() => {
    setTouchDevice("ontouchstart" in document.documentElement);
  }, []);
  const [ photoIndex, setPhotoIndex ] = useState(0);
	const [isOpen , setOpen ] = useState(false);
  
  
  return (
    <> {touchDevice &&
      <Container disableGutters>
        <Grid item xs={12}  className={classes.certpart}>
        <div className={classes.cert}>
						<h3 className={classes.certtitle} >
						Giấy Kiểm định chất lượng
						</h3>
					</div>
					<div className={`${classes.cert_desc}`}>
          từ viện năng suất chất lượng Deming tại Việt Nam
					</div>
					<Carousel showThumbs={false} className={classes.slider} showStatus={false} >
						{images.map((record, index) => {
							return (
								<div
									key={index}
									className={classes.item}
									onClick={() => {
										setPhotoIndex(index), setOpen(true);
									}}
								>
									<img effect="blur" src={record} />
								</div>
							);
						})}
					</Carousel>
          <br/>
          </Grid>
        </Container> 
       }
       {isOpen && (
				<Lightbox
					mainSrc={images_large[photoIndex]}
					nextSrc={images_large[(photoIndex + 1) % images.length]}
					prevSrc={images_large[(photoIndex + images.length - 1) % images.length]}
					onCloseRequest={() => setOpen(false)}
					onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
					onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
					imageTitle={
						'Giấy chứng nhận Old Henry từ Viện Năng Suất Chất Lượng Deming tại Việt Nam'
						
					}
					imageCaption={
						'Giấy chứng nhận Old Henry từ Viện Năng Suất Chất Lượng Deming tại Việt Nam'
					}
				/>
			)}
    </>
  );
}

export default PageSeven;
