
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import DnD from './pages/DnD';
import Category from './pages/Category'
import MealRecipe from './pages/MealRecipe'
import My404Component from './pages/NotFound'


function App() {

  return (
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dnd" element={<DnD />} />
          <Route path='/category/:strCategory' element={<Category/>}/>
          <Route path='/meal/:idMeal' element={<MealRecipe/>}/>
          <Route path="/*" element={<My404Component />} />
      </Routes>
  );
}

export default App;
