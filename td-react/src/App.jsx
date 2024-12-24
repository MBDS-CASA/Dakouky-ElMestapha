import { useState } from 'react'
import  NotesComponent from './components/NotesComponent';
import  StudentsComponent from './components/StudentsComponent';
import  SubjectsComponent from './components/SubjectsComponent';
import  AboutComponent  from './components/AboutComponent';
import data from './data.json';
import './styles.css';
import { Container, Paper } from '@mui/material';

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
  const now = new Date();
  const day = now.toLocaleDateString('fr-FR', { weekday: 'long' });
  const month = now.toLocaleDateString('fr-FR', { month: 'long' });
  const year = now.getFullYear();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  return (
    <main style={{ textAlign: 'center', margin: '20px' }}>
      <p>Bonjour, on est le {day}, {month}, {year} et il est {hours}:{minutes}:{seconds}</p>
    </main>
  );
}

function Footer({  }) {
  const year = new Date().getFullYear();
 let nom ="Dakouky"
 let prenom = "El Mestapha"
  return (
    <footer style={{ textAlign: 'center', padding: '20px', position: 'fixed', bottom: '0', width: '100%' }}>
      <p>© {year} - {prenom} {nom}, Tous droits réservés.</p>
    </footer>
  );
}

function App() {
  const [activeMenu, setActiveMenu] = useState('Notes');

  const menuItems = [
    { name: 'Notes', component: <NotesComponent data={data} /> },
    { name: 'Étudiants', component: <StudentsComponent data={data} /> },
    { name: 'Matières', component: <SubjectsComponent data={data} /> },
    { name: 'À propos', component: <AboutComponent /> },
  ];

  const getComponent = () => {
    const activeItem = menuItems.find((item) => item.name === activeMenu);
    return activeItem ? activeItem.component : null;
  };

  return (
    <Container maxWidth={false} style={{ paddingBottom: '60px' }}>
      <Header />
      <MainContent />
      
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => setActiveMenu(item.name)}
                style={{ fontWeight: activeMenu === item.name ? 'bold' : 'normal' }}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        {getComponent()}
      </main>

      <Footer />
    </Container>
    
  );
}

export default App;