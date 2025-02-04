import React from 'react';
import { ArrowRight, Plane, Shield, Briefcase } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full">
              <Plane className="w-8 h-8 text-blue-600" />
            </div>
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full">
              <Briefcase className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            We've changed its name!
          </h1>
          <p className="text-2xl sm:text-3xl text-red-500 mb-2">
            Non-Air Recovery Hub (NARH)
          </p>
          <div className="text-xl sm:text-2xl text-gray-500 mb-6">is now</div>
          <a
            href="https://recovery-care-center.netlify.app"
            className="text-4xl sm:text-5xl font-bold text-blue-600 mb-4 hover:text-blue-700 transition-colors duration-200 inline-block"
          >
            Recovery Care Center (RCC)
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 max-w-2xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            We're excited to announce that we've changed the name of our initiative to better reflect our comprehensive approach to recovery and customer care. Please bookmark the new URL : <a href="https://recovery-care-center.netlify.app" className="text-blue-500 underline">https://recovery-care-center.netlify.app</a>
          </p>
        </div>

        <div className="text-center">
          <a
            href="https://recovery-care-center.netlify.app"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Visit the new website
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <p className="mt-4 text-sm text-gray-500">
            You will be redirected to recovery-care-center.netlify.app
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;