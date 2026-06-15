import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../features/cart/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleDecrement = useCallback(() => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  }, [dispatch, item.id, item.quantity]);

  const handleIncrement = useCallback(() => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  }, [dispatch, item.id, item.quantity]);

  const handleQuantityChange = useCallback((e) => {
    const newQuantity = parseInt(e.target.value) || 1;
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  }, [dispatch, item.id]);

  const handleRemove = useCallback(() => {
    dispatch(removeFromCart(item.id));
  }, [dispatch, item.id]);

  return (
    <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm hover:shadow-lg border border-gray-200 transition-all duration-300 hover:border-purple-200">
      {/* Product Image and Info */}
      <div className="flex items-center flex-1">
        <div className="w-24 h-24 bg-gray-100 rounded-lg p-3 mr-6 flex items-center justify-center flex-shrink-0">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 line-clamp-2 text-lg mb-2">{item.title}</h3>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold text-lg">
            ${item.price.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Quantity Control */}
      <div className="flex items-center gap-2 mx-8 bg-gray-100 rounded-lg p-2">
        <button
          onClick={handleDecrement}
          className="bg-white hover:bg-purple-100 text-purple-600 w-8 h-8 rounded-md font-bold transition-all duration-200 flex items-center justify-center"
        >
          −
        </button>
        <input
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="w-10 text-center bg-transparent font-bold text-gray-900 border-none outline-none"
          min="1"
        />
        <button
          onClick={handleIncrement}
          className="bg-white hover:bg-purple-100 text-purple-600 w-8 h-8 rounded-md font-bold transition-all duration-200 flex items-center justify-center"
        >
          +
        </button>
      </div>

      {/* Subtotal */}
      <div className="text-right mx-8 min-w-max">
        <p className="text-2xl font-black text-gray-900">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <p className="text-xs text-gray-500 mt-1">{item.quantity} × ${item.price.toFixed(2)}</p>
      </div>

      {/* Remove Button */}
      <button
        onClick={handleRemove}
        className="text-red-500 hover:bg-red-50 p-3 rounded-lg transition-all duration-200 transform hover:scale-110"
        title="Remove from cart"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
