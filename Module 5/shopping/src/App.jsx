import './App.css';
import Header1 from './components/Header1';
import Header2 from './components/Header2';
import Header3 from './components/Header3';
import Products from './components/Products';
import Slider from './components/Slider';

function App() {
 
  return (
    <>
      <Header1 />
      <hr />
      <Header2 />
      <hr />
      <Header3 />
      <hr />
      <Slider/>
      <hr />
      <Products/>
    </>
  );
}

export default App;
