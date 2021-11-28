import './App.css'
import { GlobalStyle } from './GlobalStyle'
import Header from './components/header/Header'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      <Home />
    </div>
  )
}

export default App
