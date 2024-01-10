import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { HeroContainer, TitleContainer, Hero } from "./styles"
import Image from "../image";

const StandardHero = ({heroImage, pagetitle}) => {
    return (

        <HeroContainer>
            <Hero image={heroImage.file.url}>
            <TitleContainer><h1>{pagetitle}</h1></TitleContainer></Hero>
        </HeroContainer>

    )
}

export default StandardHero;