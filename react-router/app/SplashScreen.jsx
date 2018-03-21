import React from 'react';
import { Link } from 'react-router';

export default class SplashScreen extends React.Component {
    
    render() {
        return (
            <Link to="todo-list">Welcome, lets add some Todos</Link>
        );
    }
}