import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { HeroContainer, TitleContainer } from "./styles"


const Hero = ({heroImage, pagetitle}) => {
    return (
        <HeroContainer>
            <GatsbyImage image={heroImage.gatsbyImageData} alt="" />
            <TitleContainer><h1>{pagetitle}</h1></TitleContainer>
        </HeroContainer>
    )
}

export default Hero;