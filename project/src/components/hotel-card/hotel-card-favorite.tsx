import { cardImageSize } from '../../const';
import HotelCard, { HotelCardProps } from './hotel-card';

function OfferCardFavorite(props: HotelCardProps): JSX.Element {
  const { className = '', imageWrapperClass = '', ...restProps } = props;

  return (
    <HotelCard
      {...restProps}
      className={`favorites__card ${className}`}
      imageWrapperClass={`favorites__image-wrapper ${imageWrapperClass}`}
      cardInfoClass="favorites__card-info"
      cardImageSize={cardImageSize}
    />
  );
}

export default OfferCardFavorite;
