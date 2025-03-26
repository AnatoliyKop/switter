import React, {useContext} from 'react';
import {TwitterContext} from "../utils/context.js";




const Avatar = ({size}) => {
    const {user,setUser} = useContext(TwitterContext)

    const changeAvatar= ()=>{
        const newAvatar=prompt("Enter new avatar name")
    {setUser({ ...user,avatar:`https://gravatar.com/avatar/000?d=${newAvatar}`})}



    }
    return (
            <img onClick={changeAvatar} className={`user-avatar ${size|| ""}`} src={user.avatar} alt={user.name}/>

    );
};

export default Avatar;