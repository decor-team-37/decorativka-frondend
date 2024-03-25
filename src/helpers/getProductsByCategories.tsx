import { Product } from '../types/Products';

export const getCartFavorites = (localStore: Product[]) => {
  return localStore.filter(el => el.inFavourite);
};

export const getCartItems = (localStore: Product[]) => {
  return localStore.filter(el => el.inCart);
};
