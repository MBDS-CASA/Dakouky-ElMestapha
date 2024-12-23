import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header() {
  return (
    <header style={{ textAlign: 'center', padding: '20px' }}>
      <img src="src\assets\logo.png" alt="Logo de la formation" style={{ height: '150px' }} />
      <h1>Introduction à React</h1>
      <h2>A la découverte des premières notions de React</h2>
    </header>
  )
}

function MainContent() {
  return (
    <main style={{ textAlign: 'center', margin: '20px' }}>
      <p>Ici, nous afficherons des informations intéressantes :)</p>
    </main>
  )
}

function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '20px', position: 'fixed', bottom: '0', width: '100%' }}>
    <p>Tous droits réservés - Dakouky El Mestapha</p>
  </footer>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <Header />  

        <MainContent />

        <Footer />
      
      </div>
      
    </>
  )
}

export default App
