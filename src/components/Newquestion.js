import React,{useState} from 'react'
import Response from './Response';
import useForm from '../hooks/useForm'

const Newquestion = () => {
    // const [questionData, setQuestionData] = useState({});
    const [resp, setResp] = useState({});

    const [formData, setFormData] = useForm({})

    // const handleInput = (e) => {
    //     setQuestionData({...questionData, [e.target.name] : e.target.value});
    //     console.log(questionData);
    // }

    const handleSubmit =(e)=>{
        e.preventDefault();
        // const {question, answer1, answer2, answer3, answer4, correctAnswer} = questionData
        const {question, answer1, answer2, answer3, answer4, correctAnswer} = formData;

        let preparedData = {
            
            question,
            answers : [answer1, answer2, answer3, answer4],
            correctAnswer: parseInt(correctAnswer) - 1,
            category: '6065e53f1551271668948c1a'
        }
        let fetchOptions = {
            method:'POST',
            body: JSON.stringify(preparedData),
            headers: {'Content-Type': 'application/json'}
        }
        console.log(fetchOptions);
        fetch('http://localhost:8080/api/v1/questions/new',fetchOptions)
        .then(resp => resp.json())
        .then(jsonResponse=>{
            console.log(jsonResponse);
            setResp({status: '200', msj: 'Pregunta agregada correctamente'})
        })
        
    }
    return (
        <form>
            <div className='form-item'>
                <label className='form-label'>Pregunta</label>
                <input type='text' className="question-input" placeholder="Ingresar Pregunta" name="question" onChange={setFormData}/>
            </div>
            <div className='form-item'>
                <label className='form-label'>Primera Opción</label>
                <input type='text' className="answer-input" placeholder="Respuesta" name="answer1" onChange={setFormData}/>
            </div>
            <div className='form-item'>
                <label className='form-label'>Segunda Opción</label>
                <input type='text' className="answer-input" placeholder="Respuesta" name="answer2" onChange={setFormData}/>
            </div>
            
            <div className='form-item'>
                <label className='form-label'>Tercera Opción</label>
                <input type='text' className="answer-input" placeholder="Respuesta" name="answer3" onChange={setFormData}/>
            </div>
            <div className='form-item'>
                <label className='form-label'>Cuarta Opción</label>
                <input type='text' className="answer-input" placeholder="Respuesta" name="answer4" onChange={setFormData}/>
            </div>
            <div className='form-item'>
                <label className='form-label'>Respuesta Correcta</label>
                <input type='text' className="answer-input" placeholder="Numero de Respuesta Correcta" name="correctAnswer" onChange={setFormData}/>
            </div>
            
            <input type="submit" value="Enviar" onClick={handleSubmit}/>
            {
                resp && <Response resp={resp}/>
            }
        </form>
    )
}

export default Newquestion
