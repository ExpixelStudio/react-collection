import TreeView from './components'
import menus from './components/data'
/* import './App.css' */

function App() {

  return (
    <>
      {/* Tree view compenent/ Menu UI / Recursive navigation menu */}
      <TreeView menus={menus} /> {/* from data.js */}
    </>
  )
}

export default App
