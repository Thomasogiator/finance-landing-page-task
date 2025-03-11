import { useState } from 'react';
import backgroundImg from './assets/backgroundImg.svg'
import backgroundImg2 from './assets/backgroundImg2.svg'
import MainComponent from './components/MainComponent';
import ReactSwitch from 'react-switch';

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const handleModeChange = (nextChecked: boolean) => {
    setDarkMode(nextChecked);
  };

  return (
    <div className={darkMode ? "page-background dark-page" : "page-background"}>
      <div className='switch'>
        <ReactSwitch
          checked={darkMode}
          onChange={handleModeChange}
          activeBoxShadow='none'
          width={52}
          height={32}
          checkedIcon={false}
          uncheckedIcon={false}
        />
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </div>
      <div className='background-img'>
        <img src={backgroundImg} alt="background-image" />
      </div>
      <div className='background-img2'>
        <img src={backgroundImg2} alt="background-image" />
      </div>
      <MainComponent darkMode={darkMode}/>
    </div>
  );
}

export default App;
