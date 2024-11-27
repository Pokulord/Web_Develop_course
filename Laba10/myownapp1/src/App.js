import "./App.css";
import Block from "./components/blocks_element/Block";
import img1 from "../src/images/f3.png";
import img2 from "../src/images/f4.png";
import img3 from "../src/images/f5.png";


function App() {
  return (
    <>
    <div className="container">
      <div className="blocks_sect_header">
        Что вам необходимо?
      </div>
      <div className="blocks">
          <Block image={img1} text="Первый блок" />
          <Block  image={img2} text="Второй блок" />
          <Block  image={img3} text="Третий блок"/>
      </div>
    </div>
    </>
  );
}

export default App;
