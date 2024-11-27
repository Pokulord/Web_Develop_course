import React from 'react'
import style from "./Block.module.css";

function Block(props) {
    return (
        <div>
            <div className={style.block}>
                <img src={props.image} alt="" />
                <p>{props.text}</p>
                <p className={style.block_info}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate at </p>
            </div>
        </div>
    )
}

export default Block;
