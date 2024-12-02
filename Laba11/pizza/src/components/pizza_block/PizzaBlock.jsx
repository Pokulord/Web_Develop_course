import React from 'react'
import style from './PizzaBlock.module.css'

function PizzaBlock(props) {
  return (
    <div className={style.pizza_block}>
      <div className={style.card_image}>
        <img src={props.card_img} alt="" />
      </div>
      <div className={style.card_descr}>
        <p className={style.card_title}>{props.card_title}</p>
        <p className={style.card_title_additional} > {props.ad_title}</p>
        <form action="#">
          <select required className={style.diameter_select}>
            <option value="" disabled selected hidden class="placeholder-option">Диаметр</option>
            <option value="pizza">20 см</option>
            <option value="burger">40 см</option>
          </select>
          <p className={style.pizza_card_price} > от {props.pizza_price} ₽</p>
          <div className={style.order_sect} >
            <button className="pizza_minus_but" >-</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PizzaBlock
