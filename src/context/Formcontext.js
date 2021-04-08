import React,{useState, createContext} from 'react'

export const FormContext = createContext();

const FormProvider = ({children}) => {
    const [formData, setFormData] = useState({
        user: {
            rut: '',
            userName: ''
        },
        questions: [],
        answers: []
    });

    return (
        <FormContext.Provider value={{formData, setFormData}}>
            {children}
        </FormContext.Provider>
    )
}

export default FormProvider;
