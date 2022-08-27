import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';


import Allroute from './routes/Allroute';
import Signup from './pages/Signup';
import Home from './pages/Home';
function App() {
  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId: "138552057700-esoue5q74o0ijrd22c5uvo3h1p435vm3.apps.googleusercontent.com",
        scope :""
      })
    }
    gapi.load('client:auth2',start);
  })
  return (
    <div className="App">
      <Allroute/>

      
      
    </div>
  );
}

export default App;