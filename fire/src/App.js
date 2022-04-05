import firebase from "./firebaseConnection";
import { useState } from 'react'

function App() {

  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [posts, setPosts] = useState([])

  async function handleAdd() {
    await firebase.firestore().collection('posts')
    .add({
      titulo: titulo,
      autor: autor
    })
    .then(() => {
      console.log('dados cadastrados com sucesso')
      setTitulo('')
      setAutor('')
    })
    .catch((error) => {
      console.log('gerou algum erro: ' + error)
    })
  }

  async function buscaPost() {

    /* busca post por id
    await firebase.firestore().collection('posts')
    .doc('123')
    .get()
    .then((snapshot) => { //snapshot: "foto"/convenção/objeto com dados
      setTitulo(snapshot.data().titulo) 
      setAutor(snapshot.data().autor)
    })
    .catch(() => {
      console.log('gerou algum erro: ')
    })
    */

    await firebase.firestore().collection('posts')
    .get()
    .then((snapshot) => {
      let lista = []

      snapshot.forEach((doc)=>{
        lista.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor
        })
      })

      setPosts(lista)
    })
  }
  return (
    <div>
      <h1>REACT JS + FIREBASE</h1>

      <div>
        <label>Título:</label><br/>
        <textarea type='text' value={titulo} onChange={ (e) => setTitulo(e.target.value)} ></textarea> <br/>

        <label>Autor:</label><br/>
        <textarea type='text' value={autor} onChange={ (e) => setAutor(e.target.value)}/> <br/>

        <button onClick={ handleAdd }>Cadastrar</button>
        <button onClick={ buscaPost }>Buscar post</button>
      </div>

      <div>
        <ul>
          {posts.map((post) => {
            return(
              <li key={post.id}>
                <span>Título: {post.titulo}</span><br/>
                <span>Autor: {post.autor}</span><br/>
                <br/>
              </li>
            )
          })}
        </ul>
      </div>

    </div>
  );
}

export default App;

/* criar um documento com identificação manual
await firebase.firestore().collection('posts')
    .doc('1234')
    .set({
      titulo: titulo,
      autor: autor
    })
*/