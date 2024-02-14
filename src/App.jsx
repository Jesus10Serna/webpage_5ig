// import logo from './logo.svg';


import './utilities/i18n'; // Importa la configuración de i18next
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './pages/App';
import AboutUs from './pages/about_us'
import Automate from './pages/automate';
import WorkWithUs from './pages/work_with_us'
import Services from './pages/services_content'
import ContractUs from './pages/Contract_us';






function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>}>
            <Route exact path=":toService" element={<Home/>}/>
          </Route>
          <Route exact path="/automate" element={<Automate/>}/>
          <Route exact path="/wwus" element={<WorkWithUs/>}/>
          <Route exact path="/aboutus" element={<AboutUs/>}/>
          <Route exact path="/contractus" element={<ContractUs/>}/>
          <Route exact path="/services/:service" element={<Services/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
