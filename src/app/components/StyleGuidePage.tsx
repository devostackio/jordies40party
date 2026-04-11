import { Download } from 'lucide-react';

const assets = [
  {
    name: 'Circle Logo',
    file: 'G40-CircleLogo.PNG',
    type: 'image',
    description: 'Round badge-style logo with circle border',
  },
  {
    name: 'Logo Only',
    file: 'G40-LogoOnly.PNG',
    type: 'image',
    description: 'Logo without background',
  },
  {
    name: 'Wide Banner',
    file: 'G40-Wide.PNG',
    type: 'image',
    description: 'Horizontal banner format',
  },
  {
    name: 'Style Guide',
    file: 'StyleGuide.pdf',
    type: 'pdf',
    description: 'Complete design guidelines and specifications',
  },
  
];

export default function StyleGuidePage() {
  const handleDownload = (filename: string) => {
    const link = document.createElement('a');
    link.href = `/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const images = assets.filter((a) => a.type === 'image');
  const pdfs = assets.filter((a) => a.type === 'pdf');

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-teal-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Party Assets</h1>
          <p className="text-gray-600">
            Download all images, logos, and guidelines for creating products, designs, and materials for the party.
          </p>
        </div>

        {/* Image Assets */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Logo & Image Assets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((asset) => (
              <div
                key={asset.file}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square bg-gray-100 p-4 flex items-center justify-center">
                  <img
                    src={`/${asset.file}`}
                    alt={asset.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{asset.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{asset.description}</p>
                  <button
                    onClick={() => handleDownload(asset.file)}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-medium py-2 px-4 rounded transition-all"
                  >
                    <Download size={16} />
                    Download PNG
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PDF Assets */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Documents</h2>
          <div className="space-y-4">
            {pdfs.map((asset) => (
              <div
                key={asset.file}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex items-center justify-between"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{asset.name}</h3>
                  <p className="text-sm text-gray-600">{asset.description}</p>
                </div>
                <button
                  onClick={() => handleDownload(asset.file)}
                  className="flex items-center gap-2 bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white font-medium py-2 px-6 rounded transition-all whitespace-nowrap ml-4"
                >
                  <Download size={16} />
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
