import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  

footer: {
  fontFamily:"Oswald",
  padding: "10px",
  // margin-top: 20px;
  paddingTop: "40px",
  backgroundColor: "white",
  
  },
  logo :{
    display: "flex",
    justifyContent: "left",
    
    color:" #012b1e",
    
  },
  h2: {
    color: "#012b1e",
    fontFamily: 'Oswald',
    lineHeight: "24px",
    fontSize: "29px"
  }
}));

function Footer() {
  const classes = useStyles();
  useEffect(() => {
    setTouchDevice("ontouchstart" in document.documentElement);
  }, []);
  const [touchDevice, setTouchDevice] = useState(false);
  return (
    <>
      {touchDevice && (
        <>
          <div className={classes.root}>
            <Container disableGutters>
              <Grid
                container
                
              >
                <Grid item xs={12}>
                <div className={classes.footer}>
									<div className={classes.logo}>
										<h2>
											Old
											<br />
											Henry
										</h2>
									</div>{<br/>}
									<div>
									{<a style={{color:'#012b1e', textDecoration:'underline'}} href="/chinh-sach-bao-mat">Chính sách bảo mật</a>}{<br/>}{<br/>}
				{<a style={{color:'#012b1e', textDecoration:'underline'}} href="/dieu-khoan-su-dung">Điều khoản sử dụng</a>}{<br/>}
        {<a style={{color:'#012b1e', textDecoration:'underline'}} href="/tuyen-bo-bai-tru-trach-nhiem">Tuyên Bố Bãi Trừ Trách Nhiệm</a>}
				
				{<br/>}{<br/>}
				{<a style={{color:'#012b1e', textDecoration:'underline'}} href="/blog">Blog</a>}{<br/>}<br/>
										{(
											<h3 style={{ fontSize: 14 }}>
												{/* Nhập khẩu và phân phối độc quyền tại Việt Nam bởi: <br /> */}
												Công Ty TNHH Thousand Hands Viet Nam<br />
												416A1 Hai Bà Trưng, Phường Tân Định, Quận 1, TP. HCM<br/>
												Hotline: 1900 633084<br/>
												Mã số thuế: 0310752786<br/>
												
											</h3>
										)}
									</div>
								</div>
								<div style={{ textAlign: 'center', paddingBottom: '30px', paddingTop: 30, fontSize: '12px' }}>
									Copyright © 2020. All rights reserved.
								</div>
                 </Grid>
                 </Grid>
            </Container>
          </div>
        </>
      )}
    </>
  );
}

export default Footer;
