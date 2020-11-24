import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import useWindowDimensions from "../hooks/windowsize";
import { Element, Link, scroller } from 'react-scroll';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Button, Container, Grid } from "@material-ui/core";

import { Carousel } from 'react-responsive-carousel';


const images = [ "../g1.webp", "../g2.webp" ];
const useStyles = makeStyles((theme) => ({
  productInfo:{
    backgroundColor: "#eff3f3",
    "& >p":{
      color: "black",
      fontSize: "16px",
      lineHeight: "22px",
      // font-style: italic;
      
      fontFamily: "Helvetica, sans-serif",
      
      margin: "0 auto"
  
    },
    
    padding: "10px",
    paddingBottom: "30px",
    textAlign: "center"
  },
  img1:{
    width: "100%"
  },
  productprice: {
    border: "1px dashed #02290e",
    fontSize: "16px",
    textAlign: "left",
    padding: "10px",
    color: "#084f1f",
    
    
  },
  productItems:{
    listStyle: "none",
    margin: "0 0 0 0",
    padding: "0 0 0 0",
  },
  productItem: {
    "&:before": {
      paddingRight: "10px",
      fontFamily: 'Font Awesome 5 Free', 
      fontWeight: 500,
      content: '"\f058"!important',
      color: "rgb(12, 102, 0)",
    }
  }
  ,
  discount: {
    color: "red",
    fontSize: "15px",
  },
}));

function PageSix() {
  const classes = useStyles();

  const [touchDevice, setTouchDevice] = useState(false);
  useEffect(() => {
    setTouchDevice("ontouchstart" in document.documentElement);
  }, []);
 
  
  
  return (
    <><div className={classes.root}>
      {touchDevice && <Container disableGutters>
        <Grid item xs={12} >
            <LazyLoadImage effect="blur" className={classes.img1} src={"../Layer42.webp"} />

        </Grid>
        <Grid item xs={12}>
        <div className={classes.productInfo}>
							<div>
								<p style={{ fontStyle: 'italic' }}>
									Thành phần: Bột mì, Bột kiều mạch Tartary, Bột lúa mạch cao nguyên, Bột mầm lúa mì,
									Bột Konjac, Muối, Sodium Carbonat.
								</p>
								<p>
									<p style={{ marginBottom: '10px' }}>Sản xuất theo Bản tự công bố: 01/TH/2020</p>
									Hộp lớn ( 2.7 kg ) : 30 túi nhỏ x 90g <br />
									Chiều cao: 310 mm <br />
									Chiều rộng: 230mm<br />
									<br />
									Túi nhỏ ( 90g )
									<br />
									Chiều cao: 240 mm <br />
									Chiều rộng: 70 mm<br />
								</p>
								<br />
								<p className={classes.productprice}>
									<ul className={classes.productItems}>
										<li className={classes.productItem}>
											10 gói Mì Kiều Mạch dùng thử: <b>399.000đ</b> (10 gói)<br />
										</li>
										<li className={classes.productItem}>
											1 hộp 30 gói chỉ còn: <b>960.000đ</b>{' '}
											<span className="strikethrough" style={{ fontSize: 12 }}>
												1.200.000đ
											</span>{' '}
											<span className={classes.discount}>(giảm 20%)</span>
										</li>
										<li className={classes.productItem}>
											2 hộp 60 gói chỉ còn: <b>1.800.000đ</b>{' '}
											<span className="strikethrough" style={{ fontSize: 12 }}>
												2.400.000đ
											</span>{' '}
											<span className={classes.discount}>(giảm 25%)</span>
										</li>
									</ul>
								</p>
							</div>
						
						<br />
					
              <Link to="formdangky" spy={true} offset={-50} smooth={true} duration={500}>
                <Button
                  className="orderbutton"
                  size="large"
                  type="default"
                  // onClick={() => {
                  // 	router.push(IS_VN? '/san-pham': "/products");
                  // }}
                >
                 ĐĂNG KÝ NGAY
                </Button>
              </Link>
						
					</div>
          {/* <div style={{ height: 10, marginTop: 20, marginBottom: 20, width: '100%', backgroundColor: '#f2f5f5' }}> </div> */}
        </Grid>
        
      </Container> }
        </div>
    </>
  );
}

export default PageSix;
