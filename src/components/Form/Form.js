import React from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import emailjs from '@emailjs/browser';
import {
  FormAgree,
  FormBtnSubmit,
  FormComponent,
  FormContainer,
  FormInput,
  FormTitle,
} from './Form.styled';
import { useState } from 'react';

function Form({ mobile }) {
  const [nameValue, setNameValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const templateParams = {
    name: nameValue,
    phone: phoneValue,
    email: emailValue,
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_zuei9b8',
      'template_a0i1b9h',
      templateParams,
      'ox-GwJLvsN-aiXEWe'
    );
    setNameValue('');
    setPhoneValue('');
    setEmailValue('');
    alert('Отправлено!');
  };
  return (
    <FormContainer mobile={mobile}>
      <FormTitle>
        Запишитесь <span style={{ color: '#FF3459' }}>бесплатно</span> и
        получите подарок
      </FormTitle>
      <FormComponent onSubmit={sendEmail}>
        <FormInput
          required
          type="text"
          name="name"
          minLength="3"
          placeholder="Ваше имя и фамилия"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />
        <PhoneInput
          required
          type="tel"
          name="phone"
          placeholder="Телефон (XX-XXX-XXXX)"
          value={phoneValue}
          pattern="[0-9]{9}"
          onChange={(e) => setPhoneValue(e)}
          defaultCountry="UA"
        />
        <FormInput
          required
          type="email"
          name="email"
          placeholder="Ваш email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
        <FormBtnSubmit type="submit">Записаться бесплатно</FormBtnSubmit>
      </FormComponent>
      <FormAgree>
        Нажимая на кнопку я соглашаюсь
        <br />
        <a style={{ color: 'inherit' }} href="https://#">
          с политикой конфидециальности
        </a>
      </FormAgree>
    </FormContainer>
  );
}

export default Form;
