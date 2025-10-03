export default function TestStylingPage() {
  return (
    <div className="min-h-screen bg-primary-cream p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-navy mb-6">
          Styling Test Page
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-serif text-primary-navy mb-4">
            Test Card with Styling
          </h2>
          <p className="text-gray-600 mb-4">
            This page tests if Tailwind CSS classes are being applied correctly.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-primary-gold text-white p-4 rounded">
              <h3 className="font-bold">Gold Card</h3>
              <p className="text-sm">Primary gold color</p>
            </div>
            
            <div className="bg-primary-navy text-white p-4 rounded">
              <h3 className="font-bold">Navy Card</h3>
              <p className="text-sm">Primary navy color</p>
            </div>
            
            <div className="bg-amber-100 text-amber-800 p-4 rounded">
              <h3 className="font-bold">Amber Card</h3>
              <p className="text-sm">Standard amber color</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-amber-100 to-amber-200 p-6 rounded-lg">
          <h3 className="text-xl font-serif text-primary-navy mb-3">
            Gradient Background Test
          </h3>
          <p className="text-gray-700">
            This should show a gradient background from amber-100 to amber-200.
          </p>
        </div>
      </div>
    </div>
  )
}
