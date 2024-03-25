export type Product = {
  id: number;
  name: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  inCart?: boolean;
  inFavourite?: boolean;
  quantity: number;
  price: number;
  img?: string;
};
