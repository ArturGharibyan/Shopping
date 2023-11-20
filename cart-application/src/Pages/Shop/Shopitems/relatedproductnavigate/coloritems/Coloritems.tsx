import './coloritems.css';
import React from "react";


interface Colortype {
    onClick: (images: any) => void
    onchange: (index: React.FormEvent<MouseEvent>) => void
    onblur: (index: any) => void
    images: string
    imgs: any
    adref: any
    index: any
}

const Coloritems = ({ onClick, images, imgs, onblur, onchange, adref, index }: Colortype) => {

    return (
        <div ref={adref}  onClick={() => onblur(index)} className={index == 0 ? ' shopImageLists img_wrap active' : 'shopImageLists img_wrap'} >
            <div onClick={() => onchange(imgs)}>
                <img src={images} onClick={() => onClick(images)} className='shopImageLists' />
            </div>
        </div>
    );
};

export default Coloritems;