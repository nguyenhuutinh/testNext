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
import { NativeSelect, Select, TextField } from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
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
		fontFamily: 'UTMCenturBold',
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
		fontFamily: 'UTMCaviar',
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
    paddingLeft: "15px",
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
  selectedValue:{
    padding: "6px",
    paddingLeft: "10px"
  },
  strikethrough:{
    position: "relative",
    fontSize: "18px",
    fontWeight: "500",
    display: "inline-block",
    "&::before" :{
      position: "absolute",
      content: "",
      left: "0",
      top: "50%",
      right: "0",
      borderTop: "1px solid",
      borderColor: "inherit",
      webkitTransform: "rotate(-5deg)",
      mozTransform: "rotate(-5deg)",
      msTransform: "rotate(-5deg)",
      oTransform: "rotate(-5deg)",
      transform: "rotate(-5deg)",
    }
  },
 
}));

function PageFive() {
  const classes = useStyles();
  const { height } = useWindowDimensions();
  const halfHeight = height / 6;
  const imgHeight = height + halfHeight;
  const [isSelectVisible, setSelectVisible] = useState(false);
  const [selectedValue, setSelectiveValue] = useState(0);
  const selectRef = useRef()
  useEffect(() => {
    setTouchDevice("touchstart" in document.documentElement);
    
  }, []);
  const handleClickOutside = (event)=>{
    if(selectRef && !selectRef.current.contains(event.target)){
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
  return (
    <>
      {true ? (
        <>
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
							<div className={classes.form_title}>
								Đăng ký ngay hôm nay để nhận ưu đãi:<br />
								<ul className={classes.itemUl}>
									<li className={classes.itemLi}>
										<span style={{ color: 'red', fontWeight: 600 }}>Giảm đến 25%</span> khi đặt hàng
										tại website (số lượng có hạn){' '}
									</li>
									<li className={classes.itemLi}>
										Tư vấn <span style={{ color: 'red', fontWeight: 600 }}>miễn phí</span> phương
										pháp hạ đường huyết.<br />Gọi ngay{' '}
										<a style={{ color: 'green' }} href="tel:1900633084">
											1900 63 30 84
										</a>
									</li>
								</ul>
							</div>
							<form className={classes.form} noValidate
							
							>
							  <input className={classes.register_input}  placeholder="Họ Tên"  id="full_name" name="full_name" required/>
                <input className={classes.register_input}  placeholder="Số Điện Thoại"  id="phone_number" name="phone_number" required  />
								<div className={classes.register_input, classes.select } ref={selectRef}>
                  <div className={classes.selectContent} onClick={()=>setSelectVisible(!isSelectVisible)}>  
                      <div >{selectedValue == 0 ? <div value={10}  className={classes.selectValue, classes.selectedValue}>10 gói dùng thử:{' '}
												<span style={{ color: 'red', fontWeight: 'bold' }}>399.000đ</span>{' '}
												<b>(10 gói)</b></div> : selectedValue == 1 ? <div className={classes.selectValue}>1 hộp 30 gói chỉ còn{' '}
												<span style={{ color: 'red', fontWeight: 'bold' }}>960.000đ</span>{' '}
												<span className={classes.strikethrough} style={{ fontSize: 11 }}>
													1.200.000đ{' '}
												</span>{' '}
												<span style={{ color: 'red', fontWeight: 'normal' }}>(giảm -20%)</span></div>
                      : <div value={30} className={classes.selectValue}>2 hộp 60 gói chỉ còn{' '}
                      <span style={{ color: 'red', fontWeight: 'bold' }}>
                        1.800.000đ{' '}
                      </span>{' '}
                      <span className={classes.strikethrough} style={{ fontSize: 11 }}>
                        2.400.000đ
                      </span>{' '}
                      <span style={{ color: 'red', fontWeight: 'bold' }}>(giảm -25%)</span></div> }</div>
                      <KeyboardArrowDownIcon className={classes.select_arrow} />
                  </div>
                  <div className={classes.dropDown} style={{display: isSelectVisible ? "" : "none"}}>
                  <div onClick={()=>changeSelectValue(0)}>
                    <div className={classes.group} >
                    Dùng Thử
                    </div>
                      <div value={10}  className={classes.selectValue}>10 gói dùng thử:{' '}
												<span style={{ color: 'red', fontWeight: 'bold' }}>399.000đ</span>{' '}
												<b>(10 gói)</b></div></div>
                      <div onClick={()=>changeSelectValue(1)}>
                      <div className={classes.group}>
                      1 Hộp
                    </div>
                      <div value={20} className={classes.selectValue}>1 hộp 30 gói chỉ còn{' '}
												<span style={{ color: 'red', fontWeight: 'bold' }}>960.000đ</span>{' '}
												<span className={classes.strikethrough} style={{ fontSize: 11 }}>
													1.200.000đ{' '}
												</span>{' '}
												<span style={{ color: 'red', fontWeight: 'normal' }}>(giảm -20%)</span></div>
                      </div>
                      
                      <div onClick={()=>changeSelectValue(2)}>
                      <div className={classes.group}>
                      3 Hộp
                    </div>
                        <div value={30} className={classes.selectValue}>2 hộp 60 gói chỉ còn{' '}
												<span style={{ color: 'red', fontWeight: 'bold' }}>
													1.800.000đ{' '}
												</span>{' '}
												<span className={classes.strikethrough} style={{ fontSize: 11 }}>
													2.400.000đ
												</span>{' '}
												<span style={{ color: 'red', fontWeight: 'bold' }}>(giảm -25%)</span></div>
                      </div>
                  </div>
                  
                </div>
                
                <Button className={classes.register_btn}>
										ĐĂNG KÝ NGAY
									</Button>
								
							</form>
						</Grid>
						<Grid item xs={12}>
							<img src={"../register_img.webp"} className={classes.dangky_img} style={{ marginTop: 30 }} />
						</Grid>
	
				</div>
                </Grid>
            </Grid>
          </Container>
        </>
      ) : (
        <>
          
        </>
      )}

      
    </>
  );
}

export default PageFive;
