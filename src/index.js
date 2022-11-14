import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import "swiper/css";
import "swiper/css/navigation";
import './global.css'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <App />
);