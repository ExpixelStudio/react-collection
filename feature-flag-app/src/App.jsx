
import './App.css';
import FeatureFlags from './components';
import TicTacToe from './components/TicTacToe';
import Accordion from './components/Accordian';
import RandomColor from './components/RandomColor';

import FeatureFlagGlobalState from './components/context';



function App() {
  

  return (
    <>
      {/* Feature Flag Implementation */}
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>
     
    </>
  )
}

export default App
