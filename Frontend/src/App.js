import logo from './logo.svg';
import './App.css';
import Brands from "./Aadicomponent/brands/Brands"
import Track from "./Aadicomponent/Track/Track"
import Employees from './Aadicomponent/Employes/Employees';
import Manager from './Aadicomponent/manager/Manager';
import Enterprise from './Aadicomponent/enterprise/Enterprise';
import Hr from './Aadicomponent/hr/Hr';
import Navbar from './Aadicomponent/Navbar/Navbar';
import RightNav from './Aadicomponent/Navbar/RightNav';
import Demo from './Aadicomponent/demo/Demo';
import Reviews from './Aadicomponent/reviews/Reviews';
import Tracking from './Aadicomponent/tracking/Tracking';
import Pricing from './Aadicomponent/pricing/Pricing';
import Secure from './Aadicomponent/securepay/Secure';

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
      <Navbar/>
      <Brands/>
      <Track/>
      <Employees/>
      <Manager/>
      <Enterprise/>
      <Hr/>
      <Demo/>
      <Reviews/>
      <Tracking/>
      <Pricing/>
      <Secure/>
    </div>
  );
}

export default App;
