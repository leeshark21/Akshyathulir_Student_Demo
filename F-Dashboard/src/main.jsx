
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import { MentorProvider } from './components/Dashboard/Mentor/context/mentorContext.jsx'

createRoot(document.getElementById('root')).render(

 <MentorProvider>
    <App />
 </MentorProvider>
 
 
   
   
 
)
