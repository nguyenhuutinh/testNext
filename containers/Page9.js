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
  main: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    padding: "15px",
    
  },
  header1: {
    fontFamily: 'SVNShaded',
    fontSize: "30px",
    lineHeight: "30px",
    marginBottom: "10px",
    color:" #084f1f"
  }
  ,header2 :{
    fontFamily: 'FSDiavloRegular',

    color: "#084f1f",
    fontSize: "1.1rem",
    lineHeight: "1.3rem",
    marginBottom: "10px"
  },
  desc: {
    fontSize: "1.1rem",
    fontFamily: 'FSDiavloRegular',
    color: "#030303"
  },
  morebutton: {
    marginTop: "20px",
    borderRadius: "25px",
  
    paddingLeft: "60px",
    paddingRight: "60px",

    marginBottom: "50px",
    height: "50px",
    backgroundColor: "#084f1f",
    lineHeight: "20px",
    fontSize: "18px",
    color: "white",
    "&:hover" : {
      borderColor: "#084f1f",
      color: "#084f1f"
    }
  }
}));

function PageSix() {
  const classes = useStyles();
  const { height } = useWindowDimensions();
  const halfHeight = height / 3;
  const [touchDevice, setTouchDevice] = useState(false);
  useEffect(() => {
    setTouchDevice("touchstart" in document.documentElement);
  }, []);
  const [ photoIndex, setPhotoIndex ] = useState(0);
	const [ isOpen, setOpen ] = useState(false);
  const handleChange = () => {
		// console.log('a');
		// window.open('tel:1900633084')
			
  };
  
  
  return (
    <><div className={classes.root}>
      <Container disableGutters>
        <Grid item xs={12} className={classes.main}>
          <h3 className={classes.header1}>Lợi ích sức khoẻ của mì</h3>
					<h2 className={classes.header2}>OLD HENRY - MÌ KIỀU MẠCH</h2>
					<p className={classes.desc}>Old Henry sử dụng loại lúa mạch kiều mạch cao cấp - tốt nhất trong việc kiểm soát bệnh tiểu đường. Các thí nghiệm dược lý và lâm sàng hiện đại cho thấy các chất flavonoid trong kiều mạch có chức năng giúp hạ đường huyết, hạ lipid máu, ức chế kết tập tiểu cầu, làm sạch các gốc tự do và tăng cường khả năng miễn dịch của cơ thể. Người Nhật gọi kiều mạch là siêu thực phẩm cho sức khỏe, người Hàn Quốc gọi nó là thực phẩm bất tử, và người Đức gọi kiều mạch là thần dược phương Đông. Vì vậy, đối với bệnh nhân tiểu đường, sử dụng mì Old Henry có thể giúp kiểm soát lượng đường trong máu một cách tự nhiên, an toàn và hiệu quả.</p>
					<Button
						className={classes.morebutton}
						size="large"
						type="default"
						// onClick={() => {
						// 	router.push(IS_VN ? '/loi-ich-suc-khoe' : '/health-benefits');
						// }}
					>
					Tìm Hiểu Thêm
					</Button>
        </Grid>
        <Grid item xs={12}>
        
        </Grid>
        </Container> 
        </div>
    </>
  );
}

export default PageSix;
