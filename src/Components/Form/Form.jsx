import React, { useState } from 'react';
import './form.scss'

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  checkbox: false
};

const Form = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: checked
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setFormState(initialFormState);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (formState.name.trim() === '') {
      errors.name = 'Введите имя';
    }

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formState.email)) {
      errors.email = 'Введите корректный email';
    }

    if (!/^\d{10}$/.test(formState.phone)) {
      errors.phone = 'Введите 10-значный номер телефона';
    }

    if (formState.password.trim() === '') {
      errors.password = 'Введите пароль';
    }

    if (formState.confirmPassword.trim() === '') {
      errors.confirmPassword = 'Введите подтверждение пароля';
    } else if (formState.confirmPassword !== formState.password) {
      errors.confirmPassword = 'Подтверждение пароля не совпадает';
    }

    if (!formState.checkbox) {
      errors.checkbox = 'Подтвердите, что вы согласны с условиями';
    }

    return errors;
  };

  return (
    <div className='form_content'>
        <form onSubmit={handleSubmit} className='form'>
        <h1>Форма с валидацией</h1>
        <div className='input_content'>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder='Имя'
          />
          {errors.name && <span>{errors.name}</span>}
        </div>

        <div className='input_content'>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            placeholder='Почта'
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div className='input_content'>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            placeholder='Телефон'
          />
          {errors.phone && <span>{errors.phone}</span>}
        </div>

        <div className='input_content'>
          <input
            type="password"
            id="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
            placeholder='Пароль'
          />
          {errors.password && <span>{errors.password}</span>}
        </div>

        <div className='input_content'>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formState.confirmPassword}
            onChange={handleChange}
            placeholder='Подтверджение пароля'
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>

        <div className='checkbox_content'>
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              checked={formState.checkbox}
              onChange={handleCheckboxChange}
            />
            &nbsp;&nbsp;Согласие на обработку персональных данных
          </label>
          {errors.checkbox && <span>{errors.checkbox}</span>}
        </div>

        <div className='form_button'>
          <button type="submit" className='button'>Применить</button>
        </div>
    </form>
    </div>
  );
};

export default Form;