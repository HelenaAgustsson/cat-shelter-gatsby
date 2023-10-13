import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { HeroContainer } from "./styles"


const Hero = ({heroImage, pagetitle}) => {
    return (
        <HeroContainer>
            <GatsbyImage image={heroImage.gatsbyImageData} alt="" />
        </HeroContainer>
    )
}

export default Hero;