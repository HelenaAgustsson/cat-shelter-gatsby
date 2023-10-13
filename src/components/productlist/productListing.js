import React, {useContext, useState} from "react"
import ThemeContext from "../themecontext"
import { Link } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image'


const ProductListing =({product})=>{
    const theme = useContext(ThemeContext);
    return (
        <div className={`theme-${theme}`}>
            <Link to={product.slug}><GatsbyImage style={{  width: "80%"}} image={product.image.gatsbyImageData} alt={product.alt} /></Link>
            <div className="title-container"><Link to={product.slug}>{product.title}</Link></div>
        </div>
    )
}

export default ProductListing;