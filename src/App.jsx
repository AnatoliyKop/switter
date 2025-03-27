import {useState} from 'react'
import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {TwitterContext} from "./utils/context.js";

function App() {
    const [user, setUser] = useState({
        name: "Monster ",
        avatar: 'https://gravatar.com/avatar/000?d=mp'
    });
    const changeName = (newName) => {
        setUser(prevState => ({...prevState, name: newName || prevState.name}));
    }

    const changeAvatar = url => {

        setUser(prevState => ({...prevState, avatar: url || prevState.avatar}))

    }

    const [stats, setStats] = useState({
        followers: 0,
        following: 0
    })

    const incrementFollowers = () => {
        setStats(prevState => ({...prevState, followers: prevState.followers + 1}))
    }
    const decrementFollowers = () => {
        setStats(prevState => ({...prevState, followers: prevState.followers - 1 < 0 ? 0 : prevState.followers - 1}))
    }

    // ===============================================================
    const incrementFollowing = () => {
        setStats(prevState => ({...prevState, following: prevState.following + 1}))
    }
    const decrementFollowing = () => {
        setStats(prevState => ({...prevState, following: prevState.following - 1 < 0 ? 0 : prevState.following - 1}))
    }

    return (
        <div className={"app"}>
            <TwitterContext.Provider value={{
                user, stats, setUser, changeAvatar, changeName,
                incrementFollowing, incrementFollowers
                , decrementFollowing, decrementFollowers
            }}>
                <Navigation/>
                <Body/>
            </TwitterContext.Provider>
        </div>
    )
}

export default App
