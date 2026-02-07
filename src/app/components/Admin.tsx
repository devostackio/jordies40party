import { useState } from 'react';

export default function Admin() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleGenerateInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult('');

    try {
      const response = await fetch('/api/generate-invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult(`✅ Invite sent to ${email}! Token: ${data.token}`);
        setEmail('');
      } else {
        setError(data.error || 'Failed to generate invite');
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white flex items-center justify-center px-4">
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl max-w-md w-full">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-slate-800">Admin Panel</h1>
          <p className="text-slate-600">Generate invitation links</p>
        </div>

        <form onSubmit={handleGenerateInvite}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Guest Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="guest@example.com"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 px-4 rounded-md hover:shadow-lg transition-all disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Generate & Send Invite'}
          </button>
        </form>

        {result && (
          <p className="text-green-600 text-sm mt-4 text-center">{result}</p>
        )}

        {error && (
          <p className="text-red-500 text-sm mt-4 text-center">{error}</p>
        )}

        <div className="mt-6 text-center">
          <p className="text-xs text-slate-500">
            This admin panel should be password-protected in production
          </p>
        </div>
      </div>
    </div>
  );
}