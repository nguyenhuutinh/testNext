import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import useWindowDimensions from "../hooks/windowsize";
import { Element, Link, scroller } from 'react-scroll';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Button, Container, Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  product:{
    // backgroundColor: "white",
  },
  
	img1:{
		width: "100%",
	},
	img3: {  
		width: "100%"
	},
	btnGroup: {
		display: "flex",
		justifyContent: "center"
	},
	help:{
		boxShadow: "0px 4px 24px rgb(211, 211, 211)",
		border: "1px solid rgb(42, 151, 75)",
		"&:hover" :{
			boxShadow: "0px 2px 14px rgb(241, 241, 241)"
			
    },
    whiteSpace: "nowrap",
		height: "40px",
		marginLeft: "20px",
		fontSize: "15px",
		paddingLeft: "20px",
		paddingRight: "20px",
		
  },
  helpimage: {
    width: "20px",
    marginBottom: "5px",
    height: "auto",
    marginRight: "10px"
  },
	title1: {
		// margin-top: 10px;
		fontSize: "28px",
		textAlign: "center",
		color: "black",
    marginTop: "-30px",
    fontFamily: "Oswald",
	},
	p1: {
		fontSize: "16px",
		color: "black",
		// max-width: 25vw;
		"> a":{
			// height: "20px"
    },
    fontFamily: "Oswald",
	},
	
  orderbutton: {
    boxShadow: "0px 4px 24px rgba(253,217,142)",
    color: "#444444",
    fontSize: "15px",
    paddingLeft: "20px",
     paddingRight: "20px",
     height: "40px",
     span:{
       lineHeight: "30px"
  
     },
     whiteSpace: "nowrap",
  //   margin-top: 6px;
    // border-radius: 5px;
    border: "1px solid rgb(255, 189, 47)",
  //   height: 32px;
    fontFamily: 'Oswald',
  //   line-height: 22px;
    background: "rgb(253,217,142)",
    background: "linear-gradient(267deg, rgb(255, 212, 119) 0%, rgb(255, 216, 142) 45%, rgba(255, 221, 158) 52%, rgb(255, 221, 158) 57%, rgb(255, 209, 110) 100%)"
  
  }
}));

function PageSix() {
  const classes = useStyles();
  const { height } = useWindowDimensions();
  const halfHeight = height / 3;
  const [touchDevice, setTouchDevice] = useState(false);
  useEffect(() => {
    setTouchDevice("ontouchstart" in document.documentElement);
  }, []);

  const openMessenger = () => {
		// console.log('a');
		window.open('tel:1900633084')
			
	};
  return (
    <>{ touchDevice &&
      <Container disableGutters>
        <Grid item xs={12} style={{paddingLeft:10, paddingRight: 10}}>
          <div className={classes.product}>
              <br/>
              <LazyLoadImage effect="blur"  className={classes.img1} src={"../Layer99.webp"} />

            </div>
          
          <h3 className={classes.title1}>Dùng 1 gói mì/ngày</h3>
            <p className={classes.p1}>Sử dụng 1 gói mì Old Henry mỗi ngày trong vòng 2-3 tháng để đạt được hiệu quả ổn định đường huyết từ đó hỗ trợ cắt hoặc giảm thuốc</p>
            <div className={classes.btnGroup}>
              <Link to="formdangky" spy={true} offset={-50} smooth={true} duration={500}>
                <Button className="orderbutton">
                  Đăng Ký Ngay
                </Button>
              </Link>
              <Button
                className={classes.help}
                onClick={() => {
                  openMessenger();
                }}
              >
                <LazyLoadImage src={"../call.webp"} className={classes.helpimage}/>
                Gọi Đặt Hàng
              </Button>
            </div>
          </Grid>
          <div style={{ height: 10, marginTop: 20, marginBottom: 20, width: '100%', backgroundColor: '#f2f5f5' }}> </div>
          <Grid item xs={12} style={{paddingLeft:10, paddingRight: 10}}>
          <div className={classes.product}>
              <br/>
              <LazyLoadImage effect="blur"  className={classes.img1} src={"../Layer82.webp"} />

            </div>
          
          <h3 className={classes.title1}>Dễ dàng chế biến các món ăn</h3>
            <p className={classes.p1}>Sợi mì dai, ngon, rất dễ để chế biến các món mì theo sở thích của mỗi người. Bạn có thể xào,nấu, làm mì Ý… đều được</p>
            <div className={classes.btnGroup}>
              <Link to="formdangky" spy={true} offset={-50} smooth={true} duration={500}>
                <Button className="orderbutton">
                  Đăng Ký Ngay
                </Button>
              </Link>
              <Button
                className={classes.help}
                onClick={() => {
                  openMessenger();
                }}
              >
                <LazyLoadImage src={"../call.webp"} className={classes.helpimage}/>
                Gọi Đặt Hàng
              </Button>
            </div>
          </Grid>
          <div style={{ height: 10, marginTop: 20, marginBottom: 20, width: '100%', backgroundColor: '#f2f5f5' }}> </div>
          <Grid item xs={12} style={{paddingLeft:10, paddingRight: 10}}>
          <div className={classes.product}>
              <br/>
              <LazyLoadImage effect="blur"  className={classes.img1} src={"../Layer76.webp"} />

            </div>
          
          <h3 className={classes.title1}>Hỗ trợ giao hàng toàn quốc</h3>
            <div className={classes.p1} style={{marginTop: 20}}>
            Khách hàng có thể đặt mì trực tiếp qua:<br/>
            <p>1, Website:  {' '}
            <a href="https://mikieumach.vn">mikieumach.vn</a>
            </p>
            
            <p>2, Facebook Fanpage: {' '}
            <a href="https://www.facebook.com/Oldhenry.com.vn/">Old Henry - Mì Kiều Mạch</a>
            </p>

             <p> 3, Hotline: 1900 633 084</p>
            </div>
            <div className={classes.btnGroup}>
              <Link to="formdangky" spy={true} offset={-50} smooth={true} duration={500}>
                <Button className="orderbutton">
                  Đăng Ký Ngay
                </Button>
              </Link>
              <Button
                className={classes.help}
                onClick={() => {
                  openMessenger();
                }}
              >
                <LazyLoadImage src={"../call.webp"} className={classes.helpimage}/>
                Gọi Đặt Hàng
              </Button>
            </div>
          </Grid>
          <div style={{ height: 10, marginTop: 20, marginBottom: 20, width: '100%', backgroundColor: '#f2f5f5' }}> </div>
        </Container> 
       }
    </>
  );
}

export default PageSix;
