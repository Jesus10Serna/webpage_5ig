// import logo from './logo.svg';
// import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './pages/App';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
