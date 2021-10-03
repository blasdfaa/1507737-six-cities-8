import { getRatingValue } from '../../utils/get-rating-value';
import { PlaceOfferType } from '../../types/place';

function PlaceCard({
  title,
  imageUrl,
  price,
  type,
  category,
  isFavorite,
  rating,
  variant,
}: PlaceOfferType): JSX.Element {
  const isFavoriteVariant: boolean = variant === 'favorite';
  const isOfferVariant: boolean = variant === 'offer';
  const isNearVariant: boolean = variant === 'near';

  return (
    <article
      className={`place-card ${isFavoriteVariant && 'favorites__card'} ${
        isOfferVariant && 'cities__place-card'
      } ${isNearVariant && 'near-places__card'}`}
    >
      {isOfferVariant && (
        <div className="place-card__mark">
          <span>{type}</span>
        </div>
      )}
      <div
        className={`place-card__image-wrapper ${isFavoriteVariant && 'favorites__image-wrapper'} ${
          isFavoriteVariant && '"cities__image-wrapper'
        } ${isNearVariant && 'near-places__image-wrapper'}`}
      >
        <a href="#!">
          <img
            className="place-card__image"
            src={imageUrl}
            width="260"
            height="200"
            alt="Place images"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${
              isFavorite && 'place-card__bookmark-button--active'
            }`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getRatingValue(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#!">{title}</a>
        </h2>
        <p className="place-card__type">{category}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
