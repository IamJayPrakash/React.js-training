import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Title from './title';
// import Content from './content';
import App from './components/App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container card p-4 m-3 heading'>
      <App />
    </div>

  </React.StrictMode>
);

