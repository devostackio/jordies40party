import { useEffect } from 'react';

export default function StyleGuidePage() {
  useEffect(() => {
    const downloadStyleGuide = async () => {
      try {
        const response = await fetch('/StyleGuide.pdf');
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'StyleGuide.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } catch (error) {
        console.error('Failed to download styleguide:', error);
      }
    };

    downloadStyleGuide();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Downloading styleguide...</p>
    </div>
  );
}
