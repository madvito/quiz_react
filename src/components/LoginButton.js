import React from 'react';
import {Link} from 'react-router-dom';

const LoginButton = ({user}) => {
    if (!(user.rut)){
        return(
            <Link to='/login'>
                    Ingresar
            </Link>
        )    
    }
    return (
        <Link to={`/profile/${user.userName}`}>
                    {user.userName}
        </Link>
        
    )
}

export default LoginButton
