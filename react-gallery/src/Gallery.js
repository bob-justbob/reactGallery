import React from "react";
import Img1 from './img/one.jpg';
import Img2 from './img/two.jpg';
import Img3 from './img/three.jpg';
import Img4 from './img/four.jpg';
import Img5 from './img/five.jpg';
import Img6 from './img/six.jpg';
import './Gallery.css';

export default function Gallery(){
    const data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 1,
            imgSrc: Img2,
        },
        {
            id: 1,
            imgSrc: Img3,
        },
        {
            id: 1,
            imgSrc: Img4,
        },
        {
            id: 1,
            imgSrc: Img5,
        },
        {
            id: 1,
            imgSrc: Img6,
        }
    ]
    return (
        <div>
         <div className="gallery">
            {data.map((item, index)=>{
                return (
                    <div className="pics" key={index}>
                        <img src={item.imgSrc} style={{width: '100%'}}  />
                    </div>
                )
            })}
         </div>
        </div>
    )
}