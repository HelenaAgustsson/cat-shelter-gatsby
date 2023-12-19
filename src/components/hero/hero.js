import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { HeroContainer, TitleContainer, ImageContainer } from "./styles"
import Image from "../image";

const Hero = ({heroImage, pagetitle}) => {
    return (
        <HeroContainer>
            <ImageContainer image={heroImage.file.url} />
            <TitleContainer><h1>{pagetitle}</h1></TitleContainer>
        </HeroContainer>
    )
}

export default Hero;

/*
 <HeroContainer>
    <GatsbyImage image={heroImage.gatsbyImageData} alt="hero-image" />
    <Image image={heroImage} />
    <TitleContainer><h1>{pagetitle}</h1></TitleContainer>
</HeroContainer>
*/