import React from 'react';
import Slider from 'react-slick';

export default class ImageCarousel extends React.Component
{
	render () {
		var settings = this.props.settings || {
				dots: true,
				infinite: false,
				speed: 500,
				slidesToShow: 1,
				slidesToScroll: 1
		};
		var slides = this.props.slides || [];
		var imgStyle = {
			width:this.props.width,
			height:this.props.height
		}
		return (
			
				<Slider  {...settings}>
					{slides.map(function(item, index) {
							return <div><img style={imgStyle} src={item.src}  /></div>
						}
					)}		
				</Slider>
			
		);
	}
};
