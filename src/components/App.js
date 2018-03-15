import React from 'react';
import PropTypes from 'prop-types';

import '../assets/styles/App.scss';

import Header from '../common/header/Header';
import Main from './pages/Main';


import {Container} from 'reactstrap';

const App = () => (
    <div>
        <Header/>
        <div>
            <Container>
                <Main/>
            </Container>
        </div>
    </div>
);

export default App;
