const API_BASE_URL = "https://fakestoreapi.com";

const parseResponse = async (response, fallbackMessage) => {
  if (!response.ok) {
    throw new Error(fallbackMessage);
  }

  return response.json();
};

export const getProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products`);
  return parseResponse(response, "Failed to fetch products");
};

export const getProductById = async (productId) => {
  const response = await fetch(`${API_BASE_URL}/products/${productId}`);
  return parseResponse(response, "Product not found");
};
