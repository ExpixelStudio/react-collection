import UseFetchHookTest from './components/UseFetch/test'
import OnClickOutideTest from './components/OnClickOutside/test'
import './App.css'
import UseWindowResizeTest from './components/UseWindowResize/test'
import ScrollToTopAndBottom from './components/ScrollToTopAndBottom'
import ScrollToSection from './components/ScrollToTopAndBottom/ScrollToSection'

function App() {
  

  return (
    <>
      {/* Use fetch custom hook */}
      {/* <UseFetchHookTest /> */}

      {/* Use on click outside hook test */}
      {/* <OnClickOutideTest /> */}

      {/* Use window resize hook UseFetchHookTest */}
      {/* <UseWindowResizeTest /> */}

      {/* Scroll to Top and Bottom Hook */}
      {/* <ScrollToTopAndBottom /> */}

      {/* Scroll to particular section */}
      <ScrollToSection />

    </>
  )
}

export default App
