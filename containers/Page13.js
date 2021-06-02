// import React, { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";

// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
// import { Container, Grid } from "@material-ui/core";

// // import Rating from '@material-ui/lab/Rating';


// const baochi = [{
// 	content:"https://alobacsi.com/bi-quyet-on-dinh-duong-huyet-cua-danh-hai-chi-tai-n412734.html",
// 	image: "../alobacsi.jpg"
// },
// {
// 	content:"https://suckhoedoisong.vn/bat-mi-thuc-pham-tot-cho-suc-khoe-nhung-it-nguoi-biet-den-n181953.html",
// 	image: "../suckhoedoisong.png"
// },
// {
// 	content:"https://www.24h.com.vn/tin-tuc-suc-khoe/danh-hai-chi-tai-bat-mi-sieu-thuc-pham-tot-cho-suc-khoe-nhung-it-nguoi-biet-c683a1194516.html",
// 	image: "../24h.png"
// },
// {
// 	content:"https://ngoisao.vn/suc-khoe/cham-soc-suc-khoe/nghe-si-chi-tai-chia-se-hanh-trinh-on-dinh-duong-huyet-voi-mi-kieu-mach-old-henry-305936.htm",
// 	image: "../ngoisao.jpg"
// },
// {
// 	content:"https://thethaovanhoa.vn/ban-can-biet/danh-hai-chi-tai-chia-se-hanh-trinh-on-dinh-duong-huyet-voi-mi-kieu-mach-sieu-thuc-phamit-ai-biet-n20201028152213452.htm",
// 	image: "../TTVH.png"
// }
// ]
// const useStyles = makeStyles(() => ({
// 	baochi:{
// 		paddingBottom: "20px",
		
// 	},
// 	header1: {
// 		fontFamily: 'Oswald',
// 		fontSize: "1.4rem",
// 		marginTop: "20px",
// 		color: "#084f1f",
// 		textAlign: "center",
// 		fontWeight: 600
// 	},
// 	baochiImage: {
// 		background: "#ffffff",
// 		borderRadius: "10px",
// 		position: "relative",
// 		overflow: "hidden",
// 		alignItems:"center",
// 		minHeight: "60px",
// 		display: "grid",
// 		margin: "10px",
// 		webkitBoxShadow: "5px 5px 38px 5px rgba(80, 80, 80, 0.055)",
// 		boxShadow: "5px 5px 38px 5px rgba(114, 114, 114, 0.048)"
// 	}
  
// }));

// function Page13() {
//   const classes = useStyles();

//   const [touchDevice, setTouchDevice] = useState(false);
//   useEffect(() => {
//     setTouchDevice("ontouchstart" in document.documentElement);
//   }, []);
 
  
  
//   return (
//     <>{touchDevice && 
//       <Container disableGutters >
//         <div className={classes.baochi}>
//         <Grid item xs={12} style={{textAlign: 'center'}} >
		
// 							<br />
// 							<h2 className={classes.header1}>TRUYỀN THÔNG NÓI VỀ<br/>MÌ KIỀU MẠCH OLD HENRY</h2>
						
// 							<Grid container spacing={0}>

// 								{baochi.map((item, index)=>{
// 									return <Grid key={index} item lg={6} xs={6} md={6}> 
// 									<div className={classes.baochiImage}><a href={item.content} target="_blank"><LazyLoadImage effect="blur"   style={{width:'100%', height:'auto' }} src={item.image}/></a></div>
// 								</Grid>
// 								})}
// 								</Grid>
//             </Grid> 
          
//           </div>
//           <div style={{height: 1, background:'#084f1f'}}></div>
//         </Container> 
// }
//     </>
//   );
// }

// export default Page13;
