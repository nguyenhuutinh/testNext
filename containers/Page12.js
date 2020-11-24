import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import useWindowDimensions from "../hooks/windowsize";
import { Element, Link, scroller } from 'react-scroll';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Button, Container, Grid } from "@material-ui/core";

import { Carousel } from 'react-responsive-carousel';


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
const useStyles = makeStyles((theme) => ({
  
  
}));

function PageSix() {
  const classes = useStyles();

  const [touchDevice, setTouchDevice] = useState(false);
  useEffect(() => {
    setTouchDevice("ontouchstart" in document.documentElement);
  }, []);
 
  
  
  return (
    <><div >
      <Container disableGutters >
        
        <div className={classes.video}>
        <Grid item xs={12} >
		<br />
							<h2 className={classes.header1}>ĐÁNH GIÁ CỦA KHÁCH HÀNG</h2>
							{/* <Rate defaultValue={5} disabled style={{ fontSize: 30 }} /> */}
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
        </div>
    </>
  );
}

export default PageSix;
