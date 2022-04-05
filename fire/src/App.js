import firebase from "./firebaseConnection";
import { useState, useEffect } from 'react'

function App() {
  const [idPost, setIdPost] = useState('')
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [posts, setPosts] = useState([])

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  
  useEffect(()=> {
    async function loadPosts() {
      await firebase.firestore().collection('posts')
      .onSnapshot((doc)=> { //real time - atualiza automaticamente para qualquer mudança
        let meusPosts = []
        doc.forEach((item)=> {
          meusPosts.push({
            id: item.id,
            titulo: item.data().titulo,
            autor: item.data().autor
          })
        })

        setPosts(meusPosts)
      })
    }

    loadPosts()
  
  },[])
  

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
    .catch(()=> {
      console.log('deu algum erro!')
    })
  }

  async function editarPost() {
    await firebase.firestore().collection('posts')
    .doc(idPost)
    .update({
      titulo: titulo,
      autor: autor
    })
    .then(() => {
      console.log('dados atualizados')
      setTitulo('')
      setAutor('')
      setIdPost('')
    })
    .catch(() => {
      console.log('erro ao atualizar')
    })
  }

  async function excluirPost(id) {
    await firebase.firestore().collection('posts')
    .doc(id)
    .delete()
    .then(() => {
      alert('post exlcuido!')
    })
  }

  async function cadastrarUsuario() {
    await firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then((value) => {
      console.log(value)
      alert('Cadastro realizado!')
      setEmail('')
      setSenha('')
    })
    .catch((error) => {
      if(error.code === 'auth/weak-password') {
        alert('Senha muito fraca!')
      }else if(error.code === 'auth/invalid-email') {
        alert('Email inválido!')
      }
    })
  }
  

  return (
    <div>
      <h1>REACT JS + FIREBASE</h1>

      <div>
        <h2>Cadastro:</h2>

        <label>Email: </label>
        <input type='text' value={email} onChange={e => setEmail(e.target.value)} /><br/> <br/>

        <label>Senha: </label>
        <input type='password' value={senha} onChange={e => setSenha(e.target.value)}/> <br/> <br/>

        <button onClick={ cadastrarUsuario }>Cadastrar</button>
      </div>

      <div>
        <hr/>
        <h2>Banco de dados: </h2>
        <label>ID: </label><br/>
        <input type='text' value={idPost} onChange={e => setIdPost(e.target.value)} /><br/>

        <label>Título:</label><br/>
        <textarea type='text' value={titulo} onChange={ (e) => setTitulo(e.target.value)} ></textarea> <br/>

        <label>Autor:</label><br/>
        <textarea type='text' value={autor} onChange={ (e) => setAutor(e.target.value)}/> <br/>

        <button onClick={ handleAdd }>Cadastrar</button>
        <button onClick={ buscaPost }>Buscar post</button>
        <button onClick={ editarPost }>Editar Post</button>
      </div>

      <div>
        <ul>
          {posts.map((post) => {
            return(
              <li key={post.id}>
                <span>ID: {post.id}</span><br/>
                <span>Título: {post.titulo}</span><br/>
                <span>Autor: {post.autor}</span><br/>
                <button onClick={ e => excluirPost(post.id) }>Excluir Post</button>
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

// erros:
// https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#createuserwithemailandpassword