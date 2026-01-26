import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import theme from './theme/theme';
import DashboardLayout from './components/Layout/DashboardLayout';
import Overview from './pages/Dashboard/Overview';
import MentorNetwork from './pages/Dashboard/MentorNetwork';
import ProgramEffectiveness from './pages/Dashboard/ProgramEffectiveness';
import FundingTracker from './pages/Dashboard/FundingTracker';
import SuccessAnalytics from './pages/Dashboard/SuccessAnalytics';
import Settings from './pages/Settings/Settings';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Overview />} />
            <Route path="/mentors" element={<MentorNetwork />} />
            <Route path="/program" element={<ProgramEffectiveness />} />
            <Route path="/funding" element={<FundingTracker />} />
            <Route path="/success" element={<SuccessAnalytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </DashboardLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
