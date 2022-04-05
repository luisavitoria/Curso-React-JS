import firebase from "./firebaseConnection";
import { useState, useEffect } from 'react'

function AuthComBD() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [cargo, setCargo] = useState('')
  const [nome, setNome] = useState('')
  const [user, setUser] = useState({})
  const [userLogged, setUserLogged] = useState({})
  
  
  useEffect(() => {

    async function checkLogin() {
      await firebase.auth().onAuthStateChanged((user) => { //monitora se existe um usuario logado ou nao
        if(user) { //se existe um usuario logado
          setUser(true)
          setUserLogged({
            uid: user.uid,
            email: user.email
          })
        }else {
          //nao possui usuario logado
          setUser(false)
          setUserLogged({})
        }
      })
    }

    checkLogin()

  }, [])


  async function cadastrarUsuario() {
    await firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then( async (value) => {
        await firebase.firestore().collection('users')
        .doc(value.user.uid)
        .set({
            nome: nome,
            cargo: cargo,
            status: true
        })
        .then(() => {
            setEmail('')
            setSenha('')
            setNome('')
            setCargo('')
        })
      
      alert('Cadastro realizado!')
     
    })
    .catch((error) => {
      if(error.code === 'auth/weak-password') {
        alert('Senha muito fraca!')
      }else if(error.code === 'auth/invalid-email') {
        alert('Email inválido!')
      }
    })
  }

  async function logout() {
    await firebase.auth().signOut()
    setUser({})
  }

  async function fazerLogin(){
    await firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(async (value) => {
        await firebase.firestore().collection('users')
        .doc(value.user.uid)
        .get()
        .then((snapshot) => {
            setUser({
                nome: snapshot.data().nome,
                cargo: snapshot.data().cargo,
                status: snapshot.data().status,
                email: value.user.email
            })
        })

    })
    .catch((error)=>{
        console.log('ERRO AO FAZER O LOGIN' + error);
    })
        
    }
  

  return (
    <div>
      <h1>REACT JS + FIREBASE</h1>

      {user && ( //se tiver um usuario logado (user=true)
        <div> 
          <strong>Seja bem vindo! (Você está logado)</strong><br/>
          <span>{userLogged.uid}  {userLogged.email}</span>
        </div>
      )}

      <div>
        <h2>Cadastro:</h2>

        <label>Nome: </label>
        <input type='text' value={nome} onChange={e => setNome(e.target.value)}></input><br/><br/>

        <label>Cargo: </label>
        <input type='text' value={cargo} onChange={e => setCargo(e.target.value)}></input><br/><br/>
        
        <label>Email: </label>
        <input type='text' value={email} onChange={e => setEmail(e.target.value)} /><br/> <br/>

        <label>Senha: </label>
        <input type='password' value={senha} onChange={e => setSenha(e.target.value)}/> <br/> <br/>

        <button onClick={ cadastrarUsuario }>Cadastrar</button>
        <button onClick={ fazerLogin }>Fazer Login</button>
        <button onClick={ logout }>Sair da conta</button>
  
      </div>

        { Object.keys(user).length > 0 && (
            <div> 
                <strong>olá</strong> {user.nome} <br/>
                <strong>cargo: </strong> {user.cargo} <br/><strong>email: </strong> {user.email} <br/><strong>status: </strong> {user.status ? 'ativo' : 'desativado'} <br/>
            </div>
        )}


      
    </div>
  );
}

export default AuthComBD;
