import React from 'react';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import theme from './theme/theme';
import DashboardLayout from './components/Layout/DashboardLayout';
import Overview from './pages/Dashboard/Overview';
import MentorNetwork from './pages/Dashboard/MentorNetwork';
import ProgramEffectiveness from './pages/Dashboard/ProgramEffectiveness';
import FundingTracker from './pages/Dashboard/FundingTracker';
import SuccessAnalytics from './pages/Dashboard/SuccessAnalytics';
import Settings from './pages/Settings/Settings';
import { Profiler } from 'react';
import PageBelow from './pages/PageBelow';
import ReviewPage from '../src/pages/Pages1/ReviewPage';



function App() {
  return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Overview />} />
            <Route path="/dashboard" element={<Overview />} />
            <Route path="/review" element={<PageBelow />} />
            <Route path="/reviewpage" element={<ReviewPage />} />
            <Route path="/mentors" element={<MentorNetwork />} />
            <Route path="/program" element={<ProgramEffectiveness />} />
            <Route path="/funding" element={<FundingTracker />} />
            <Route path="/success" element={<SuccessAnalytics />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          </Routes>
      </Router>
    </ThemeProvider>
  );
}




export default App;
