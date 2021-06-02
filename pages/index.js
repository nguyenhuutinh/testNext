import styles from "../styles/Home.module.css";
import "normalize.css";
import PageOne from "../containers/PageOne";
import PageTwo from "../containers/PageTwo";
import PageThree from "../containers/PageThree";
import PageFour from "../containers/PageFour";
import PageFive from "../containers/PageFive";
import PageSix from "../containers/PageSix";
import PageSeven from "../containers/PageSeven";
import PageEight from "../containers/PageEight";
import Page9 from "../containers/Page9";
import Page10 from "../containers/Page10";
import Page11 from "../containers/Page11";
import Page12 from "../containers/Page12";
import Page13 from "../containers/Page13";
import Footer from "../containers/Footer";
import { SnackbarProvider, useSnackbar } from 'notistack';
import { Button } from "@material-ui/core";
import React ,{useEffect, useState} from 'react';
import { Waypoint } from "react-waypoint";
import jsCookie from 'js-cookie';
import Head from 'next/head'

const timeData = [
  '1 phút',
  '10 phút',
  '30 phút',
  '11 phút',
  '20 phút',
  '35 phút',
  '15 phút',
  '19 phút',
  '36 phút',
  '19 phút',
  '42 phút',
  '35 phút',
  '45 phút',
  '27 phút',
  '25 phút',
  '1 tiếng',
  '10 phút',
  '15 phút',
  '20 phút',
  '25 phút',
  '30 phút',
  '35 phút',
  '40 phút',
  '45 phút',
  '15 phút',
  '20 phút',
  '25 phút',
  '30 phút',
  '35 phút',
  '40 phút',
  '45 phút'
];

const nameData = [
  'Chị Hạnh',
  'Cô Dung',
  'Chú Hưng',
  'Anh Trung ',
  'Chị Mỹ',
  'Chị Hạnh Nhi',
  'Chị Diễm',
  'Cô Định',
  'Chú Hùng',
  'Cô Bình',
  'Chị Phúc',
  'Cô Thúy',
  'Chú Tuân',
  'Cô Gấm',
  'Anh Khải',
  'Anh Thuận',
  'Chú Minh',
  'Chị Phúc',
  'Cô Thúy',
  'Chị Huyền',
  'Anh Bá',
  'Cô My',
  'Chú Văn',
  'Chú Kỳ',
  'Cô Khánh',
  'Chú Thái',
  'Chú Long',
  'Anh Danh',
  'Cô An',
  'Chị Đan',
  'Cô Vân',
  'Cô Thanh',
  'Cô Lan',
  'Cô Liên',
  'Anh Khải',
  'Anh Nhân',
  'Chú Quang',
  'Chị Lài',
  'Cô Hảo',
  'Chị Mai'
];
const productData = [
  'đã đặt 1 thùng với giá 1.200.000đ',
  'đã đặt 1 thùng với giá 1.200.000đ',
  'đã đặt 1 thùng với giá 1.200.000đ',
  'đã đặt 1 thùng với giá 1.200.000đ',
  'đã đặt 1 thùng với giá 1.200.000đ',
  'đã đặt 1 thùng với giá 1.200.000đ',
  'đã đặt 1 thùng với giá 1.200.000đ',
  'đã đặt 1 thùng với giá 1.200.000đ',
  'đã đặt 1 thùng với giá 1.200.000đ',
  'đã đặt 1 thùng với giá 1.200.000đ',
  'đã đặt 1 thùng với giá 1.200.000đ',
  'đã đặt 1 thùng với giá 1.200.000đ',
  'đã đặt 1 thùng với giá 1.200.000đ',
  'đã đặt 1 thùng với giá 1.200.000đ',
  'đã đặt 1 thùng với giá 1.200.000đ',
  'đã đặt 1 thùng với giá 3.120.000đ',
  'đã đặt 1 thùng với giá 1.200.000đ',
  'đã đặt 1 thùng với giá 1.200.000đ',
  'đã đặt 1 thùng với giá 1.200.000đ',
  'đã đặt 1 thùng với giá 1.200.000đ',
  'đã đặt 1 thùng với giá 1.200.000đ',
  'đã đặt 1 thùng với giá 1.200.000đ',
  'đã đặt 1 thùng với giá 1.200.000đ',
  'đã đặt 1 thùng với giá 1.200.000đ',
  'đã đặt 1 thùng với giá 3.120.000đ',
  'đã đặt 1 thùng với giá 1.200.000đ',
  'đã đặt 1 thùng với giá 1.200.000đ',
  'đã đặt 1 thùng với giá 1.200.000đ',
  'đã đặt 1 thùng với giá 3.120.000đ',
  'đã đặt 1 thùng với giá 1.200.000đ'
];
function Home({data}) {
  // console.log("data", data)
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
    
    // console.log('Query variable %s not found', variable);
}
  useEffect(()=>{
    console.log(window)
    console.log(getQueryVariable("click_id"))
    if(window.location != undefined && location.search && getQueryVariable("click_id")){
      jsCookie.set('click_id', getQueryVariable("click_id"))
		}
  },[])
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    let timerId = setTimeout(function tick() {
      openNotification();
      timerId = setTimeout(tick, getRandomInt(60000, 120000)); // (*)
    }, 10000);
    return () => {
      clearTimeout(timerId);
    };
  }, []);
  const getRandomInt = (min, max) => {
    var x = Math.floor(Math.random() * (max - min + 1) + min);
    return x;
  };
  const openNotification = () => {
    var i = getRandomInt(0, 29);
    enqueueSnackbar(`${nameData[i]} ${productData[i]} ${"\n\n"} ${timeData[i]} trước`, {
      variant: 'success',
      style: { whiteSpace: 'pre-line', float: 'right' },

      anchorOrigin: {
        vertical: 'top',
        horizontal: 'left',
      },
    })
  }
  const [show, setShow] = useState(false)
  const handleData = () =>{
    setShow(true)
  }
  return (
    <>
      <Head>
        <meta charset="utf-8"/>
        <meta name="google" content="notranslate" />	
        <title>Mì Kiều Mạch Old Henry | mikieumach.vn</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Mì Kiều Mạch Old Henry | mikieumach.vn" key="title" />
        <meta property="og:description" content="Thực phẩm hỗ trợ ổn đình đường huyết, huyết áp cao, mì kiều mạch old henry có thể sử dụng làm món chính trong các bữa ăn hàng ngày. Mì kiều mạch sử dụng tốt nhất dành cho người bị tiểu đường." key="description" />
        <meta name="description" content="Thực phẩm hỗ trợ ổn đình đường huyết, huyết áp cao, mì kiều mạch old henry có thể sử dụng làm món chính trong các bữa ăn hàng ngày. Mì kiều mạch sử dụng tốt nhất dành cho người bị tiểu đường." key="description" />
      </Head>
      {/* <PageOne /> */}
      <PageTwo />
      
      <PageThree />
     
      <PageFive accessTrade={getQueryVariable("click_id")}/>
      

      <PageFour data={data}/>
     
     <PageSix />
      <PageSeven />
      <PageEight />
      <Page9 />
      <Page10 />
      <Page11 />
      <Page12 />
      {/* <Page13 /> */}
      <PageFive />
      <Footer /> 
    </>
  );
}

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

export async function getServerSideProps() {
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLYtQnSZdvHMigAe_ip_fWNHQrwtEBzT3j&key=AIzaSyCEUo1dKMxygN_Kw1FLZkJ3yfiG61fUbWI`)
  const data = await res.json();

  return {
    props: {
      data
    }
  }
}
export default function IntegrationNotistack({data}) {
  // console.log(data)
  return (
    <SnackbarProvider maxSnack={3}>
      <Home data={data}/>
    </SnackbarProvider>
  );
}