import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";

const items = ["Img 1", "Img 2", "Img 3", "Img 4", "Img 5", "Img 6"];

let CarouselComponent = () => {
	const autoplay = useRef(Autoplay({ delay: 9000 }));
	return (
		<Carousel
			withIndicators
			height={350}
			plugins={[autoplay.current]}
			onMouseEnter={autoplay.current.stop}
			onMouseLeave={autoplay.current.reset}
			// slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
			loop
			align="start"
			withControls={false}
		>
			{items.map((item, index) => (
				<Carousel.Slide
					key={index}
					style={{
						backgroundColor: "beige",
						margin: "0 10px", // Adjust margin to control spacing
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					{item}
				</Carousel.Slide>
			))}
		</Carousel>
	);
}

export default CarouselComponent;
