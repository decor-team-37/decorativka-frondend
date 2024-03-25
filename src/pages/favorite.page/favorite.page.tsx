import { useContext, useEffect, useRef, useState } from 'react';
import { GlobalContext } from '../../store/GlobalContext';
import { getCartFavorites } from '../../helpers/getProductsByCategories';
import { Button } from '../../components/Button';
import { Loader } from '../../components/Loader';
import './favorite.page.scss';
import { initialDelayLoader } from '../../constants/initialDelayLoader';

export const FavoritePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { localStore } = useContext(GlobalContext);
  const cartFavorites = getCartFavorites(localStore);
  const timerId = useRef(0);

  useEffect(() => {
    setIsLoading(true);
    window.clearTimeout(timerId.current);

    timerId.current = window.setTimeout(() => {
      setIsLoading(false);
    }, initialDelayLoader);
  }, []);

  return (
    <div className="favorite">
      <div className="content">
        <div className="favorite__nav">
          <div
            className="
              icon
              icon--hover
              icon--favorite-icon
              favorite__icon
            "
          />
          <h3 className="title title--h3 favorite__title">Обране</h3>
        </div>

        {isLoading && <Loader />}

        {!isLoading && !!cartFavorites.length && (
          <section className="basket__products">
            {cartFavorites.map(product => (
              <>{product.name}</>
            ))}
            <div className="basket__line basket__line" />
          </section>
        )}

        {!isLoading && !cartFavorites.length && (
          <section>
            <div className="favorite__table">
              <p className="favorite__table-text">
                У Вас не має обраних товарів
              </p>
            </div>
          </section>
        )}

        <Button $secondary path="..">
          Продовжити покупки
        </Button>
      </div>
    </div>
  );
};
