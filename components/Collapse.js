import React, { Component, useState, useEffect } from 'react';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
	hightlight: {
		width: '100%',
		background: "url('../rect.jpg')",
		backgroundSize: 'cover',
		paddingTop: '10px',
		// padding-left: 20px;
		// padding-right: 20px;
		paddingBottom: '10px',
		'& h5': {
			fontFamily: 'FSDiavloRegular',
			fontSize: '1.4rem',
			// line-height: 1.3rem;
			color: 'white',
			textAlign: 'center',
			marginBottom: '0px',
			marginTop: '8px'
		}
	},
	tab: {
		border: '1px solid #084f1f',
		marginTop: '10px',
		borderBottomLeftRadius: '10px',
		'border-bottom-right-radius': '10px',
		'border-top-left-radius': '10px',
		'border-top-right-radius': '10px'
	},
	item: {
		borderBottom: '1px solid #084f1f'
	},
	header: {
		position: 'relative',
		padding: '12px 16px 12px 40px',
		paddingLeft: '12px',
		color: 'rgba(0,0,0,.85)',
		lineHeight: '1.5715',
		cursor: 'pointer',
		transition: 'all .3s',
		'& h2': {
			color: '#084f1f',
			fontFamily: 'FSDiavloBold',
			marginBottom: '0',
			fontSize: '1rem',
			textTransform: 'uppercase'
		}
	},
	box: {
		borderTop: '1px solid #d9d9d9',
		color: '#084f1f',
		padding: '16px',
		fontWeight: 400
	}
}));
const Collapsed = () => {
	const classes = useStyles();
	const [ selected, setSelected ] = useState(0);
	const [ data, setData ] = useState([
		{
			id: 0,
			header: '∑  ỔN ĐỊNH ĐƯỜNG HUYẾT',
			desc: 'Giúp ổn định đường huyết trong máu một cách tự nhiên, an toàn và hiệu quả.'
		},
		{
			id: 1,
			header: '∑  CUNG CẤP PROTEIN DINH DƯỠNG',
			desc:
				'Protein tự nhiên được chiết xuất từ lúa mạch rất dồi dào. Nó có giá trị dinh dưỡng cao và là nguồn cung cấp calo và protein thực vật quan trọng.'
		},
		{
			id: 2,
			header: '∑  BỔ SUNG CHẤT XƠ KIỂM SOÁT CÂN NẶNG',
			desc: 'Mì Old Henry giàu chất xơ, giúp bạn no lâu, ít thèm ăn, giúp kiểm soát cân nặng hiệu quả.'
		},
		{
			id: 3,
			header: '∑  HỖ TRỢ CẮT THUỐC SAU 3 THÁNG SỬ DỤNG',
			desc:
				'Tình trạng đường huyết sẽ được cải thiện sau 3 tháng sử dụng. Bạn có thể cắt giảm thuốc dần khi đường huyết đã ổn định.'
		},
		{
			id: 4,
			header: '∑  NGUYÊN LIỆU CAO CẤP',
			desc:
				'Kiều mạch và lúa mạch cao cấp được trồng ở điều kiện không khí và nguồn nước sạch, không bị ô nhiễm nên rất lành mạnh và an toàn.'
		}
	]);
	useEffect(() => {}, []);

	const handleExpandClick = (id) => {
		if (id == selected) {
			setSelected(-1);
		} else {
			setSelected(id);
		}
		// console.log(this.state[`expanded_${id}`]);
		// this.setState({ [`expanded_${id}`]:  _.isUndefined(this.state[`expanded_${id}`])?true:!this.state[`expanded_${id}`] });
	};
	return (
		<div className={classes.tab}>
			{data.map((detail, index) => (
				<div key={detail.id} className={index != data.length -1 ? classes.item : ''} onClick={() => handleExpandClick(detail.id)}>
					<div className={classes.header}>
						<h2>{detail.header}</h2>
					</div>

					<Collapse in={selected == detail.id} timeout="auto" unmountOnExit>
						<div className={classes.box}>{detail.desc}</div>
					</Collapse>
				</div>
			))}
		</div>
	);
};

export default Collapsed;
