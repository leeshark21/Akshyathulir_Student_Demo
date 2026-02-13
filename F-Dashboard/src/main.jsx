
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import { MentorProvider } from './components/Dashboard/Mentor/context/mentorContext.jsx'
import ProgramContext from './components/Dashboard/Program/ProgramContex/ProgramContext.jsx'
import FundingContex from './components/Dashboard/Funding/FundingContext/FundingContex.jsx'

createRoot(document.getElementById('root')).render(
   <FundingContex>
      <ProgramContext>
         <MentorProvider>
            <App />
         </MentorProvider>

      </ProgramContext>

   </FundingContex>







)
