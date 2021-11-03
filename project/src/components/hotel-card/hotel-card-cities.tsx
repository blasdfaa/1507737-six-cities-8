import HotelCard, { HotelCardProps } from './hotel-card';

function OfferCardCities(props: HotelCardProps): JSX.Element {
  const { className = '', imageWrapperClass = '', ...restProps } = props;

  return (
    <HotelCard
      {...restProps}
      className={`cities__place-card ${className}`}
      imageWrapperClass={`cities__image-wrapper ${imageWrapperClass}`}
    />
  );
}

export default OfferCardCities;
