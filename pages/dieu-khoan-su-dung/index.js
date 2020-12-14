

import { Container, Grid } from '@material-ui/core';
import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import PageOne from '../../containers/PageOne';
import Footer from '../../containers/Footer';
const useStyles = makeStyles((theme) => ({
	intro:{
		// fontFamily: 'HelveticaNeue sans-serif',
		marginTop: "100px",
		fontSize: "18px",
		color: "#444444",
		whiteSpace: "pre-line",
		"& bold": {
			fontWeight: "bold",
			color: "#444444",
			fontSize: "18px"
		}
	},
	address:{
		marginTop: "10px",
		color: "#444444",
		textAlign: "center",
		fontSize: "18px",
		fontWeight: 700,
	}
	
  }));
function Page1(){
	const classes = useStyles();
	return <div><PageOne/><Container style={{ background: 'white', paddingBottom: '100px' }}>
		<Grid  xl={9}>
			<br />
			<div className={classes.intro}>
				Chào mừng bạn đến với website chính thức của <b style={{color:'#084f1f'}}>Mì Kiều Mạch Old Henry</b> (<a style={{color:'#084f1f'}} href="https://www.mikieumach.vn">www.mikieumach.vn</a>) được được vận
				hành bởi <b>Công Ty TNHH Thousand Hands Viet Nam</b>. Chúng tôi mong bạn vui lòng dành thời gian đọc và tìm
				hiểu những điều khoản sử dụng đối với website <b style={{color:'#084f1f'}}>Old Henry</b> một cách rõ ràng để tránh những hiểu lầm hay
				khúc mắc không đáng có về sau. <br /><br /> <b>1. QUY ĐỊNH CHUNG</b> <br/>Sau khi truy cập vào trang Thông tin Điện tử&nbsp;
				<a style={{color:'#084f1f'}} href="https://www.mikieumach.vn">www.mikieumach.vn</a> để tham khảo thông tin hoặc mua sắm, quý khách đã đồng ý tuân thủ và ràng buộc với những
				quy định của <b style={{color:'#084f1f'}}>Old Henry</b>. Quý khách vui lòng xem kỹ các quy định và hợp tác. Nếu có bất kỳ thắc mắc gì về
				các quy định trong điều khoản sử dụng, bạn có thể liên hệ trực tiếp qua hotline hoặc fanpage để được hỗ
				trợ. <br /><br /><b>2. BẢN QUYỀN VÀ THƯƠNG HIỆU</b> <br/>Trang web <a style={{color:'#084f1f'}} href="https://www.mikieumach.vn">www.mikieumach.vn</a> và các nội dung, hình ảnh, thương hiệu,
				logo, banner… trực thuộc trên trang web đều thuộc quyền sở hữu của thương hiệu <b style={{color:'#084f1f'}}>Mì Kiều Mạch Old Henry </b>
				 (dưới sự quản lý của <b>Công Ty TNHH Thousand Hands Viet Nam</b>). <br/>Bất kì hành động nào như sao chép, sử dụng các nội
				dung, hình ảnh, thương hiệu… với mục đích thương mại mà không có sự cho phép của <b style={{color:'#084f1f'}}>Old Henry</b> là xâm phạm
				bản quyền của <b style={{color:'#084f1f'}}>Old Henry</b>. Chúng tôi có quyền yêu cầu người sử dụng chấm dứt hành động xâm phạm này (nếu
				có). Người dùng được quyền chia sẻ thông tin/hình ảnh <br /><br /> <b>3. NGHĨA VỤ TRONG GIAO DỊCH</b> <br/><b style={{color:'#084f1f'}}>Old Henry</b> có nghĩa vụ:
				<br/>- Giao hàng đúng số lượng và sản phẩm mà khách hàng đặt mua. <br/>- Kiểm tra hàng hóa trước khi giao hàng. <br/>-
				Kiểm tra thông tin người nhận trước khi giao hàng và giao đúng đối tượng. <br/><br/>Khách hàng có nghĩa vụ: <br/>- Kiểm
				tra thông tin đơn hàng kỹ càng (thông tin người nhận hàng, giá trị đơn hàng, số lượng sản phẩm…) trước
				khi xác nhận đặt hàng. <br/>- Thanh toán đầy đủ giá trị đơn hàng (bao gồm phí ship) <br/>- Nhận hàng <br/>- Kiểm tra hàng <br /><br /><b>4.
				XỬ LÝ KHIẾU NẠI</b> <br/>Khi khách hàng có vấn đề cần khiếu nại, <b style={{color:'#084f1f'}}>Old Henry</b> sẽ xử tối ưu nhằm duy trì sự tin cậy
				của khách vào chất lượng dịch vụ của Công ty. Quý khách hàng vui lòng thực hiện theo các bước sau: <br/>+
				Bước 1: Liên hệ <b style={{color:'#084f1f'}}>Old Henry</b> và cung cấp các thông tin liên quan thông qua facebook công ty hoặc số hotline&nbsp;<b style={{textDecoration:'underline'}}>1900 633 084</b>. <br/>+ Bước 2: Bộ phận Chăm Sóc Khách Hàng hoặc Bộ phận Kinh doanh của Công ty sẽ tiếp nhận các
				phản ánh. Các Bộ phận này chủ động giải quyết nhanh chóng và trả lời kết quả giải quyết các khiếu nại
				trên cơ sở các Chính sách mà Công ty đã công bố. <br/>+ Bước 3: Tùy theo vấn đề và các thông tin liên quan,
				Công ty sẽ đưa ra biện pháp xử lý phù hợp. Thời gian giải quyết khiếu nại trong vòng 7 ngày kể từ ngày
				nhận được khiếu nại. <br/><br/><p style={{fontStyle:'italic'}}><b style={{color:'#084f1f'}}>Old Henry</b> có quyền điều chỉnh (bao gồm bổ sung, loại bỏ) bất kỳ nội dung nào trên
				website mà không cần phải thông báo trước với người sử dụng. <br/><br/>Quý khách vui lòng kiểm tra thường xuyên để
				cập nhật những thay đổi của <b style={{color:'#084f1f'}}>Old Henry</b>.</p>
			</div>
			<br />
		</Grid>
<Grid><Footer/></Grid>
	</Container> </div>
	
}

export default Page1
