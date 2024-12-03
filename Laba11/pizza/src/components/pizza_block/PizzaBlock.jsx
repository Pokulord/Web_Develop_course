import React from 'react'
import style from './PizzaBlock.module.css'
import { useState } from 'react';



function PizzaBlock(props) {
  const [counter, setcounter] = useState(1);
  function increment() {
    setcounter(prev => prev + 1);
  }

  function decrement() {
    if (Number(counter) > 0)
    {
      setcounter(prev => prev - 1);
    }
    else
    {
      return;
    }


  }
  return (
    <div className={style.pizza_block}>
      <div className={style.card_image}>
        <img src={props.card_img} alt="" />
      </div>
      <div className={style.card_descr}>
        <p className={style.card_title}>{props.card_title}</p>
        <p className={style.card_title_additional} > {props.ad_title}</p>
        <select name='diameter' required className={style.diameter_select}>
          <option value="" disabled selected hidden className="placeholder-option">Диаметр</option>
          <option value="20 sm">20 см</option>
          <option value="40 sm">40 см</option>
        </select>
        <p className={style.pizza_card_price} > от {props.pizza_price} ₽</p>
        <div className={style.order_sect} >
          <button onClick={decrement} className={style.pizza_minus_but} >-</button>
          <input value={counter} name='pizza_count' className={style.pizza_count_input} type="text" />
          <button onClick={increment} className={style.pizza_plus_but}>+</button>
          <button className={style.add_to_cart_but}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket" viewBox="0 0 16 16">
              <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PizzaBlock
