import './App.css'
import UseRefExample from './components/UseRefExample'
import UseRefExample2 from './components/UseRefExample2'
import UseRefMemLeak from './components/UseRefMemLeak'
import UseMemoExample from './components/UseMemoExample'
import UseCallback from './components/UseCallback'
import CustomHookExample from './components/CustomHookExample'
import CustonHookLocalStorage from './components/CustonHookLocalStorage'

function App() {


  return (
    <div className="App">
    <CustonHookLocalStorage/>
    </div>
  )
}

export default App
