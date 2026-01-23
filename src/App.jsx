import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import DashboardLayout from './layouts/DashboardLayout';

// Dashboard Pages
import Dashboard from './pages/Dashboard/Dashboard';
import Overview from './pages/Dashboard/Overview';
import DailyStats from './pages/Dashboard/DailyStats';
import Notification from './pages/Dashboard/Notification';
import QuickActions from './pages/Dashboard/QuickActions';

// Startup Pages
import StartupMenu from './pages/Startup/StartupMenu/StartupMenu';
import AllStartups from './pages/Startup/All Startups/AllStartups';
import MyStartup from './pages/Startup/My Startup/MyStartup';
import ApplyIncubation from './pages/Startup/Apply for Incubation/ApplyIncubation';
import ApplicationStatus from './pages/Startup/ApplicationStatus/ApplicationStatus';
import StartupProfile from './pages/Startup/StartupProfiles/StartupProfile';

// Other Pages
import Settings from './pages/settings/settings';
import Reports from './components/FundingComponents/Reports'; // Moved folder
import FundingOverview from './pages/Funding/FundingOverview';
import Programs from './pages/Programs/Program'; // Keep filename for now
import Mentorship from './pages/Mentorship/Mentorship';
import AddMentor from './pages/Mentorship/AddMentor';
import Assignmentor from './pages/Mentorship/Assignmentor';
import MentorSchedule from './pages/Mentorship/MentorSchedule';
import UploadResource from './pages/Mentorship/UploadResource';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          {/* Redirect root to dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* Main Layout matches all these routes */}
          <Route element={<DashboardLayout />}>

            {/* Dashboard */}
            <Route path="/dashboard">
              <Route index element={<Dashboard />} />
              <Route path="overview" element={<Overview />} />
              <Route path="daily-stats" element={<DailyStats />} />
              <Route path="notification" element={<Notification />} />
              <Route path="quick-action" element={<QuickActions />} />
            </Route>

            {/* Startups */}
            <Route path="/startups">
              <Route index element={<StartupMenu />} />
              <Route path="menu" element={<StartupMenu />} />
              <Route path="all" element={<AllStartups />} />
              <Route path="my-startup" element={<MyStartup />} />
              <Route path="apply-incubation" element={<ApplyIncubation />} />
              <Route path="status" element={<ApplicationStatus />} />
              <Route path="profile" element={<StartupProfile />} />
            </Route>

            {/* Funding */}
            <Route path="/funding" element={<FundingOverview />} />

            {/* Programs */}
            <Route path="/programs" element={<Programs />} />

            {/* Mentorship */}
            <Route path="/mentorship">
              <Route index element={<Mentorship />} />
              <Route path="add-mentor" element={<AddMentor />} />
              <Route path="assign-startup" element={<Assignmentor />} />
              <Route path="schedule" element={<MentorSchedule />} />
              <Route path="resources" element={<UploadResource />} />
            </Route>

            {/* Reports */}
            <Route path="/reports" element={<Reports />} />

            {/* Settings */}
            <Route path="/settings" element={<Settings />} />

          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

