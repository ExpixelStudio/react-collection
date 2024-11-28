
import './App.css'
import FeatureFlags from './components'

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
