import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addToCart } from '../features/cart/cartSlice';
import { getProductById } from '../services/products';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductById(id);
        setProduct(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = useCallback(() => {
    if (!product) {
      return;
    }

    dispatch(addToCart({ product, quantity }));
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  }, [dispatch, product, quantity]);

  const handleQuantityInput = (event) => {
    const value = parseInt(event.target.value, 10) || 1;
    setQuantity(Math.max(1, value));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 font-medium">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="text-center">
          <p className="text-6xl mb-4 font-black text-red-500" aria-hidden="true">!</p>
          <p className="text-xl text-red-600 mb-6 font-semibold">{error}</p>
          <button
            type="button"
            onClick={() => navigate('/shop')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition duration-200 font-bold"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <p className="text-xl text-gray-600 font-medium">Product not found</p>
      </div>
    );
  }

  const rating = Math.round(product.rating?.rate || 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <button
          type="button"
          onClick={() => navigate('/shop')}
          className="mb-8 inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Shop
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 lg:p-12">
            <div className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-96 max-w-full object-contain"
              />
            </div>

            <div className="flex flex-col justify-between">
              <div className="mb-8">
                <span className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-transparent bg-clip-text text-purple-600 px-4 py-2 rounded-full text-sm font-bold border border-purple-200 mb-6">
                  {product.category}
                </span>
                <h1 className="text-4xl font-black text-gray-900 mb-4 leading-tight">
                  {product.title}
                </h1>

                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className={`w-5 h-5 fill-current ${
                          index < rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-700 font-semibold">
                    {product.rating?.rate || 'N/A'} / 5 ({product.rating?.count || 0} reviews)
                  </span>
                </div>
              </div>

              <div className="mb-8 pb-8 border-b border-gray-200">
                <p className="text-sm text-gray-600 mb-2 font-medium uppercase tracking-wide">Price</p>
                <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-700 leading-relaxed line-clamp-4">
                  {product.description}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label htmlFor="quantity" className="font-bold text-gray-900">
                    Quantity:
                  </label>
                  <div className="flex items-center bg-gray-100 rounded-lg p-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="bg-white hover:bg-purple-100 text-purple-600 w-8 h-8 rounded-md font-bold transition-all duration-200 flex items-center justify-center"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <input
                      id="quantity"
                      type="number"
                      value={quantity}
                      onChange={handleQuantityInput}
                      className="w-12 text-center bg-transparent font-bold text-gray-900 border-none outline-none"
                      min="1"
                    />
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="bg-white hover:bg-purple-100 text-purple-600 w-8 h-8 rounded-md font-bold transition-all duration-200 flex items-center justify-center"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`w-full py-4 font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    addedToCart
                      ? 'bg-gradient-to-r from-green-400 to-green-500 text-white shadow-lg'
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg'
                  }`}
                >
                  {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
                </button>

                <button
                  type="button"
                  onClick={() => navigate('/cart')}
                  className="w-full py-3 font-bold text-purple-600 border-2 border-purple-600 rounded-xl hover:bg-purple-50 transition-all duration-200"
                >
                  View Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
