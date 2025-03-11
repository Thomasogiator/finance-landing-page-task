import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'
import medium from '../assets/medium.svg'
import financeLogo from '../assets/financeLogo.svg'
import align from '../assets/align-text-left.svg'
import revenue from '../assets/Revenue-bro.svg'
import leftBackground from '../assets/Group 3510.svg'
import scrollDown from '../assets/Vector.svg'
import rightback from '../assets/Group 3444.svg'

const MainComponent = () => {
  return (
    <div className='main-comp-container'>
        <header>
            <div className='header-comp'>
                <img src={twitter} alt="twitter" />
                <img src={facebook} alt="facebook" />
                <img src={medium} alt="medium" />
            </div>
            <div className='header-comp'>
                <img src={financeLogo} alt="finance logo" />
                Finance
            </div>
            <div className='header-comp'>
                <img src={align} alt="hamburger" />
            </div>
        </header>
        <main>
            <div className='mutual-investment'>
                <div className='about-investment'>
                    <h2>Mutual Investment</h2>
                    <p>At Finance we care about your future. We help you invest the way you want. So you can relax, have fun and let your fund grow.</p>
                </div>
                <div className='learn-more'>
                    <button type='button'>Learn more</button>
                    <div></div>
                </div>
            </div>
            <div className='main-background'>
                <img src={revenue} alt="revenue" />
            </div>
            <img className='scroll' src={scrollDown} alt="scroll" />
        </main>
        <img className='left-back' src={leftBackground} alt="left-back" />
        <img className='right-back' src={rightback} alt="right-back" />
    </div>
  )
}

export default MainComponent