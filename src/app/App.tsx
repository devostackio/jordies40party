import { Routes, Route, Navigate } from 'react-router-dom';
import AdminMessage from './components/PasswordPage';
import InvitationPage from './components/InvitationPage';
import StyleGuidePage from './components/StyleGuidePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminMessage />} />
      <Route path="/invite/:id" element={<InvitationPage />} />
      <Route path="/styleguide" element={<StyleGuidePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}