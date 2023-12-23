import React from "react";
import DemoImageFromPublic from "../../../public/demo-image.jpg";
import Image from "next/image";

const DemoImage = () => {
	// console.log(DemoImageFromPublic, "image-size");
	return (
		<div>
			<h1>Image Optimization</h1>
			<Image src={DemoImageFromPublic} height={200} width={200} />
			<img src={DemoImageFromPublic.src} />
			<Image
				src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
				height={300}
				width={300}
			/>
		</div>
	);
};

export default DemoImage;
