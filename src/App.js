import React from 'react'
import './index.css'
import './App.css'

const App = () => {
  return (
    <div className="div">
      <nav className="nav-bar">
        <ul>
          <li className='home'><a href="#home">Home</a></li>
          {/* <li className='projects'><a href="#projects">Projects</a></li> */}
          <li className='github'><a target="_blank" rel="noreferrer" href="https://github.com/gvc222">GitHub</a></li>
          <li className='linkedin'><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/giannacalderon">LinkedIn</a></li>
          <li className='website'><a target="_blank" rel="noreferrer" href="https://www.playtimediary.com">Playtime Diary</a></li>
        </ul>
      </nav>
      <div className='page banner'>
        
        <div id='home'>
          <h4>Hello and welcome! Check out my coding projects below, or use the navbar above to look at other things I love to work on such as dance and art!</h4>

        </div>
        
        
        <div className="thumbnails gallery">
        <h4 id='projects'>Projects</h4>
          <ul>

            <li className="thumbnail"> 
              <a target='_blank' rel='noreferrer' href="https://radiant-lily-f1cd91.netlify.app/">
                <img src="https://raw.githubusercontent.com/gvc222/instagram-app/main/src/assets/instagram-clone.png" alt=""/>
              </a>
            </li>

            <li className="thumbnail">
              <a href="https://lighthearted-sunshine-3e03d4.netlify.app/" target='_blank' rel='noreferrer'>
                <img src="https://raw.githubusercontent.com/gvc222/cash-game/main/src/assets/vending-machine-app.png" alt=""/>
              </a>
            </li>

            <li className="thumbnail">
              <a href="https://main--frolicking-klepon-d462fc.netlify.app/" target='_blank' rel='noreferrer'>
                <img src="https://raw.githubusercontent.com/gvc222/notes-app/main/src/assets/notes.png" alt=""/>
              </a>
            </li>

            <li className="thumbnail">
              <a href="https://lambent-torte-2c3d85.netlify.app/" target='_blank' rel='noreferrer'>
                <img src="https://raw.githubusercontent.com/gvc222/eisenhower-matrix/development/src/assets/eisenhower-matrix-app-1.png" alt=""/>
              </a>
            </li>

            <li className="thumbnail">
              <a href="https://statuesque-tiramisu-c3ee40.netlify.app/" target='_blank' rel='noreferrer'>
                <img src="https://raw.githubusercontent.com/gvc222/voice-recorder-app/mobile-version/assets/Voice%20Recorder.png" alt=""/>
              </a>
            </li>

            <li className="thumbnail">
              <a href="https://main--sunny-melomakarona-c0cf24.netlify.app/" target='_blank' rel='noreferrer'>
                <img src="https://raw.githubusercontent.com/gvc222/recipe-finder-app/main/src/assets/recipe-finder-app-1.png" alt=""/>
              </a>
            </li>

            <li className="thumbnail">
              <a href="https://magnificent-conkies-d7ae82.netlify.app/" target='_blank' rel='noreferrer'>
                <img src="https://raw.githubusercontent.com/gvc222/hangman/main/src/assets/hangman-1.png" alt=""/>
              </a>
            </li>

            <li className="thumbnail">
              <a href="https://main--neon-melba-3ad125.netlify.app/" target='_blank' rel='noreferrer'>
                <img src="https://raw.githubusercontent.com/gvc222/weather-app/main/src/assets/demo/weather-app-cold.PNG" alt=""/>
              </a>
            </li>

            <li className="thumbnail">
              <a href="https://zippy-gnome-3e982e.netlify.app/" target='_blank' rel='noreferrer'>
                <img src="https://raw.githubusercontent.com/gvc222/shrek-song-player/green/media/Shrek%20Player.png" alt="" />
              </a>
            </li>

          </ul>
        </div>
        
      </div>
      
    </div>
  )
}

export default App