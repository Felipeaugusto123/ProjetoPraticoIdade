import { FormEvent, useState } from 'react'
import './App.css'

function App() {

  interface ResultadoProps{
    nome:string;
    idade:number;
  }

  const [nome,setNome] = useState("");
  const [ano,setAno] = useState("");
  const [resultado,setResultado] = useState<ResultadoProps>()


  function descobrirIdade( e :FormEvent){
    e.preventDefault()
    
    const currentYear = new Date().getUTCFullYear();
    setResultado({
      nome: nome,
      idade: currentYear - Number(ano )
    });
    setNome('')
    setAno('')
  }


  return (
    <div className='container'>
      <h1 className='title'>Descubra sua idade</h1>

      <form className='form' onSubmit={descobrirIdade}>

        <label
          className='nameTag'>
          Qual o seu nome ?
        </label>

        <input 
        value={nome}
        onChange={(e)=>setNome(e.target.value)}
        placeholder='Digite seu Nome'
        type='text' />

        <label
          className='ageTag'>
          Digite o ano em que nasceu ?
        </label>

        <input 
        value={ano}
        onChange={(e)=>setAno(e.target.value)}
        type='text'
        placeholder='Digite o ano em que você nasceu'

        />

        <button type='submit' onClick={descobrirIdade}>Descobrir idade</button>
      </form>

      {resultado && resultado.nome !== '' &&(
        <div className='resul'>
        <span>{resultado.nome} você tem (ou ira fazer) {resultado.idade} anos</span>
      </div>
      )}

      
    </div>
  )
}

export default App
