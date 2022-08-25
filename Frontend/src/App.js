import logo from './logo.svg';
import './App.css';
import Brands from "./Aadicomponent/brands/Brands"
import Track from "./Aadicomponent/Track/Track"
import Employees from './Aadicomponent/Employes/Employees';
import Manager from './Aadicomponent/manager/Manager';
import Enterprise from './Aadicomponent/enterprise/Enterprise';
import Hr from './Aadicomponent/hr/Hr';
import Navbar from './Aadicomponent/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
   {/* <Brands/>
      <Track/>
      <Employees/>
      <Manager/>
      <Enterprise/>
      <Hr/> */}
    </div>
  );
}

export default App;
