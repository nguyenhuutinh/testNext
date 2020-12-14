

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
				Chào mừng bạn đến với website chính thức của <b style={{color:'#084f1f'}}>Mì Kiều Mạch Old Henry </b>(<a style={{color:'#084f1f'}} href="https://www.mikieumach.vn">www.mikieumach.vn</a>) được được vận
				hành bởi <b>Công Ty TNHH Thousand Hands Viet Nam Việt Nam</b>. Chúng tôi nhận biết rằng dữ liệu cá nhân của bạn là quan
				trọng và cần được bảo mật một cách nghiêm túc. Chính sách bảo mật này được đưa ra để giúp bạn hiểu được
				cách thức chúng tôi thu thập, sử dụng, xử lý dữ liệu cá nhân mà bạn đã cung cấp trên nền tảng của <b style={{color:'#084f1f'}}>Old Henry</b> cũng như cam kết bảo mật thông tin.<br /><br />
				Việc thu thập dữ liệu chủ yếu trên website <a style={{color:'#084f1f'}} href="https://www.mikieumach.vn">www.mikieumach.vn</a> được xác định khi bạn muốn sử dụng dịch vụ
				của website hoặc cần được tư vấn về sản phẩm <b style={{color:'#084f1f'}}>Mì Kiều Mạch Old Henry</b>. Chúng tôi thu thập, lưu trữ và xử
				lý thông tin của bạn cho quá trình thực hiện giao dịch mua bán, cho những thông báo sau này, hoặc để tư
				vấn. <br /><br />
				Chúng tôi sẽ dùng thông tin bạn đã cung cấp để xử lý đơn đặt hàng hoặc giải đáp, tư vấn các thông tin
				yêu cầu của bạn. Ngoài ra, chúng tôi còn có thể liên hệ với khách hàng để biết đánh giá, ý kiến phản hồi
				của khách hàng về sản phẩm tại <b style={{color:'#084f1f'}}>Old Henry</b>, nhằm hỗ trợ hệ thống chăm sóc khách hàng, quản lý khách hàng,
				chăm sóc và nhận ý kiến phản hồi từ phía khách hàng một cách hiệu quả hơn. Bạn có thể kiểm tra lại thông
				tin đơn hàng khi đăng nhập lại vào tài khoản mà bạn đã đăng ký. Người dùng có thể cập nhật thông tin cá
				nhân của mình thông qua website <a style={{color:'#084f1f'}} href="https://www.mikieumach.vn">www.mikieumach.vn</a> bằng cách đăng nhập vào tài khoản mà mình đã đăng ký và sửa
				lại các thông tin, dữ liệu cá nhân của mình.<br /><br />
				Thông tin của khách hàng chỉ được sử dụng trong hoạt động quản lý và kinh doanh của website, cũng như
				cung cấp cho đối tác vận chuyển liên kết với công ty. <b style={{color:'#084f1f'}}>Old Henry</b> xin cam đoan sẽ bảo vệ tuyệt đối những
				thông tin cá nhân của người sử dụng website. Chúng tôi chỉ thu thập những thông tin cần thiết và có liên
				quan đến việc thực hiện giao dịch mua hàng hoặc vì mục đích tư vấn chi tiết sản phẩm. Chúng tôi sẽ không
				sử dụng các thông tin này cho các mục đích khác gây ảnh hưởng đến quyền lợi khách hàng. Thông tin chỉ
				được tiết lộ cho bên thứ ba nào khác chỉ trong những trường hợp đặc biệt khi có sự yêu cầu của luật pháp
				hoặc nhà chức trách có thẩm quyền. <b style={{color:'#084f1f'}}>Old Henry</b> cam kết không cho thuê/ bán thông tin của bạn hoặc sử dụng
				vì mục đích ngoài nào khác.<br />
			</div>
			<br />
		</Grid>
<Grid><Footer/></Grid>
	</Container> </div>
	
}

export default Page1
