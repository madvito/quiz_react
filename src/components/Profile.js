import React, {useEffect, useContext} from 'react';
import { Redirect } from 'react-router-dom';
import {FormContext} from '../context/Formcontext';
import { users } from '../mocap/db';




const Profile = ({match}) => {
    const {formData} = useContext(FormContext);
    
    if (formData.user.rut === ''){
        return(
            <Redirect to='/login'/>
        )
    }
    const rut = match.params.user;
    const resp = users.find((user)=> user.rut ===rut);
    console.log(resp);
    
    return (
        
        <div>
            PROFILE

            name: {resp.userName}
            <hr/>
            rut: {resp.rut}
        </div>
    )
}

export default Profile
