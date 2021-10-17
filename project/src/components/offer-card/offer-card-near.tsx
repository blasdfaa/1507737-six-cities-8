import OfferCard, { IOfferCardProps } from './offer-card';

function OfferCardNear(props: IOfferCardProps): JSX.Element {
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
