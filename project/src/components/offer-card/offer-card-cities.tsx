import OfferCard, { OfferCardProps } from './offer-card';

function OfferCardCities(props: OfferCardProps): JSX.Element {
  const { className = '', imageWrapperClass = '', ...restProps } = props;

  return (
    <OfferCard
      {...restProps}
      className={`cities__place-card ${className}`}
      imageWrapperClass={`cities__image-wrapper ${imageWrapperClass}`}
    />
  );
}

export default OfferCardCities;
