import{BrowserRouter, Routes, Route}from 'react-router-dom';

import Home from './pages/Home';
import Filmes from './pages/Filmes';

// criando o componente de rotas
function RoutesApp(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/filme/:id" element={<Filmes/>}/>
    </Routes>
    </BrowserRouter>

  )
}
export default RoutesApp;