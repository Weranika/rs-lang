import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TemplatePage from './components/TemplatePage/templatePage';
import Main from './components/Main/main';
import Tutorial from './components/Tutorial/tutorial';
import Audiocall from './components/GameAudiocall/audiocall';
import Sprint from './components/GameSprint/sprint';
import Statistic from './components/Statistic/statistic';

function App() {
  return (
    // <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TemplatePage />}>
          <Route path="/" element={<Main />} />
          <Route path="tutorial" element={<Tutorial />} />
          <Route path="audiocall" element={<Audiocall />} />
          <Route path="sprint" element={<Sprint />} />
          <Route path="statistic" element={<Statistic />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
