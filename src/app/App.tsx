import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminMessage from './components/PasswordPage';
import InvitationPage from './components/InvitationPage';
import PartyTimePage from './components/PartyTimePage';
import StyleGuidePage from './components/StyleGuidePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PartyTimePage variant="c" />} />
      {/* <Route path="/invite/:id" element={<InvitationPage />} /> */}
      {/* <Route path="/party-time" element={<PartyTimePage />} />
      <Route path="/party-time/a" element={<PartyTimePage variant="a" />} />
      <Route path="/party-time/b" element={<PartyTimePage variant="b" />} />
      <Route path="/party-time/c" element={<PartyTimePage variant="c" />} />
      <Route path="/thank-you" element={<PartyTimePage variant="c" />} /> */}
      {/* <Route path="/styleguide" element={<StyleGuidePage />} /> */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}