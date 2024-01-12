import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { HeroContainer, Title, MobileTitle, Hero } from "./styles"
import Image from "../image";

const StandardHero = ({heroImage, pagetitle}) => {
    return (
        <HeroContainer>
            <Hero image={heroImage.file.url}>
                <Title><h1>{pagetitle}</h1></Title>
            </Hero>
            <MobileTitle><h1>{pagetitle}</h1></MobileTitle>
        </HeroContainer>
    )
}

export default StandardHero;