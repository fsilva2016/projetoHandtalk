import './App.css';
import { Button } from 'antd';
import { useEffect, useState } from 'react';

function App() {
  useEffect(() => {},[])
  const [ showNav,setshowNav] = useState(true);
  const [ showConst,setConst] = useState(false);

  const overNavFunction = () =>{
    setshowNav(prev => !prev)
    const menu =  document.getElementById('navPlug');
    console.log(showNav)
    if( showNav == false){
      menu.style.display= 'block';
    }
    console.log('ultimo' + showNav)
    showNav.style.display = 'none'
  }
  const contrast = () =>{
    setConst(prev => !prev)
    console.log(showConst)
    if(showConst == true){
      document.querySelector('.App-header').classList.add('active');      
    }else{
      document.querySelector('.App-header active').removeClass('active'); 
    }
  
  }
  return (
    <div className="App">
      <div className="App-header">
        <header> 
          <nav className="navPlug" id="navPlug">
            <li><a href="#" onClick={contrast}>contraste </a></li>
            <li><a href="#">A+|A-</a></li>
            <li><a href="#">Highlight</a></li>
            <li><a href="#">Spacing</a></li>
          </nav>
        </header>
        <div>
        <Button type="primary" onClick={ () => overNavFunction('false') }>
          iniciar Aplicação
        </Button>
        </div>
      </div>      
    </div>   
  );
}

export default App;
