import React, { useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import CartItem from '../components/CartItem';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  // Calculate totals using useMemo for performance
  const { totalPrice, totalItems } = useMemo(() => {
    return {
      totalPrice: cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
      totalItems: cartItems.reduce((sum, item) => sum + item.quantity, 0),
    };
  }, [cartItems]);

  const handleClearCart = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-24">
            <div className="text-8xl mb-6 opacity-30">🛒</div>
            <h1 className="text-5xl font-black text-gray-900 mb-4">Cart is Empty</h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Your shopping cart is waiting for something special. Explore our premium collection now!
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-10 rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <span>Start Shopping</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-black text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-lg text-gray-600">
            {totalItems} item{totalItems !== 1 ? 's' : ''} • ${totalPrice.toFixed(2)}
          </p>
        </div>

        {/* Cart Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-24 border border-gray-100">
              <h2 className="text-2xl font-black text-gray-900 mb-8">Order Summary</h2>

              {/* Cart Totals */}
              <div className="space-y-4 mb-8 py-6 border-y border-gray-200">
                <div className="flex justify-between items-center text-gray-700">
                  <span className="font-medium">Subtotal:</span>
                  <span className="font-bold">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-gray-700">
                  <span className="font-medium">Shipping:</span>
                  <span className="font-bold text-green-600">Free</span>
                </div>
                <div className="flex justify-between items-center text-gray-700">
                  <span className="font-medium">Tax (10%):</span>
                  <span className="font-bold">${(totalPrice * 0.1).toFixed(2)}</span>
                </div>
              </div>

              {/* Total */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total:</span>
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    ${(totalPrice * 1.1).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mb-6">
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/30 text-white font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Proceed to Checkout
                </button>
                <Link
                  to="/shop"
                  className="block text-center bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3 rounded-xl transition duration-300"
                >
                  Continue Shopping
                </Link>
              </div>

              {/* Clear Cart Button */}
              <button
                onClick={handleClearCart}
                className="w-full border-2 border-red-500 text-red-500 hover:bg-red-50 font-bold py-2 rounded-xl transition duration-300"
              >
                Clear Cart
              </button>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Free shipping on all orders</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>30-day returns policy</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Secure checkout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
