import { MyForm } from '../types/MyForm';
import { client } from '../utils/fetchClient';

const params = {
  page: 0,
  size: 1,
};

export function getSendForm(forms: MyForm) {
  return client.post<Comment>('/posts', forms);
}

export function getProducts<T>() {
  return client.goods<T[]>('/v1/products', params);
}

export function getProductsById<T>(id: number) {
  return client.goodsById<T[]>(`/v1/products/${id}`);
}
