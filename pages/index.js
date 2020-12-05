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
  'đã đặt 2 hộp dùng thử với giá 1.800.000đ',
  'đã đặt 1 hộp dùng thử với giá 960.000đ',
  'đã đặt 10 gói dùng thử với giá 399.000đ',
  'đã đặt 10 gói dùng thử với giá 399.000đ',
  'đã đặt 3 gói dùng thử với giá 399.000đ',
  'đã đặt 1 hộp dùng thử với giá 960.000đ',
  'đã đặt 1 hộp dùng thử với giá 960.000đ',
  'đã đặt 10 gói dùng thử với giá 399.000đ',
  'đã đặt 10 gói dùng thử với giá 399.000đ',
  'đã đặt 10 gói dùng thử với giá 399.000đ',
  'đã đặt 10 gói dùng thử với giá 399.000đ',
  'đã đặt 10 gói dùng thử với giá 399.000đ',
  'đã đặt 10 gói dùng thử với giá 399.000đ',
  'đã đặt 10 gói dùng thử với giá 399.000đ',
  'đã đặt 10 gói dùng thử với giá 399.000đ',
  'đã đặt 10 gói dùng thử với giá 399.000đ',
  'đã đặt 10 gói dùng thử với giá 399.000đ',
  'đã đặt 10 gói dùng thử với giá 399.000đ',
  'đã đặt 10 gói dùng thử với giá 399.000đ',
  'đã đặt 10 gói dùng thử với giá 399.000đ',
  'đã đặt 10 gói dùng thử với giá 399.000đ',
  'đã đặt 10 gói dùng thử với giá 399.000đ',
  'đã đặt 10 gói dùng thử với giá 399.000đ',
  'đã đặt 10 gói dùng thử với giá 399.000đ',
  'đã đặt 10 gói dùng thử với giá 399.000đ',
  'đã đặt 10 gói dùng thử với giá 399.000đ',
  'đã đặt 10 gói dùng thử với giá 399.000đ',
  'đã đặt 10 gói dùng thử với giá 399.000đ',
  'đã đặt 10 gói dùng thử với giá 399.000đ',
  'đã đặt 10 gói dùng thử với giá 399.000đ'
];
function Home() {

  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    let timerId = setTimeout(function tick() {
      openNotification();
      timerId = setTimeout(tick, getRandomInt(60000, 120000)); // (*)
    }, 15000);
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
      
      {/* <PageOne /> */}
      <PageTwo />
      <PageThree />
      <Waypoint onEnter={handleData}></Waypoint>

      {show && <PageFour />}
      {show && <PageFive />}
     {show && <PageSix />}
     {show && <PageSeven />}
     {show &&  <PageEight />}
     {show &&  <Page9 />}
     {show &&  <Page10 />}
      <Page11 />
      <Page12 />
      <Page13 />
      <PageFive />
      <Footer /> 
    </>
  );
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Home />
    </SnackbarProvider>
  );
}