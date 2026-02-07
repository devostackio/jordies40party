import { Routes, Route, Navigate } from 'react-router-dom';
import AdminMessage from './components/PasswordPage';
import InvitationPage from './components/InvitationPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminMessage />} />
      <Route path="/:id" element={<InvitationPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}