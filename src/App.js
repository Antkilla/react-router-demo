import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className='mx-5 mx-y text-center'>;
      <Router>
        <Header />
        <Routes>
          <Route path="/" element= {<Home/>}  />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
