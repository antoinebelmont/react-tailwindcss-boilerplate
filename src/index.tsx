import * as React from 'react';
import {render} from 'react-dom';

import {HolaMundo} from './components/App';
import Header from './components/ui/Header';
import Register from './components/ui/Register';
import HomeResume from "./components/ui/HomeResume";
import "./styles.css"

declare const document: any;

render(
    <section id="main" className="p-0">
        <Header />
        <Register />
        <HomeResume />
    </section>,
    document.getElementById('app')
)
