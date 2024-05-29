// src/App.tsx
import React from 'react';
import UserCreateForm from './components/Signup/UserCreateForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>User Create Form</h1>
      <UserCreateForm />
    </div>
  );
};

export default App;
