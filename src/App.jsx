import { HashRouter as Router , Routes, Route } from 'react-router-dom';

import './App.css';
import Contrato from './components/contrato';
import Aceitou from './components/Aceitou';
import Feliz from './components/paginas/Feliz';
import Triste from './components/paginas/Triste';
import BaterNoIgor from './components/paginas/BaterNoIgor'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Contrato />} />
          <Route path='/Aceitou' element={<Aceitou />} />
          <Route path='/feliz' element={<Feliz />} />
          <Route path='/triste' element={<Triste />} />
          <Route path='/baterNoIgor' element={<BaterNoIgor />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
