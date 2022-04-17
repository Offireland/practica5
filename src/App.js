import Contact from './components/Contacto';
import Circulo from './components/Circulo';
import Cuadro from './components/Cuadro';
import Barra from './layout/Barra';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
    <Routes>


    <Route path='/' element={<Barra/>}>
      <Route path='circulo' element={  <Circulo/>   }     />
      <Route path='contacto' element={  <Contact/>   }     />
      <Route path='cuadro' element={  <Cuadro/>   }     />

    </Route>





    </Routes>
    </BrowserRouter>
  );
}

export default App;
