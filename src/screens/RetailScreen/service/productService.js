import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

const getProducts = async () => {
  try {
    const res = await axios.get(BASE_URL + '/products?limit=10');
    return res.data;
  } catch (err) {
    throw err;
  }
};

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

export {getProducts, truncateText};
