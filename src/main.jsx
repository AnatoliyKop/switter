import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux";
import {customStore} from "./store/customStore.js";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={customStore}>
        <App/>
        </Provider>
</StrictMode>,
)
