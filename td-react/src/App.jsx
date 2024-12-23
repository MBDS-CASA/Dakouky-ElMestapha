import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data.json';
import './styles.css';




const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { name: 'Notes', icon: '📝' },
    { name: 'Etudiants', icon: '👥' },
    { name: 'Matières', icon: '📚' },
    { name: 'A propos', icon: 'ℹ️' }
  ];

  const handleClick = (item) => {
    alert(`Vous avez cliqué sur ${item}`);
    setIsOpen(false); 
  };

  return (
    <>
      <div className="nav-container">
        <button 
          className={`hamburger-button ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <ul className="menu-list">
            {menuItems.map((item) => (
              <li key={item.name} className="menu-item">
                <button 
                  onClick={() => handleClick(item.name)}
                  className="menu-button"
                >
                  <span className="menu-icon">{item.icon}</span>
                  <span className="menu-text">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

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




function getRandomItem(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

function RandomItem() {
  const [item, setItem] = useState(getRandomItem(data));

  const changeItem = () => {
    setItem(getRandomItem(data));
  };

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{item.course}</h5>
          <p className="card-text">
            {item.student.firstname} {item.student.lastname} - {item.grade}%
          </p>
        </div>
      </div>
      <button className="btn-random" onClick={changeItem}>
        Afficher un nouvel élément
      </button>
    </div>
  );
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>


      <NavMenu />

        <Header />  

        <MainContent />

        <RandomItem />

        <Footer />
       
      </div>
      
    </>
  )
}

export default App
