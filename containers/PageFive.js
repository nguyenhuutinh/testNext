import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useWindowDimensions from "../hooks/windowsize";
import { CircularProgress, NativeSelect, Select, TextField } from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { useRouter } from 'next/router'
import parsePhoneNumber from 'libphonenumber-js'
import { isPossiblePhoneNumber, isValidPhoneNumber } from 'libphonenumber-js'

import { Element, Link, scroller } from 'react-scroll';
const useStyles = makeStyles((theme) => ({
  formdangky:{
  backgroundImage: "url('../register_bg.jpg')",
  backgroundSize: "cover"
  },
	dangky_img:{
		margin: "10px",
		width: "calc(100% - 20px)"
	},
	layer5: {
		// margin: 10px;
		width: "100%",
		// position: absolute;
		// bottom: 0;
		// left: 0%;
	},
	form_title: {
		color: "#084f1f",
		fontFamily: 'Oswald',
		textAlign: "center",
		fontSize: "21px",
		marginTop: "40px",
		marginBottom: "40px",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		
  },
  itemUl: {
    maxWidth: "95%",
    margin: "0 auto",
    textAlign: "left",
   
  },
  itemLi:{
    marginTop: "10px",
    fontSize: "18px"
  },
	register_input:{
    padding: "6.5px 11px",
    fontSize: "16px",
    width:"100%",
		// border-radius: 10px;
    border:" 1px solid #02290e",
    marginTop: "10px",
    background:"white",
    boxSizing: "border-box",
    margin: "0",
    fontVariant: "tabular-nums",
    listStyle: "none",
    fontFeatureSettings: "tnum",
    position: "relative",
    display: "inline-block",
    width: "100%",
    minWidth: "0",
    color: "rgba(0,0,0,.85)",

    lineHeight: "1.5715",
    backgroundColor: "#fff",
    backgroundImage: "none",
    // border: "1px solid #d9d9d9",
    borderRadius: "2px",
    transition: "all .3s",
    "& :hover, & :active, & :focus":{
      border: "1px solid #02290e",
      outlineColor : "#02290e"
    }
  },
  register_btn:{
		// background-image: url('./images/Layer\ 2.png');
		background: "linear-gradient(267deg, #ffd477 0%, #ffd88e 45%, rgba(255, 221, 158) 52%, #ffdd9e 57%, #ffd16e 100%)",
		boxShadow: "0px 4px 24px rgba(253, 217, 142)",
		border: "1px solid rgb(255, 188, 42)",
		backgroundSize: "cover",
		width: "200px",
		height: "40px",
    margin: "0 auto",
    marginTop: "20px",
		display: "flex",
		fontFamily: 'Oswald',
		justifyContent: 'center',
		alignContent: "center",
		color: "#084f1f",
		// flex-direction: column;
		// text-align: center;
		fontWeight: "600",
		fontSize: "18px",
		// >span{
		// 	line-height: 30px;
		// }
		cursor: "pointer",
		// &:hover{
		
		// }
  },
  select: {
    marginTop: "10px",
    // width: "100%",
    border:" 1px solid #02290e",
    lineHeight: "1.5715",
    height:"40px",
    background:"white",
    position:"relative"
  },
  dropDown:{
    background: "white",
    position:"absolute",
    top: 41,
    zIndex: 10,
    boxShadow: "0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08), 0 9px 28px 8px rgba(0,0,0,.05)"
  },
  selectContent:{
    display:"flex",
    justifyContent: "space-between",
    alignItems:"center",
    height:"100%",
  },
  selectArrow:{

  },
  group : {
    marginLeft: "10px",
    marginTop: "10px",
    fontSize: "12px",
    fontWeight: 400,
    whiteSpace: "pre-wrap"
  },
  selectValue : {
    
    fontSize: "15px",
    padding: "10px",
    paddingLeft: "20px",
    fontWeight: 500,
    whiteSpace: "pre-wrap",
    background: "white",
    "&:hover" :{
      background: "beige"
    },
    "&:active" :{
      background: "beige"
    }
  },
  active:{
    background: "beige"
  },
  inactive:{
    background: "white"
  },
  selectedValue:{
    padding: "6px",
    paddingLeft: "10px",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    height: "25px",
    alignItems:"center",
    overflow: 'hidden',
    background: "white",
    "&:hover" :{
      background: "white"
    },
    "&:active" :{
      background: "white"
    }
  },
  
 
}));

function PageFive({accessTrade}) {
  const classes = useStyles();
  const { height } = useWindowDimensions();
  const halfHeight = height / 6;
  const imgHeight = height + halfHeight;
  const [isSelectVisible, setSelectVisible] = useState(false);
  const [selectedValue, setSelectiveValue] = useState(0);
  const [isSubmitting, setSubmitting] = useState(false);
  const selectRef = useRef()
  const fullNameRef = useRef()
  const phoneRef = useRef()


  const router = useRouter()



  useEffect(() => {
    setTouchDevice("ontouchstart" in document.documentElement);
    
  }, []);
  const handleClickOutside = (event)=>{
    if(selectRef && selectRef.current && !selectRef.current.contains(event.target)){
      setSelectVisible(false)
    }
  }
  useEffect(() => {
    document.addEventListener('touchstart', handleClickOutside);
    return ()=>{
      document.removeEventListener('touchstart', handleClickOutside);

    }
  }, [])
  const [touchDevice, setTouchDevice] = useState(false);
  const changeSelectValue = (value)=>{
    setSelectiveValue(value)
    setSelectVisible(false)
  }
  const sendData = (name, phone, product, product_id) =>{
    var xhr = new XMLHttpRequest()
    var access = accessTrade ? "- accessTrade - with clickId=" + accessTrade : ""
    console.log("accessTrade", access)
    var params = `your-name=${name}&tel-70=${phone}&text-815=${product} - mobile ${access}`;
    
    // get a callback when the server responds
    xhr.onreadystatechange = function() {//Call a function when the state changes.
      if(xhr.readyState == 4 && xhr.status == 200) {
        router.push(
          `/thank-you?phone=${phone}&name=${name}&goi=${product_id}`
        );
      }
      console.log(xhr.readyState, xhr.status)
      if(xhr.status != 0){
        setSubmitting(false)
      }
    }
    xhr.open('POST', 'https://mikieumach.vn/blog/wp-json/contact-form-7/v1/contact-forms/2057/feedback', true)
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    // open the request with the verb and the url
    
    // send the request
    xhr.send(params)
  }
  const submitData = (e, e1) =>{
    e.preventDefault();
    var phone = "+84"+ phoneRef.current.value
    var data = isValidPhoneNumber(phone,'VI')
    if(data == false){
        alert("Số Điện Thoại Không Đúng. Vui Lòng Kiểm tra lại")
        return
    }
    // setSubmitting(true)
    var fullname = fullNameRef.current.value
    
    // var product = selectedValue == 0 ? "10 Gói Dùng Thử" : selectedValue == 1 ? "1 Hộp" : selectedValue == 2 ?  "2 Hộp" : "1 Thùng"
    // var product_id = selectedValue == 0 ? "10goi" :  selectedValue == 1 ?  "1hop" :  selectedValue == 2 ?  "2hop" :'1thung' 
    var product = selectedValue == 0 ? "1 Hộp" :  "2 Hộp" 
    var product_id = selectedValue == 0 ? "1hop" :   "2hop" 
    sendData(fullname, phone, product, product_id)
  }
  return (
    <>
      {true ? (
       <div style={{position:'relative'}}>
          <Container disableGutters> 
            <Grid
              container
              direction="column"
              justify="center"
              alignContent="center"
              spacing={0}
              style={{ marginLeft: "0rem" }}
            >
              <Grid item xs={12}>
              <div className={classes.formdangky}>
			
          <Grid item xs={12}>
							<img src={'../Layer5.jpg'} className={classes.layer5} style={{ marginTop: 30 }} />
						</Grid>
            <Grid item xs={12} style={{ paddingLeft: 10, paddingRight: 10 }}>
            <Element name="formdangky" className="element">
							<div className={classes.form_title}>
								Đăng ký ngay hôm nay để nhận ưu đãi:<br />
								<ul className={classes.itemUl}>
									<li className={classes.itemLi}>
										<span style={{ color: 'red', fontWeight: 600 }}>Giảm đến 35%</span> khi đặt hàng
										tại website (số lượng có hạn){' '}
									</li>
									<li className={classes.itemLi}>
										Tư vấn <span style={{ color: 'red', fontWeight: 600 }}>miễn phí</span> phương
										pháp hạ đường huyết.<br />Gọi ngay{' '}
										<a style={{ color: 'green', fontWeight: 500 }} href="tel:1900633084">
											1900 63 30 84
										</a>
									</li>
								</ul>
							</div>
              </Element>
							<form className={classes.form}
							onSubmit={submitData}
							>
							  <input className={classes.register_input}  placeholder="Họ Tên"  id="full_name" name="full_name" required ref={fullNameRef}/>
                <input className={classes.register_input}  placeholder="Số Điện Thoại"  id="phone_number" name="phone_number" required  ref={phoneRef}/>
								<div className={classes.register_input, classes.select } ref={selectRef}>
                  <div className={classes.selectContent} onClick={()=>setSelectVisible(!isSelectVisible)}>  
                      <div style={{width: "90%", position:'relative'}} >
                    {
                    //   selectedValue == 0 ? <div value={10}  className={classes.selectValue, classes.selectedValue}>10 gói dùng thử:{' '}
                    //   <span style={{ color: 'red', fontWeight: 'bold' }}>399.000đ</span>{' '}
                    //   <b>(10 gói)</b></div>
                    // :
                    selectedValue == 0 ? <div className={classes.selectValue, classes.selectedValue}>1 hộp 30 gói chỉ còn{' '}
												<span style={{ color: 'red', fontWeight: 'bold' }}>1.020.000đ</span>{' '}
												<span className="strikethrough" style={{ fontSize: 11 }}>
													1.200.000đ{' '}
												</span>{' '}
												<span style={{ color: 'red', fontWeight: 'normal' }}>(giảm -15%)</span></div>
                      :
                      
                      <div className={`${classes.selectValue}  ${classes.selectedValue}`}>2 hộp 60 gói chỉ còn{' '}
                      <span style={{ color: 'red', fontWeight: 'bold' }}>
                        1.800.000đ{' '}
                      </span>{' '}
                      <span className="strikethrough" style={{ fontSize: 11 }}>
                        2.400.000đ
                      </span>{' '}
                      <span style={{ color: 'red', fontWeight: 'bold' }}>(giảm -25%)</span></div> 
                      // : <div className={`${classes.selectValue}  ${classes.selectedValue}`}>1 Thùng 4 Hộp chỉ còn{' '}
                      // <span style={{ color: 'red', fontWeight: 'bold' }}>
                      //   3.120.000đ{' '}
                      // </span>{' '}
                      // <span className="strikethrough" style={{ fontSize: 11 }}>
                      //   4.800.000đ
                      // </span>{' '}
                      // <span style={{ color: 'red', fontWeight: 'bold' }}>(giảm -35%)</span></div> 
                      }</div>
                      <KeyboardArrowDownIcon className={classes.select_arrow} />
                  </div>
                  <div className={classes.dropDown} style={{display: isSelectVisible ? "" : "none"}}>
                  {/* <div onClick={()=>changeSelectValue(0)}> */}
                    
                    {/* <div className={classes.group}>
                    Dùng Thử
                    </div>
                      <div className={`${classes.selectValue}  ${(selectedValue == 0 ? classes.active : classes.inactive)}`}>10 gói dùng thử:{' '}
												<span style={{ color: 'red', fontWeight: 'bold' }}>399.000đ</span>{' '}
												<b>(10 gói)</b></div></div>*/}
                      <div onClick={()=>changeSelectValue(0)}>
                      <div className={classes.group}>
                      1 Hộp
                    </div> 
                      <div className={`${classes.selectValue}  ${(selectedValue == 0 ? classes.active : classes.inactive)}`}>1 hộp 30 gói chỉ còn{' '}
												<span style={{ color: 'red', fontWeight: 'bold' }}>1.020.000đ</span>{' '}
												<span className="strikethrough" style={{ fontSize: 11 }}>
													1.200.000đ{' '}
												</span>{' '}
												<span style={{ color: 'red', fontWeight: 'normal' }}>(giảm -15%)</span></div>
                      </div>
                      
                      <div onClick={()=>changeSelectValue(1)}>
                      <div className={classes.group}>
                      2 Hộp
                    </div>
                        <div value={30} className={`${classes.selectValue}  ${(selectedValue == 1 ? classes.active : classes.inactive)}`}>2 hộp 60 gói chỉ còn{' '}
												<span style={{ color: 'red', fontWeight: 'bold' }}>
													1.800.000đ{' '}
												</span>{' '}
												<span className="strikethrough" style={{ fontSize: 11 }}>
													2.400.000đ
												</span>{' '}
												<span style={{ color: 'red', fontWeight: 'bold' }}>(giảm -25%)</span></div>
                      </div>
                      {/* <div onClick={()=>changeSelectValue(3)}> */}
                      {/* <div className={classes.group}>
                      1 Thùng 
                    </div>
                        <div value={30} className={`${classes.selectValue}  ${(selectedValue == 3 ? classes.active : classes.inactive)}`}>1 Thùng 4 Hộp chỉ còn{' '}
												<span style={{ color: 'red', fontWeight: 'bold' }}>
													3.120.000đ{' '}
												</span>{' '}
												<span className="strikethrough" style={{ fontSize: 11 }}>
													4.800.000đ
												</span>{' '}
												<span style={{ color: 'red', fontWeight: 'bold' }}>(giảm -35%)</span></div>
                      </div> */}
                  {/* </div> */}
                  
                </div></div>
                
                <Button type="submit" disabled={isSubmitting} className={classes.register_btn} >
										ĐĂNG KÝ NGAY
									</Button>
                  <br/>
							</form>
						</Grid>
						<Grid item xs={12}>
							{/* <img src={"../register_img.webp"} className={classes.dangky_img} style={{ marginTop: 30 }} /> */}
						</Grid>
	
				</div>
                </Grid>
            </Grid>
           

          </Container>
          {isSubmitting && <div style={{background: 'rgba(255, 255, 255, 0.5)', width: '100%', height:'100%', position:'absolute', top: "0", left:"0", display:'flex', justifyContent:'center', alignItems:'center'}}>
            <CircularProgress color="green" />
            </div>}
            <br/>
      </div>
      ) : (
        <>
          
        </>
      )}

      
    </>
  );
}

export default PageFive;
