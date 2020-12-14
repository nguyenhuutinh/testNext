

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
			Công Ty TNHH Thousand Hands Viet Nam cam kết cung cấp sản phẩm  độc quyền và chính hãng cũng như công khai thông tin trung thực về sản phẩm Mì kiều mạch ổn định đường huyết OLD HENRY theo thông tin của Nhà sản xuất.<br /><br />Công Ty TNHH Thousand Hands Viet Nam không chịu trách nhiệm với các trường hợp sau đây:<br />

- Sản phẩm Mì kiều mạch ổn định đường huyết OLD HENRY có thể được sử dụng thay thế cho bữa ăn hằng ngày giúp hỗ trợ ổn định đường huyết tùy thuộc vào cơ địa của từng người khác nhau. Vì vậy. Công Ty TNHH Thousand Hands Viet Nam không cam kết một kết quả cụ thể nào đối với sản phẩm này. Khách hàng có thể tham khảo các tư vấn của tổng đài chăm sóc khách hàng Công Ty TNHH Thousand Hands Viet Nam.<br />

- Đối với các hình ảnh, video mình họa ""Trước khi dùng - Sau khi dùng"". khách hàng lưu ý đây là những thông tin kết quả dựa trên số đông người dùng có các cơ địa hoàn toàn khác nhau.  Vì thể Công Ty TNHH Thousand Hands Viet Nam không cam kết một kết quả cụ thể nào như hình ảnh và video minh họa ""Trước khi dùng - Sau khi dùng"", mà thay vào đó chỉ dùng để tham khảo. <br />

- Các sản phẩm có nội dung chống chỉ định đi kèm như: không dùng cho phụ nữ mang thai, trẻ em dưới 3 tháng tuổi, người quá mẫn cảm với thành phần xyz,.... khách hàng vui lòng đọc kỹ trong nội dung bài viết. Công Ty TNHH Thousand Hands Viet Nam không chịu trách nhiệm trong trường hợp khách hàng không làm theo yêu cầu hướng dẫn của nhà sản xuất chỉ định.<br />
			</div>
			<br />
		</Grid>
<Grid><Footer/></Grid>
	</Container> </div>
	
}

export default Page1
