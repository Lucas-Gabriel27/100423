import logo from './logo.svg';
import './App.css';
import MediaNotas from './componentes/medianotas';
import'./componentes/medianotas.css'
import Situacao from './componentes/situacao'
import Imagem from './componentes/Imagem.js'


function App() {
  return (
    <div className="App">
      
      <Situacao></Situacao>
      <Imagem></Imagem>
    </div>
  );
}


export default App;


