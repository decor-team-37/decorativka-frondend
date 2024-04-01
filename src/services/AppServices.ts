import { MyForm } from '../types/MyForm';
import { WallpaperProducts } from '../types/Products/WallpaperProducts';
import { client } from '../utils/fetchClient';

export function getSendForm(forms: MyForm) {
  return client.post<Comment>('/posts', forms);
}

export function getOffers<T>() {
  return client.offers<T[]>('/v1/offers');
}

export function getWallpaper() {
  return client.get<WallpaperProducts[]>('/v1/products/all/1');
}
