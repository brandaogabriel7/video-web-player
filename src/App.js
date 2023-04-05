import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import VideoPlayer from './containers/VideoPlayer';

import heatherAct1 from './assets/videos/Heathers Act 1.mp4';
import heatherAct1Subtitles from './assets/subtitles/Heathers_Legenda_Ato1.srt';
import heatherAct2 from './assets/videos/Heathers Act 2.mp4';
import heatherAct2Subtitles from './assets/subtitles/Heathers_Legenda_Ato2.srt';


class App extends Component {
  render() {
    return (
      <div className="App">

        <header>
          <nav>
            <ul>
              <li>
                <Link to={{
                  pathname: '/heathers/',
                  search: `?videoPath=${encodeURIComponent(heatherAct1)}&subtitlesPath=${encodeURIComponent(heatherAct1Subtitles)}`
                }}>
                  Heathers act 1
                </Link>
              </li>
              <li>
                <Link to={{
                  pathname: '/heathers/',
                  search: `?videoPath=${encodeURIComponent(heatherAct2)}&subtitlesPath=${encodeURIComponent(heatherAct2Subtitles)}`
                }}>
                  Heathers act 2
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/heathers" component={VideoPlayer} />
      </div>
    );
  }
}

export default App;
