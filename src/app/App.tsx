import { Routes, Route, Navigate } from 'react-router-dom';
import AdminMessage from './components/PasswordPage';
import InvitationPage from './components/InvitationPage';
import PartyTimePage from './components/PartyTimePage';
import StyleGuidePage from './components/StyleGuidePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminMessage />} />
      <Route path="/invite/:id" element={<InvitationPage />} />
      <Route path="/party-time" element={<PartyTimePage />} />
      <Route path="/styleguide" element={<StyleGuidePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}