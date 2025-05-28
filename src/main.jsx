import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx'
//import { StudentManagement } from './studentmanagement.jsx'
//import { LibraryManagement } from './LibraryManagement.jsx'
//import { B2B } from './B2B.jsx'
import BasicDemo from './Basicdemo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/*  <App />  */}
    {/* <B2B /> */}
<BasicDemo/>

  </StrictMode>,
)
