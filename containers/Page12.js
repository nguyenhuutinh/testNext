import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Container, Grid } from "@material-ui/core";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Rating from '@material-ui/lab/Rating';


const testimo = [
	{
		content: 'Cô đã giảm đường huyết từ 184 mol xuống còn 140 mol sau 2 tuần dùng mì đó con',
		name: 'Cô Hiền (68 tuổi – TPHCM)',
		image: "../khach1.jpg"
	},
	{
		content: 'Cô dùng sau 2 tuần, đường huyết giảm từ 322 mol xuống còn 170 mol',
		name: 'Cô Hương Thủy ( 67 tuổi - Thủ Đức)',
		image: "../khach2.jpg"
	},
	{
		content:
			'Cô đã cắt giảm khá nhiều thuốc sau thời gian sử dụng mì Old Henry. Việc cắt giảm thuốc giúp giảm các tác dụng phụ không mong muốn đến sức khỏe',
		name: 'Cô Mai (68 tuổi - Quận 10)',
		image: "../khach3.jpg"
	},
	{
		content: 'Mì Old Henry ăn rất ngon miệng, dễ ăn, cảm thấy no bụng nhưng vẫn dễ chịu, nhẹ bụng',
		name: 'Cô Hiền (68 tuổi - Quận 9)',
		image: "../khach4.jpg"
	},
	{
		content: 'Anh đang giảm cân, ăn ít thường đói, nhưng mì này ăn thấy no mà còn không mập',
		name: 'Anh Hưng ( 45 tuổi - Hà Nội)',
		image: "../khach5.jpg"
	}
];
const useStyles = makeStyles(() => ({
	testimo: {
		marginTop: "0px",
		background: "#f5f6fa",
		
		// background: linear-gradient(
		// 	69deg,
		// 	rgba(4, 147, 0, 0.6110819327731092) 0%,
		// 	rgba(4, 149, 41, 1) 46%,
		// 	rgba(17, 87, 9, 1) 100%
		// );
		paddingBottom: "30px",
		
		
	},
	header1: {
		// font-family: 'UTMCenturBold';
		fontSize: "1.4rem",
		marginTop: "20px",
		textAlign: "center",
		color: "#084f1f",
		fontWeight: 600,
	},
	panel: {
		marginLeft: "10px",
		marginRight: "10px",
		background: "white",
		borderRadius: "10px",
		// -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.25);
		// box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.25);
		// padding: 20px;
		fontSize: "16px",
		minHeight: "400px",
		
	},
	name_kh :{
		fontWeight: 600,
		fontSize: "16px"
	},
	avatar :{
		webkitBoxShadow: "5px 5px 38px 5px rgba(0, 0, 0, 0.24)",
		boxShadow: "5px 5px 38px 5px rgba(0, 0, 0, 0.24)"
	},
	rightRate : {
		// background-image: url('./images/bg3.png');
		// background-size: cover;
		// background-position: center;
		padding: "20px"
	},
	review_item : {
		marginTop: "30px",
		position: "relative"
	},
	// rating: {
	// 	fontSize: "20px"
	// },
	// quote: {
	// 	display: "flex",
	// 	justifyContent: "center",
	// 	alignItems: "center",
	// 	backgroundColor: "white",
	// 	zIndex: 100,
	// 	width: "80px",
	// 	height: "80px",
	// 	padding: "10px",
	// 	borderRadius: "50%",
	// 	webkitBoxShadow: "5px 5px 38px 5px rgba(0, 0, 0, 0.24)",
	// 	boxShadow: "5px 5px 38px 5px rgba(0, 0, 0, 0.14)",
	// 	top: "-30px",
	// 	left: "10px",
	// 	position: "absolute",
	// 	"& :before": {
	// 		fontFamily: "Font Awesome 5 Free",
	// 		fontWeight: 500,
	// 		content: '"\f10d" !important',
	// 		fontSize: "40px",
	// 		color: "rgb(231, 216, 0)"
	// 	}
	// }
  
}));

function Page12() {
  const classes = useStyles();

  const [touchDevice, setTouchDevice] = useState(false);
  useEffect(() => {
    setTouchDevice("ontouchstart" in document.documentElement);
  }, []);
 
  
  
  return (
    <>{touchDevice && 
      <Container disableGutters >
        
        <div className={classes.testimo}>
        <Grid item xs={12} style={{textAlign: 'center'}} >
		<br />
							<h2 className={classes.header1}>ĐÁNH GIÁ CỦA KHÁCH HÀNG</h2>
							{/* <Rating
         
          defaultValue={5}
		  precision={0.5}
		  size="large"
		  readOnly
		  style={{marginTop: 10}}
        /> */}
            </Grid> 
          <Grid style={{paddingLeft: 10, paddingRight: 10}}>
			
		  	<Carousel
								showThumbs={false}
								className={classes.slider}
								showStatus={false}
							>
								{testimo.map((record, index) => {
									return (
										<div
											key={index}
											className={classes.review_item}
											
										>
											<div className={classes.panel}>
												{/* <div className={classes.quote} /> */}
												<Grid item xs={12}  className={classes.panel}>
										
															<div
																className={classes.rightRate}
																span={24}
																style={{
																	display: 'flex',
																	flexDirection: 'column',
																	alignItems: 'center',
																	justifyContent: 'center'
																}}
															>
																<br />
																<LazyLoadImage effect="blur"  
																	src={record.image}
																	className={classes.avatar}
																	style={{
																		width: 120,
																		height: 120,
																		borderRadius: '50%'
																	}}
																/>
																{/* <br /> */}
																{/* <Rate
																	defaultValue={5}
																	disabled
																	className={styles.rating}
																/> */}
																{/* <br /> */}
															</div>
															<div span={24} style={{ padding: 20, color: 'black' }}>
																{"\" "+ record.content +" \""}
																<br /><br />
																<div className={classes.name_kh}>
																{record.name}
																</div>
															</div>
														
													</Grid>
											
											</div>
										</div>
									);
								})}
							</Carousel>
		
          </Grid> 
          </div>
          <div style={{height: 1, background:'#084f1f'}}></div>
        </Container> 
}
    </>
  );
}

export default Page12;
