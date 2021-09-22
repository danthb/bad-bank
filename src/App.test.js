import React from 'react';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AuthProvider from './Components/Auth/AuthProvider';
import { AuthContext } from './Components/Auth/AuthProvider';
import App from './App';
import Login from './Components/Login/login'
import Balance from './Components/Balance/balance'

describe('test of rendering of the App', () => {
    test('Rendering', () => {
        const { getByText} = render( <App />);
        getByText('loading...')
    });

    test('Login', () => {
        const mockHandler = jest.fn();
        const component = render(<AuthProvider><Login /></AuthProvider>);
        const balanceComponent = render(<AuthProvider><Balance/></AuthProvider>)
        const inputE = component.getByPlaceholderText('Enter email');
        userEvent.type(inputE, 'abel@espe.edu');
        const inputP = component.getByPlaceholderText('Enter password');
        userEvent.type(inputP, 'secret123');
        const button = screen.getByTitle('btn');
        userEvent.click(button);
        balanceComponent.getByText('Welcome');
    });
   
})

