import React, { useState } from 'react';
import AuthSelection from '../components/Login-Register/AuthSelection';
import LoginForm from '../components/Login-Register/LoginForm';
import RegisterForm from '../components/Login-Register/RegisterForm';
import '../components/Login-Register/Auth.css';

const AuthPage = () => {
  const [activeForm, setActiveForm] = useState('choice'); // choice | login | register
  const [loginRole, setLoginRole] = useState('');

  const showLoginForm = (role) => {
    setLoginRole(role);
    setActiveForm('login');
  };

  return (
    <div className="main-login">
      <h1 id="title">Welcome to Dry Panda</h1>

      {activeForm === 'choice' && (
        <AuthSelection
          onLoginClick={showLoginForm}
          onRegisterClick={() => setActiveForm('register')}
        />
      )}

      {activeForm === 'login' && <LoginForm role={loginRole} />}
      {activeForm === 'register' && <RegisterForm />}
    </div>
  );
};

export default AuthPage;
