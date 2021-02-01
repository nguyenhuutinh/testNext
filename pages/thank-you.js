import styles from "../styles/Home.module.css";
import "normalize.css";
import React, { useEffect, useState } from "react";

import Footer from "../containers/Footer";
import { Button, Container, Grid, makeStyles } from "@material-ui/core";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import PageOne from "../containers/PageOne";
import jsCookie from 'js-cookie';
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
    getClientIp()
    setTimeout(() => {
      window.location.href =  "https://www.facebook.com/groups/824706818334459"
    }, 15000);
    
    return () => {
      
    }
    
  }, [])
  useEffect(()=>{
    setTimeout(() => {
      
      if(jsCookie.get('click_id') && jsCookie.get('click_id') != ""){
        onFinish()
      }
      // postInfoToDoc()
    }, 2000);
    return () => {
      
    }
  }, [])
  function getQueryVariable(variable) {
    if(typeof window !== "undefined"){
      var query = window.location.search.substring(1);
      var vars = query.split('&');
      for (var i = 0; i < vars.length; i++) {
          var pair = vars[i].split('=');
          if (decodeURIComponent(pair[0]) == variable) {
              return decodeURIComponent(pair[1]);
          }
      }
    }
    
    
}
  const onFinish = () => {
    var price = getQueryVariable("goi") || "1hop"
    var total_sale_amount = 1020000
    var total_base_amount = 1200000
		if(price == "10goi"){
      total_sale_amount = 399000
      total_base_amount = 400000
    }else if(price == "1hop"){
      total_sale_amount = 1020000
      total_base_amount = 1200000
    }
    else if(price == "2hop"){
      total_sale_amount = 1800000
      total_base_amount = 2400000
    }
    else if(price == "1thung"){
      total_sale_amount = 3120000
      total_base_amount = 4800000
    }
		

        var data = {
          "click_id": jsCookie.get('click_id'),
          "campaign_id": "228",
          "order_id": `No.${Date.now()}`,
          "action": "buy",
          "action_time": Date.now(),
          "total_discount": {
              "amount": (total_base_amount - total_sale_amount),
              "currency": "VND"
          },
          "total_sale_amount": {
              "amount": total_sale_amount,
              "currency": "VND"
          },
          "total_commission": {
              "amount": (total_sale_amount / 100 * 30),
              "currency": "VND"
          },
          "client_ip": jsCookie.get("my_ip"),
          "user_agent": "adv_thousandhand",
          "conversion_parts": [
              {
                  "id": "1",
                  "sku": `${price}`,
                  "url": "https://mikieumach.vn/",
                  "price": total_base_amount,
                  "discount": (total_base_amount - total_sale_amount),
                  "sale_amount": total_sale_amount,
                  "currency": "VND",
                  "name": `${price == "1hop" ? "1 HỘP" : price == "2hop" ? "2 HỘP": "1 THÙNG"} MÌ KIỀU MẠCH OLDHENRY`,
                  "category_name": "MÌ KIỀU MẠCH",
                  "category_id": "MIKIEUMACH",
                  "quantity": 1,
                  "commission": {
                      "amount": (total_sale_amount / 100 * 35),
                      "currency": "VND"
                  },
                  "calculate_by" : "FIXED"
              }
          ]
      }
    postConversionData(JSON.stringify(data))
    
  };
  
  const postConversionData = (params) =>{
    var xhr = new XMLHttpRequest()
    
    // get a callback when the server responds
    xhr.onreadystatechange = function() {//Call a function when the state changes.
      if(xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.response)
        postTracking(JSON.parse(xhr.response))
      }
      console.log(xhr.readyState, xhr.status)
      if(xhr.status != 200 && xhr.response != null){
        postTrackingError(JSON.parse(xhr.response))
      }
    }
    xhr.open('POST', 'https://app.oldhenry.com.vn/api/v1/directsale/create-conversion', true)
    xhr.setRequestHeader('Content-type', 'application/json');

    // open the request with the verb and the url
    
    // send the request
    xhr.send(params)
  }
  const postTracking = (response) =>{
    if(response.body.status != 'success'){
        return
    }
    var xhr = new XMLHttpRequest()
    var temp = []
    temp.push("conversation_id", response.body.data.conversion.conversion_id)
    temp.push("click_id", response.body.data.conversion.click_id)
    temp.push("order_id", response.body.data.conversion.order_id)
    temp.push("status", response.body.data.conversion.status)
    temp.push("cusname" , getQueryVariable("name"))
    temp.push("cusphone", getQueryVariable("phone"))
    temp.push("all", JSON.stringify(response.body.data))
    let req = {data: [[ temp] ]};
    // get a callback when the server responds
    xhr.onreadystatechange = function() {//Call a function when the state changes.
      if(xhr.readyState == 4 && xhr.status == 200) {
          console.log("ok")
          jsCookie.set("click_id", "")
      }
      console.log(xhr.readyState, xhr.status)
      
    }
    xhr.open('POST', 'https://api.thousandhands.com/api/v1/google_api/spreadsheets/1afkKOpr55szu55jI-PafQgh84-v3WeSMNX3-7Sg6JFA', true)
    xhr.setRequestHeader('Content-type', 'application/json');

    // open the request with the verb and the url
    
    // send the request
    xhr.send(JSON.stringify(req))
  }
const postTrackingError = (response) =>{
    // if(response.body.status != 'success'){
    //     return
    // }
    var xhr = new XMLHttpRequest()
    var temp = []
    
    temp.push("all", JSON.stringify(response.body))
    let req = {data: [[ temp] ]};
    // get a callback when the server responds
    xhr.onreadystatechange = function() {//Call a function when the state changes.
      if(xhr.readyState == 4 && xhr.status == 200) {
          console.log("ok")
          jsCookie.set("click_id", "")
      }
      console.log(xhr.readyState, xhr.status)
      if(xhr.status != 0){
       
      }
    }
    xhr.open('POST', 'https://api.thousandhands.com/api/v1/google_api/spreadsheets/1afkKOpr55szu55jI-PafQgh84-v3WeSMNX3-7Sg6JFA', true)
    xhr.setRequestHeader('Content-type', 'application/json');

    // open the request with the verb and the url
    
    // send the request
    xhr.send(JSON.stringify(req))
  }
  const postInfoToDoc = (response) =>{
    // if(response.body.status != 'success'){
    //     return
    // }
    var xhr = new XMLHttpRequest()
    var temp = []
    var price = getQueryVariable("goi") || "1hop"
    temp.push("price", price)
    temp.push("phone", getQueryVariable("phone"))
    temp.push("name", getQueryVariable("name"))
    temp.push("date", new Date())
    let req = {data: [[ temp] ]};
    // get a callback when the server responds
    xhr.onreadystatechange = function() {//Call a function when the state changes.
      
    }
    xhr.open('POST', 'https://api.thousandhands.com/api/v1/google_api/spreadsheets/1afkKOpr55szu55jI-PafQgh84-v3WeSMNX3-7Sg6JFA', true)
    xhr.setRequestHeader('Content-type', 'application/json');

    // open the request with the verb and the url
    
    // send the request
    xhr.send(JSON.stringify(req))
  }

  const getClientIp =() => {
    fetch('https://api.ipify.org?format=json').then(response => {
      return response.json();
    }).then((res) => {
      console.log("ip",res.ip)
      // setMyIP(res.ip)
      jsCookie.set("my_ip",res.ip)
    }).catch((err) => console.error('Problem fetching my IP', err))
  }
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
