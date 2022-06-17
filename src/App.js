
import { useContext } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Photo from './components/Photo';
import Sidebar from './components/Sidebar';
import { ThemeContext } from './context/Themecontext';

function App() {

  const {islight} = useContext(ThemeContext);
  return (
    <div className={`App ${islight ? "light" : "dark"}`}>
      <div className='display'>
      <Photo />
     <Navbar />
     </div>
     <div className='display'>
     <Sidebar />
     <Dashboard />
     </div>
    </div>
  );
}

export default App;
