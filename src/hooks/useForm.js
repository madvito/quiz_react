import {useState} from 'react';

const useForm = (initialState = {}) => {
    const [form, setForm] = useState(initialState);

    const reset = () => {
        setForm(initialState);
    }

    const handleChange =({target}) =>{
        setForm({...form, [target.name]: target.value});
    }
    
    return [form, handleChange, reset];
}

export default useForm;