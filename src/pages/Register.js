import React, { useState, useEffect } from 'react';
import { Logo } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

function Register() {
  const [values, setValues] = useState(initialState);

  const handleChange = (event) => {
    console.log(event.target);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            name='name'
            value={values.name}
            className='form-input'
            onChange={handleChange}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </Wrapper>
  );
}

export default Register;
