// src/components/UserRegistrationForm.tsx
import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(createUserInput: $input) {
      id
      username
      email
    }
  }
`;

const UserRegistrationForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createUser({ variables: { input: { username, email, password } } });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
            </div>
            <button type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
            </button>
            {error && <p>Error: {error.message}</p>}
            {data && <p>Success! User {data.createUser.username} registered.</p>}
        </form>
    );
};

export default UserRegistrationForm;
