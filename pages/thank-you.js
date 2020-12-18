import styles from "../styles/Home.module.css";
import "normalize.css";
import React, { useEffect, useState } from "react";

import Footer from "../containers/Footer";
import { Button, Container, Grid, makeStyles } from "@material-ui/core";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import PageOne from "../containers/PageOne";

const useStyles = makeStyles({
  success: {
    paddingTop: "30px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: "20px",
    paddingRight: "20px"
  
  },
  message1:{
    color: "#084f1f",
    marginTop: "20px",
    fontSize: "20px",
    fontWeight: 500,
    
    textAlign: "center"
  }
  ,
  message2 : {
    marginTop: "10px",
    fontSize: "18px",
    textAlign: "center"
  }
  ,
  message3 : {
    textDecoration: "underline",
    marginTop: "10px",
    fontSize: "18px",
    textAlign: "center",
    color: "#084f1f",
  }})
export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href =  "https://www.facebook.com/groups/824706818334459"
    }, 10000);
    return () => {
      
    }
  }, [])
  const classes = useStyles();
  return (
    <>
      <PageOne />
      <Container className={classes.container} disableGutters>
      <Grid className={classes.success}>
        <CheckCircleOutlineIcon style={{ color: '#084f1f', fontSize: 80 }} />
        <div className={classes.message1}>CHÚC MỪNG BẠN ĐĂNG KÝ THÀNH CÔNG</div><br/>
        <div className={classes.message2}>Chúng tôi đã nhận được thông tin đăng ký từ bạn, dựa trên thông tin bạn đã cung cấp đội ngũ hỗ trợ khách hàng sẽ liên hệ và tư vấn miễn phí.</div>
       <br/><br/>
        <div> {""} <div className={classes.message3}> Hãy tham gia cộng đồng Old Henry - Mì ổn định đường huyết trên mạng xã hội</div> {""} </div>
        <br/><br/>
         <img onClick={()=>{window.location.href =  "https://www.facebook.com/groups/824706818334459"}} style={{width:'100%'}}src={"../vngroup.jpg"}></img>
        <br/> 
        <Button
        className="orderbutton"
        size="large"
        type="primary"
        style={{ marginTop: 10 }}
        onClick={() => {
          window.location.href =  "https://www.facebook.com/groups/824706818334459"
        }}
        key="buy"
      >
        {"THAM GIA NGAY"}
      </Button><br/> <br/> 
      </Grid>
      </Container>
      <Footer/>
    </>
  );
}
