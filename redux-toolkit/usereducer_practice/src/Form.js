import React from 'react';
import { useReducer } from 'react';
import { formReducer, INITIAL_STATE } from './reducer/formReducer';

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE)

    const handleChange = (e) =>{
        dispatch({type: "CHANGE_INPUT", payload:{name:e.target.name, value:e.target.value}})
    }

    console.log(state)
  return (
    <div className='form-component'>
      <form>
        <div>
        <label htmlFor='firstName'>Full Name</label>
        <input 
          type='text'
          name='firstName'
          placeholder='Enter full name'
          onChange={handleChange}
        />
        </div>

        <div>
        <label htmlFor='lastName'>Full Name</label>
        <input 
          type='text'
          name='lastName'
          placeholder='Enter full name'
          onChange={handleChange}
        />
        </div>

        <div>
            <label htmlFor='selectedStatus'>Marital status</label>
            <select name='selectedStatus' onChange={handleChange}>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
            </select>
        </div>

        <div className='exp'>
            <button type='button' onClick={() => dispatch({type: 'INCREASE'})}>+</button>
            <h2>Years of Experience: {state.exp} </h2>
            <button type='button' onClick={() => dispatch({type: 'DECREASE'})}>-</button>
        </div>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form;
