import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import 'react-lazy-load-image-component/src/effects/blur.css';
import { Container, Grid } from "@material-ui/core";



const useStyles = makeStyles(() => ({
  video:{
    paddingBottom: "40px"
  },
  
	header1 :{
		fontFamily: 'SVNShaded',
		fontSize: "30px",
		lineHeight: "30px",
		marginBottom: "10px",
		marginTop: "20px",
		color: "#084f1f",
		textAlign: "center"
	},
	leftvid : {
		width: "100%",
		"&>video" :{
			width: "100%"
		}
	},
	right: {
	  marginTop: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
		
  },
  h3 : {
    fontSize: "1.2rem",
    fontFamily: 'FSDiavloRegular',
    color: "black"
  },
  h5  :{
    color: "#030303",
    fontSize: "1rem",
    fontFamily: 'FSDiavloRegular',
  }
  
}));

function PageSix() {
  const classes = useStyles();

  const [touchDevice, setTouchDevice] = useState(false);
  useEffect(() => {
    setTouchDevice("touchstart" in document.documentElement);
  }, []);
 
  
  
  return (
    <> {touchDevice && <div >
      <Container disableGutters >
        
        <div className={classes.video}>
        <Grid item xs={12} >
						<h4 className={classes.header1}>Quy trình sản xuất</h4>
						<div className={classes.leftvid}>
							<video
								controls
								data-automation="FootageHero_heroVideo_video"
								autoplay="true"
								preload="auto"
								loop="loop"
								muted="muted"
								webkit-playsinline="true"
								playsinline="true"
								poster=""
								style={{ width: '100%' }}
							>
								{/* <source
									src="https://ak.picdn.net/footage/assets/directors_choice/Lunar-New-Year-2019-stock-videos.webm"
									type="video/webm"
								/> */}
								<source src={"https://oldhenryvn.s3-ap-southeast-1.amazonaws.com/assets/introduce.mp4"} type="video/mp4" />
							</video>
						</div>
            </Grid> 
          <Grid style={{paddingLeft: 10, paddingRight: 10}}>
			
						<div className={classes.right}>
							<h3 className={classes.h3}>Old Henry sử dụng các thành phần hữu cơ, an toàn hàng đầu để làm mì chất lượng cao nhất.</h3>
                <br/>
							<h5 className={classes.h5}>100% nguyên vật liệu đều được tuyển chọn và kiểm tra nghiêm ngặt trước khi đưa vào nhà máy sản xuất.</h5>
							{/* <Button className={styles.button} size="large" type="default">
									Tìm Hiểu Thêm
								</Button> */}
						</div>
				
		
          </Grid> 
          </div>
          <div style={{height: 1, background:'#084f1f'}}></div>
        </Container> 
        </div>}
    </>
  );
}

export default PageSix;
