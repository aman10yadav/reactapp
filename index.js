import React from 'react'
import  { createRoot }  from 'react-dom/client';
// import ReactDom from 'react-dom';
import App from './src/app.js'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);

// ReactDom.render(
//     <React.StrictMode>
//         <App/>
//     </React.StrictMode>,
//     document.getElementById('root')
// );