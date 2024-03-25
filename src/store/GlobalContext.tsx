import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
// import { getProducts } from '../services/AppServices';
import { Product } from '../types/Products';

export type GlobalContextType = {
  products: Product[];
  setHasError: React.Dispatch<React.SetStateAction<string>>;
  hasError: string;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  localStore: Product[];
  setLocalStore: (v: Product[]) => void;
  handleChooseCart: (card: Product, action: string) => void;
};

export const GlobalContext = React.createContext<GlobalContextType>({
  products: [],
  hasError: '',
  setProducts: () => {},
  localStore: [],
  setLocalStore: () => {},
  setHasError: () => {},
  handleChooseCart: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const GlobalProvider: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [localStore, setLocalStore] = useLocalStorage<Product[]>(
    'products',
    [],
  );
  const [hasError, setHasError] = useState('');

  /* useEffect(() => {
    const fetchData = async () => {
      setHasError('');

      try {
        const loadedProducts = await getProducts<Product>();

        const updatedProducts = loadedProducts.map(item => {
          const elem = localStore.find(e => item.id === e.id);

          if (elem) {
            return elem;
          }

          return {
            ...item,
            inFavourite: true, // change to false
            inCart: true, // change to false
            quantity: 1,
            price: 1000, // delete !!
          };
        });

        setProducts(updatedProducts);
      } catch (error) {
        setHasError('Something went wrong');
      }
    };

    fetchData();
  }, []); */

  /*  useEffect(() => {
    setLocalStore(products);
  }, [products]); // remove !!! */

  const handleChooseCart = (card: Product, action: string) => {
    const currentProducts = [...products];
    let currentStore = [...localStore];
    let updatedCard: Product = { ...card };

    if (action === 'addCard') {
      updatedCard = { ...card, inCart: !card.inCart };
    }

    if (action === 'favourites') {
      updatedCard = { ...card, inFavourite: !card.inFavourite };
    }

    if (action === 'delete') {
      updatedCard = { ...card, inCart: false };
    }

    if (action === 'addQuantity' && updatedCard.quantity) {
      updatedCard = { ...card, quantity: updatedCard.quantity + 1 };
    }

    if (action === 'deleteQuantity' && updatedCard.quantity) {
      updatedCard = { ...card, quantity: updatedCard.quantity - 1 };
    }

    if (!updatedCard.inCart && !updatedCard.inFavourite) {
      currentStore = currentStore.filter(el => el.id !== updatedCard.id);
    } else {
      const indexStore = currentStore.findIndex(
        storeEl => storeEl.id === card.id,
      );

      if (indexStore !== -1) {
        currentStore.splice(indexStore, 1, updatedCard);
      } else {
        currentStore = [...currentStore, updatedCard];
      }
    }

    const index = currentProducts.findIndex(el => el.id === card.id);

    currentProducts.splice(index, 1, updatedCard);

    setProducts(currentProducts);
    setLocalStore(currentStore);
  };

  const value = {
    hasError,
    products,
    setProducts,
    localStore,
    setLocalStore,
    setHasError,
    handleChooseCart,
  };

  return (
    <GlobalContext.Provider value={value}> {children} </GlobalContext.Provider>
  );
};
