import backgroundImg from './assets/backgroundImg.svg'
import backgroundImg2 from './assets/backgroundImg2.svg'
import MainComponent from './components/MainComponent';

function App() {
  return (
    <div className="page-background">
      <div className='background-img'>
        <img src={backgroundImg} alt="background-image" />
      </div>
      <div className='background-img2'>
        <img src={backgroundImg2} alt="background-image" />
      </div>
      <MainComponent/>
    </div>
  );
}

export default App;
