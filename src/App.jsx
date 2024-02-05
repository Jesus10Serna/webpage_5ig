// import logo from './logo.svg';
// import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './pages/App';
import AboutUs from './pages/about_us'
import Automate from './pages/automate';
import WorkWithUs from './pages/work_with_us'
import Services from './pages/services_content'
import Contract_us from './pages/Contract_us';





function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/:toService" element={<Home/>}/>
          <Route exact path="/automate" element={<Automate/>}/>
          <Route exact path="/wwus" element={<WorkWithUs/>}/>
          <Route exact path="/aboutus" element={<AboutUs/>}/>
          <Route exact path="/contractus" element={<Contract_us/>}/>
          <Route exact path="/services/:service" element={<Services/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
