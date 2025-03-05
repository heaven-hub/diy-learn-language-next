import React from 'react'
import Image from "next/image";

interface props {
    W:number;
    H:number;
    svgName:string;
    className:string;
    alt:string;
}
export default function svgImage({W,H,svgName,className,alt=''}:props) {
    return (
        <Image
            className={className}
            src={`/icons/${svgName}.svg`}
            alt={alt}
            width={W}
            height={H}
        />
    )
}
