import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";

function App() {
    const [user, setUser] = useState({
        name: "Monster ",
        avatar:'https://gravatar.com/avatar/000?d=mp'
    });
    const [stats, setStats] = useState({
        followers:10,
        following: 20
    })

  return (
    <div className={"app"}>
      <Navigation user={user}  />
        <Body user={user} stats={stats} />
    </div>
  )
}

export default App
