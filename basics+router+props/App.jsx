import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";
import './styles/App.css'

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App(){
    return (
       <Router>
          <Header/>

          <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            {/* <Route path="/product/:id" element={<Product/>}/> */}
            <Route path="*" element={<div>PAGE NOT FOUND 404</div>}/>

          </Routes>

       </Router>

    )
}


export default App;