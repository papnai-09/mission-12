import React from 'react';

const ProductCard = ({ product, onProductClick }) => {
  return (
    <div
      onClick={() => onProductClick(product.id)}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-gray-100"
    >
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
          Sale
        </div>
      </div>
      <div className="p-6 bg-white">
        <div className="mb-3">
          <span className="inline-block text-xs font-bold text-purple-600 bg-purple-100 px-3 py-1 rounded-full uppercase tracking-wide">
            {product.category}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 line-clamp-2 mb-4 group-hover:text-purple-600 transition-colors">
          {product.title}
        </h3>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500 line-through mb-1">$99.99</div>
            <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              ${product.price.toFixed(2)}
            </div>
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75 shadow-lg hover:shadow-xl">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-600 font-medium">(128)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
