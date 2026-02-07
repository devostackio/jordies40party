export default function AdminMessage() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white flex items-center justify-center px-4">
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl max-w-md w-full">
        <h1 className="text-3xl text-center mb-6 text-slate-800">Access Denied</h1>
        <p className="text-center text-slate-600">Please use your personal invite link or contact your administrator</p>
      </div>
    </div>
  );
}