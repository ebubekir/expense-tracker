import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client'; 

import { Provider } from './context/context';
import App from './App';
import './index.css';
import app_id from './app_id';
ReactDOM.render(
        <SpeechProvider appId={app_id} language="en-US">
                <Provider>
                        <App />
                </Provider>
        </SpeechProvider>,
        document.getElementById('root')
);
