import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Hero = ({heroImage}) => {
    return (
        <div>
            <GatsbyImage image={heroImage.gatsbyImageData} alt="" />
        </div>
    )
}

export default Hero;