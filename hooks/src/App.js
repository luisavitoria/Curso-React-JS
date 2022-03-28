import React, { useState, useEffect, useMemo, useCallback } from 'react'

import './App.css';

function App() {

  const [tarefas, setTarefas] = useState([
    'Estudar React Hooks',
    'Estudar Javascript'
  ])

  const [input, setInput] = useState('')

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }, [tarefas]) // similar ao componentDidUpdate

  const adicionarTarefas = useCallback(() => {
    setTarefas([...tarefas, input])
    setInput('')
  }, [input, tarefas])

  const totalTarefas = useMemo(() => tarefas.length, [tarefas]) //toda vez que modificar tarefas, irá retornar tarefas.length


  return (
    <div>
      <h1>Lista de tarefas</h1>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul><br />
      <p>Você tem {totalTarefas} tarefas!</p>
      <input type='text' value={input} onChange={e => setInput(e.target.value) } />
      <button onClick={adicionarTarefas}>Adicionar</button>
    </div>
  );
}

export default App;
