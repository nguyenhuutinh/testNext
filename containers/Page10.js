import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import 'react-lazy-load-image-component/src/effects/blur.css';
import { Container, Grid } from "@material-ui/core";


const useStyles = makeStyles(() => ({
  loiich:{
    // margin-top: 30px;
    background: "#f5f6fa",
    
    // background: linear-gradient(
    // 	69deg,
    // 	rgba(4, 147, 0, 0.6110819327731092) 0%,
    // 	rgba(4, 149, 41, 1) 46%,
    // 	rgba(17, 87, 9, 1) 100%
    // );
    paddingBottom: "10px"
    
  
  },
  header1 : {
    // width: "100%",
    backgroundColor:"#084f1f",
    textAlign: "center",
    color: "#ffffff",
    lineHeight: "30px",
    fontFamily: 'Oswald',
    fontSize: "1.3rem",
    margin: "0px",
    padding: "10px",
    
    // color: #084f1f;
  },
  
}));

function Page10() {
  const classes = useStyles();

  const [touchDevice , setTouchDevice] = useState(false);
  useEffect(() => {
    setTouchDevice("ontouchstart" in document.documentElement);
  }, []);
 
  
  
  return (
    <>
      {touchDevice && <div>
        <Container disableGutters className={classes.loiich}>
        <Grid item xs={12} >
          <h2 className={classes.header1}>Mì Kiều Mạch Old Henry<br/>dành cho ai?</h2>
							<br/>
          </Grid> 
          <Grid style={{paddingLeft: 20, paddingRight: 20}}>
            <div style={{ color: '#2b2b2b', fontFamily:'Oswald', fontSize: 18,lineHeight: '25px',  fontWeight: 300 }}>
								<b className="heart" />Người mắc các chứng về&nbsp;<b style={{fontFamily:'Oswald', fontWeight: 500}}>đường huyết</b>&nbsp;đang
								phải sử dụng thuốc mỗi ngày
							</div>
							<div style={{ color: '#2b2b2b', fontFamily:'Oswald', fontSize: 18, lineHeight: '25px',  marginTop: 10,fontWeight: 300 }}>
								<b className="heart" />
								<b style={{fontFamily:'Oswald', fontWeight: 500}}>Người bệnh đái tháo đường</b>: Thành phần dinh dưỡng trong kiều mạch và lúa mạch của Mì Old Henry có tác dụng giúp làm giảm cholesterol và ổn định đường huyết. Tình trạng đường huyết sẽ được cải thiện, có thể cắt giảm thuốc dần sau một thời gian sử dụng.
							</div>

							<div style={{ color: '#2b2b2b', fontFamily:'Oswald', fontSize: 18, lineHeight: '25px',  marginTop: 10,fontWeight: 300 }}>
								<b className="heart" />
								<b style={{fontFamily:'Oswald', fontWeight: 500}}>Người Huyết áp cao</b>: Mì kiều mạch chứa nhiều chất xơ, giúp giảm nồng độ
								Cholesterol xấu trong máu giúp điều hào huyết áp.
							</div>
							<div style={{ color: '#2b2b2b', fontFamily:'Oswald', fontSize: 18, lineHeight: '25px', marginTop: 10,fontWeight: 300 }}>
								<b className="heart" />
								<b style={{fontFamily:'Oswald', fontWeight: 500}}>Những người giảm cân</b>: Mì kiều mạch được làm từ bột kiều mạch Tartary chứa Vitamin
								E, Squalene, Epicatechin… là những dưỡng chất quan trọng giúp giảm cân hiệu quả.{' '}
							</div>
							<div style={{ color: '#2b2b2b', fontFamily:'Oswald' , fontSize: 18, lineHeight: '25px', marginTop: 10,fontWeight: 300}}>
								<b className="heart" />
								<b style={{fontFamily:'Oswald', fontWeight: 500}}>Người bệnh tim mạch</b>: Mì Kiều mạch chứa nhiều Protein dinh dưỡng cao, chất xơ
								vitamin và khoáng chất giúp phòng ngừa các tai biến mạch máu và các rối loạn tim mạch.{' '}
							</div>
							<div style={{ color: '#2b2b2b', fontFamily:'Oswald', fontSize: 18 , lineHeight: '25px', marginTop: 10,fontWeight: 300}}>
								<b className="heart" />
								<b style={{fontFamily:'Oswald', fontWeight: 500}}>Bệnh về tiêu hóa</b>: Chất xơ trong kiều mạch là thành phần có lợi đối với hệ tiêu
								hóa, nhất là đại tràng.
							</div>
							<br />
              
          </Grid>
        </Container> 
        <div style={{height: 1, background:'#084f1f'}}></div>
        </div>
       }
    </>
  );
}

export default Page10;
