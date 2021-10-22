import OfferCard, { OfferCardProps } from './offer-card';

function OfferCardNear(props: OfferCardProps): JSX.Element {
  const { className = '', imageWrapperClass = '', ...restProps } = props;

  return (
    <OfferCard
      {...restProps}
      className={`near-places__card ${className}`}
      imageWrapperClass={`near-places__image-wrapper ${imageWrapperClass}`}
    />
  );
}

export default OfferCardNear;
