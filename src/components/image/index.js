import React from "react";

const Image = ({image}) => {
    if(!image) return null;

    const {file} = image;
    if(!file || !file.url) return null;

    const {url} = file;

    return (
        <picture>
            <source 
                srcSet={`${url}?fm=avif`} 
                type="image/avif" 
            />
            <source 
                srcSet={`${url}?fm=webp`} 
                type="image/webp" 
            />
            <img src={url} alt="test image" />
        </picture>
    )

}

export default Image;