import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import { useEffect, useState } from 'react';

function App() {
  useEffect(() => {},[])
  const [ showNav,setshowNav] = useState(false)

  const overNavFunction = () =>{
    setshowNav(prev => !prev)
    console.log(showNav)
  }

  return (
    <div className="App">
      <header className="App-header">     
        
        <nav className="navPlug">
          <li><a href="#">Plung</a></li>
          <li><a href="#">Aplicativo</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contudrteerto</a></li>
        </nav>
      </header>
      <div>
    <Button type="primary">
      olas
    </Button>
      </div>
    </div>   
  );
}

export default App;
