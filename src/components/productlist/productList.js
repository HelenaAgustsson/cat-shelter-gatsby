import React from "react"
import { Link } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image'
import { ProductListContainer, ProductContainer, LinkTitle } from './styles';

const ProductList=({products})=>{

    return (
      <ProductListContainer>
        {products.map((product, index) => (
            <ProductContainer key={index}>
              <Link to={product.slug}><GatsbyImage image={product.image.gatsbyImageData} alt={product.alt} /></Link>
              <LinkTitle><Link to={product.slug}>{product.title}</Link></LinkTitle>
            </ProductContainer>
          ))
        }
      </ProductListContainer>
    )
}

export default ProductList