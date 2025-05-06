
import { Fragment } from 'react'
import './App.css'
import Header from './components/Header'  
import Main from './components/Main'
import Footer from './components/Footer'
import Jumbotron from './components/Jumbotron'


function App() {
  return (
    <Fragment>
      <Header></Header>
      <Jumbotron></Jumbotron>
      <Main></Main>
      <Footer></Footer>
    </Fragment> 
  )
}

export default App
