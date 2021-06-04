import styles from "../styles/Home.module.css";
import "normalize.css";
import React, { useEffect, useState } from "react";
import Lightbox from 'react-image-lightbox';
import Footer from "../containers/Footer";
import { Button, Container, Grid, makeStyles } from "@material-ui/core";
import "react-image-lightbox/style.css"
import PageOne from "../containers/PageOne";
const images = ["../deming01.jpg", "../deming02.jpg"]
const useStyles = makeStyles({
  certpart2: {
    marginTop: "-4px",
    // paddingBottom: "15vh",
    // background-position-y: 15%;
    backgroundImage: "url('../bg2.png')",
    backgroundRepeat: "no-repeat",
    // height: 500vh;
    padding: "30px",
    width: "100%",
    backgroundPosition: "top center",
    backgroundSize: "cover"
    
  
  },


desc1:{
	color: "#fdf3d8",
	// font-family: 'Source Sans Pro', sans-serif;
	fontWeight: "300",
	paddingTop: "10px",
	// text-transform: uppercase;
	fontSize: "13px",
	fontWeight: 300,
	// min-height: 130px;
	textAlign: "left"
}
})
export default function Home() {
  const [isOpen, setOpen] = useState(false)
  const [ photoIndex, setPhotoIndex ] = useState(0);
  const classes = useStyles();
  return (
    <>
      <PageOne />
      <Container className={classes.certpart2} disableGutters>
      <Grid item xs={12} >
      
								<div className={classes.certheader1}>
									<img  style={{width: "60%", height : "60%"}}src={"../header1.png"}  />
								</div>
                <Grid item xs={12} >
								<div className={classes.desc1}>Từ viện năng suất chất lượng DEMING Việt Nam</div>
							</Grid>
							</Grid>
							

							<Grid span={21} style={{ marginTop: 20 }}>
								<img
									alt="Deming certificate"
									style={{ width: '100%', maxWidth: '1300px', marginBottom: 5 }}
									src={"../deming01.jpg"}
									onClick={() => {
										setPhotoIndex(0), setOpen(true);
									}}
								/>
							</Grid>
							<Grid span={21} style={{ marginTop: 20 }}>
								<img
									alt="Deming certificate"
									style={{ width: '100%', maxWidth: '1300px', marginBottom: 5 }}
									src={"../deming01.jpg"}
									onClick={() => {
										setPhotoIndex(1), setOpen(true);
									}}
								/>
							</Grid>
						
      
      </Container>
      <Footer/>
      {isOpen && (
				<Lightbox
					mainSrc={images[photoIndex]}
					nextSrc={images[(photoIndex + 1) % images.length]}
					prevSrc={images[(photoIndex + images.length - 1) % images.length]}
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
