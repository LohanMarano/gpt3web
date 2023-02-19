import React from 'react'

import './App.css';
import './index.css';

import { Brand, Cta, Navbar } from './components';
import { Blog, Features, Footer, Header, Possibility, Whatgpt3} from './containers';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />        
      </div>
      <Brand />
      <Whatgpt3 />
      <Features />
      <Possibility />
      <Cta />      
      <Blog />
      <Footer />
    </div>
  )
}

export default App