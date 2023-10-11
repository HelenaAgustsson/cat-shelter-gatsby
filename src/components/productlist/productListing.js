import React, {useContext, useState} from "react"
import ThemeContext from "../themecontext"
import { Link } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image'


const ProductListing =({product})=>{
    const theme = useContext(ThemeContext);
    console.log(product.contentful_id)
    return (
        <div className={`theme-${theme}`}>
            <Link to={product.slug}><GatsbyImage image={product.image.gatsbyImageData} alt={product.alt} /></Link>
            
            <div className="title-container"><Link to={product.slug}>{product.title}</Link></div>
        </div>
    )
}

export default ProductListing;