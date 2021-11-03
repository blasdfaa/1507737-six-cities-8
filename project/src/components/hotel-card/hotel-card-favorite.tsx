import HotelCard, { HotelCardProps } from './hotel-card';

function OfferCardFavorite(props: HotelCardProps): JSX.Element {
  const { className = '', imageWrapperClass = '', ...restProps } = props;

  return (
    <HotelCard
      {...restProps}
      className={`favorites__card ${className}`}
      imageWrapperClass={`favorites__image-wrapper ${imageWrapperClass}`}
    />
  );
}

export default OfferCardFavorite;
