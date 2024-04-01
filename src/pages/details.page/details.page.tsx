// import { useParams } from 'react-router-dom';
import cn from 'classnames';
import { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { initialDelayLoader } from '../../constants/initialDelayLoader';
import { PageNavigation } from '../../components/PageNavigation';
import { Loader } from '../../components/Loader';
import { ControlsButtons } from '../../components/ControlsButtons';
import { Button } from '../../components/Button';
import { ServiceProducts } from '../../types/ServiceProducts/ServiceProducts';
import { GlobalContext } from '../../store/GlobalContext';
import './details.page.scss';

export const DetailsPage = () => {
  const { productId } = useParams();
  const { productsService, handleChooseCart } = useContext(GlobalContext);
  const [selectProduct, setSelectProduct] = useState<ServiceProducts | null>(
    null,
  );
  const generalProduct = productId
    ? productsService.find(el => el.id === +productId)
    : null;
  const [isLoading, setIsLoading] = useState(false);
  const [indexStart, setIndexImage] = useState(0);
  const timerId = useRef(0);

  useEffect(() => {
    setIsLoading(true);
    window.clearTimeout(timerId.current);

    timerId.current = window.setTimeout(() => {
      setIsLoading(false);
    }, initialDelayLoader);

    const product = productsService.find(
      el => productId && el.id === +productId,
    ); // remove after API;

    setSelectProduct(product || null); // remove after API;
  }, []);

  const handleBtnNext = () => {
    if (selectProduct) {
      if (indexStart !== selectProduct.img.length - 1) {
        setIndexImage(indexStart + 1);
      } else {
        setIndexImage(0);
      }
    }
  };

  const handleBtnPrev = () => {
    if (selectProduct) {
      if (indexStart !== 0) {
        setIndexImage(indexStart - 1);
      } else {
        setIndexImage(selectProduct.img.length - 1);
      }
    }
  };

  return (
    <div className="product-page">
      <div className="content">
        <div className="product-page__nav">
          <PageNavigation prodName={selectProduct?.name} />
        </div>

        {isLoading && <Loader />}

        {!isLoading && (
          <section className="product-page__section">
            <div className="product-page__media-content">
              <div>
                <img
                  src={selectProduct?.img[indexStart]}
                  alt={`${selectProduct?.name} img ${indexStart + 1}`}
                  className="product-page__selected-img"
                />
              </div>

              <div className="product-page__carousel">
                <ul className="product-page__list-imgs">
                  {selectProduct?.img.map((picture, index) => (
                    <li
                      key={picture}
                      className={cn('product-page__item', {
                        'product-page__item--selected': indexStart === index,
                      })}
                    >
                      <img
                        src={picture}
                        alt={`${selectProduct.name} img`}
                        className="product-page__item-img"
                      />
                    </li>
                  ))}
                </ul>

                <div className="product-page__control">
                  <ControlsButtons
                    $detailPage
                    color="black"
                    handleBtnNext={handleBtnNext}
                    handleBtnPrev={handleBtnPrev}
                  />
                </div>
              </div>
            </div>

            <div className="product-page__info">
              <div className="product-page__info-wrap">
                <p className="product-page__description">
                  {selectProduct?.description}
                </p>

                <div className="product-page__care">
                  <h4 className="product-page__subtitle">Склад</h4>
                  <p className="product-page__value">
                    {selectProduct?.category}
                  </p>
                </div>

                <div className="product-page__size-and-code">
                  <div className="product-page__size">
                    <h4 className="product-page__subtitle">Витрати</h4>
                    <p className="product-page__value">
                      {selectProduct?.price}
                    </p>
                  </div>
                </div>

                <div className="product-page__separator" />
              </div>

              <div className="product-page__button-wrap">
                <Button $primary path="/contacts">
                  Замовити консультацію
                </Button>

                <button
                  aria-label="add to favorite"
                  type="button"
                  className="product-page__button"
                  onClick={() => {
                    if (generalProduct) {
                      handleChooseCart(generalProduct, 'favourites');
                    }
                  }}
                >
                  <div
                    className={cn('icon icon--favorite-icon icon--hover', {
                      'icon--favorite-icon-blue': generalProduct?.inFavourite,
                    })}
                  />
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
