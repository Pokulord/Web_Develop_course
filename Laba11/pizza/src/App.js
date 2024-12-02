import './App.css';
import PizzaBlock from './components/pizza_block/PizzaBlock';
import img1 from './images/Pepperoni.jpg';
import img2 from './images/Margarita.jpg';
import img3 from './images/Barb.jpg'


function App() {
  return (
    <div className="container">
      <div className='pizza_block_cont'>
        <PizzaBlock card_img={img1} card_title="Пепперони" pizza_price = "550" ad_title = "Ничего лишнего! Томатный соус, колбаски Пепперони и Моцарелла" />
        <PizzaBlock card_img={img2} card_title="Маргарита" pizza_price = "700"  ad_title = "Просто пицца Маргарита. Что вам ещё надо?"/>
        <PizzaBlock card_img={img3} card_title = "Пицца барбекю" pizza_price = "350"  ad_title = "А тут описания не будет. Выплатите зарплату программисту!!!" />
      </div>
    </div>
  );
}

export default App;
