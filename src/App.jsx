import './App.css'
import UseRefExample from './components/UseRefExample'
import UseRefExample2 from './components/UseRefExample2'
import UseRefMemLeak from './components/UseRefMemLeak'
import UseMemoExample from './components/UseMemoExample'
import UseCallback from './components/UseCallback'
import CustomHookExample from './components/CustomHookExample'
import CustomHookLocalStorage from './components/CustomHookLocalStorage'

function App() {


  return (
    <div className="App">
    <CustomHookLocalStorage/>
    </div>
  )
}

export default App
