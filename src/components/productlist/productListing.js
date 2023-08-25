import React, {useContext} from "react"
import ThemeContext from "../themecontext"
import { Link } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image'

const ProductListing =({product})=>{
    const theme = useContext(ThemeContext)

    return (
        <div className={`theme-${theme}`}>
            <GatsbyImage image={product.image.gatsbyImageData} alt={product.alt} />
            <div><Link to={product.slug}>{product.title}</Link></div>
        </div>
    )
}

export default ProductListing;