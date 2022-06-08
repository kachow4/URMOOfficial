import './App.css';
import Navigation from './components/Navigation/Navigation'
import HeroImage from "./assets/images/12thGenSmile.jpg";
import './assets/css/Home/Hero.css';

function App() {
  return (
    <div>
      <Navigation/>
        <div className='hero-container'>
            <img src={HeroImage} alt="Hero Image"/>
        </div>
    </div>
  );
}

export default App;
