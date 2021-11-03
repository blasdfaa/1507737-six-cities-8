import HotelCard, { HotelCardProps } from './hotel-card';

function OfferCardNear(props: HotelCardProps): JSX.Element {
  const { className = '', imageWrapperClass = '', ...restProps } = props;

  return (
    <HotelCard
      {...restProps}
      className={`near-places__card ${className}`}
      imageWrapperClass={`near-places__image-wrapper ${imageWrapperClass}`}
    />
  );
}

export default OfferCardNear;
