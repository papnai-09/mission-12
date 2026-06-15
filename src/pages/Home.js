import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Lightning Fast',
    description: 'Same-day delivery on selected items. Get what you need, when you need it.',
    cardClass: 'from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border-blue-200',
    iconClass: 'bg-blue-500',
    path: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Best Prices',
    description: 'Unbeatable deals and exclusive discounts. Smart shopping starts here.',
    cardClass: 'from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 border-purple-200',
    iconClass: 'bg-purple-500',
    path: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Guaranteed Quality',
    description: 'Authentic products with 30-day money-back guarantee. Shop with confidence.',
    cardClass: 'from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 border-pink-200',
    iconClass: 'bg-pink-500',
    path: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
];

const ArrowIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const FeatureCard = ({ feature }) => (
  <div className={`group p-8 rounded-2xl bg-gradient-to-br ${feature.cardClass} transition-all duration-300 border`}>
    <div className={`w-14 h-14 ${feature.iconClass} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.path} />
      </svg>
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
    <p className="text-gray-700">{feature.description}</p>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-32 sm:py-48">
          <div className="text-center">
            <h1 className="text-6xl sm:text-7xl font-black mb-6 tracking-tight">
              Elevate Your Shopping{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Experience
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Curated collections of quality products delivered to your doorstep. Experience shopping like never before.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <span>Shop Now</span>
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ShopHub?</h2>
          <p className="text-lg text-gray-600">Experience the future of online shopping</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </section>

      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to explore?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Browse thousands of premium products handpicked just for you
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold py-4 px-10 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <span>Start Exploring</span>
            <ArrowIcon />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
