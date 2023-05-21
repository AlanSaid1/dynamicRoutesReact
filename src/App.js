import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About, Contact, Events, Home, NotFound, Products, Services, History } from './components/Paginas';
import CountryComponent from './components/countryComponent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path='/:dynamicPath' Component={CountryComponent}/>

        <Route path = '/about' element = {<About/>} >
          <Route path='services' element={<Services/>} />
          <Route path='history' element={<History/>} />
          </Route>

        
        <Route path = '/products' element = {<Products/>} />
        <Route path = '/events' element = {<Events/>} />
        <Route path = '/contact' element = {<Contact/>} />
        <Route path = '*' element = {<NotFound/>} />


      </Routes>
    </div>
  );
}

export default App;
