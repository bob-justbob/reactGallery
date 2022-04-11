import React from "react";
import Img1 from './img/one.jpg';
import Img2 from './img/two.jpg';
import Img3 from './img/three.jpg';
import Img4 from './img/four.jpg';
import Img5 from './img/five.jpg';
import Img6 from './img/six.jpg';
import Img10 from './img/ten.jpg';
import Img7 from './img/seven.jpg';
import Img8 from './img/eight.jpg';
import Img9 from './img/nine.jpg';


import './Gallery.css';
import { useState } from "react";
// import CloseIcon from '@mui/icons-material/Close';
import { ReactComponent as YourSvg } from './logo.svg';

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
            imgSrc: Img10,
        },
        {
            id: 1,
            imgSrc: Img5,
        },
        {
            id: 1,
            imgSrc: Img6,
        },
        {
            id: 1,
            imgSrc: Img4,
        },
        {
            id: 1,
            imgSrc: Img8,
        },
        {
            id: 1,
            imgSrc: Img9,
        },
        {
            id: 1,
            imgSrc: Img7,
        }
    ]
    const [model, setModel] = useState(false);
    const [tempingSrc, setTempImgSrc] = useState('')
    const getImg =  (imgSrc)=> {
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return (
        <div>
            <div className={model ? "model open": "model"}>
                <img src={tempingSrc} />
                <YourSvg onClick={()=>  setModel(false)}/>
            </div>
         <div className="gallery">
            {data.map((item, index)=>{
                return (
                    <div className="pics" key={index} onClick={()=> getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{width: '100%'}}  />
                    </div>
                )
            })}
         </div>
        </div>
    )
}