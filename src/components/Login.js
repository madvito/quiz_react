import React,{useState, useContext} from 'react';
import useForm from '../hooks/useForm';
import {FormContext} from '../context/Formcontext';
import {Redirect} from 'react-router-dom';
import validaRut from '../helpers/validaRut';

const Login = () => {
    const [loginData, setLoginData] = useForm({});
    const [error, setError] = useState('');
    const {formData,setFormData} = useContext(FormContext);

    console.log('logincontext',formData);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!loginData.userName){
            setError('Ingresar Nombre');
        }else if(!loginData.rut){
            setError('Ingresar Rut');
        }else if(!validaRut(loginData.rut)){
            setError('Ingresar Rut Valido');
        }else{
            setFormData({...formData, user:{userName: loginData.userName, rut: loginData.rut}});
        }
        
    }
    if (formData.user?.userName && formData.user?.rut){
        return(<Redirect to={`/profile/${formData.user.rut}`} />)
    }
    return (
        <main>
            <form>
                <h1>LOGIN</h1>
                <div className='form-item'>
                    <label className='form-label'>Nombre de Usuario</label>
                    <input type='text' className="question-input" placeholder="Nombre de usuario" name="userName" onChange={setLoginData}/>
                </div>
                <div className='form-item'>
                    <label className='form-label'>Rut</label>
                    <input type='text' className="answer-input" placeholder="Rut" name="rut" onChange={setLoginData}/>
                </div>
                <div className='submit-div'>
                <input type="submit" value="Enviar" onClick={handleSubmit}/>
                {error&&<label>{error}</label>}
                </div>
                
            </form>
        </main>
    )
}

export default Login
