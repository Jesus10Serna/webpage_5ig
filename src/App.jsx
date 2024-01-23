// import logo from './logo.svg';
// import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './pages/App';
import Automate from './pages/automate';
import WorkWithUs from './pages/work_with_us'


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/automate" element={<Automate/>}/>
          <Route exact path="/wwus" element={<WorkWithUs/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
