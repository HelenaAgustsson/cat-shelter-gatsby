import React, {useContext} from "react"
import ProductListing from "./productListing"

const ProductList=({products})=>{

    return products.map((product, index) => (
        <ProductListing key={index} product={product} ></ProductListing>
      ));
    
}

export default ProductList