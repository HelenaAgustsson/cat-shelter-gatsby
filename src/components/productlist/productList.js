import React, {useContext} from "react"
import ProductListing from "./productListing"

const ProductList=({products})=>{
    return products.map((product) => (
        <ProductListing product={product} ></ProductListing>
      ));
    
}

export default ProductList