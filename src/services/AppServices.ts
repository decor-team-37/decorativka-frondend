import { MyForm } from '../types/MyForm';
import { client } from '../utils/fetchClient';

export function getSendForm(forms: MyForm) {
  return client.post<Comment>('/posts', forms);
}
