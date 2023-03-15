import { useState } from 'react'; 
import { FiSearch } from 'react-icons/fi'; 
import "./style.css";

import api from './services/api';

function App() {

  

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch(){
    if(input === ""){
      alert("Preencha com algum CEP!");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    } catch {
      alert("Ops erro ao buscar");
      setInput("");
    }
}
function handleKeyPress(event) {
  if(event.key === "Enter"){
    handleSearch();
  }
}
  
  

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      <div class="containerInput">
        <input 
          type="text" 
          placeholder="Digite o seu cep.." 
          value={input} 
           onChange={(e) => setInput(e.target.value)}
           onKeyDown={handleKeyPress}
        />
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"/>
        </button>
       
      </div>

      {Object.keys(cep).length > 0 && (
        <div className="main">
          <h2>CEP: {cep.cep}</h2>

          <span>Logradouro: {cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>Cidade/Estado: {cep.localidade} - {cep.uf}</span>
          
        </div>
        
      )}
      
      
    </div>
  );
}

export default App;


