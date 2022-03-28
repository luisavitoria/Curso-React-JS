import React, { useState } from 'react'

import './App.css';

function App() {

  const [tarefas, setTarefas] = useState([
    'Estudar React Hooks',
    'Estudar Javascript'
  ])

  const [input, setInput] = useState('')

  function adicionarTarefas(){
    setTarefas([...tarefas, input])
    setInput('')
  }


  return (
    <div>
      <h1>Lista de tarefas</h1>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <input type='text' value={input} onChange={e => setInput(e.target.value) } />
      <button onClick={adicionarTarefas}>Adicionar</button>
    </div>
  );
}

export default App;
