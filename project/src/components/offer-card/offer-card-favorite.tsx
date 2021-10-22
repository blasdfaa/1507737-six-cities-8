import OfferCard, { OfferCardProps } from './offer-card';

function OfferCardFavorite(props: OfferCardProps): JSX.Element {
  const { className = '', imageWrapperClass = '', ...restProps } = props;

  return (
    <OfferCard
      {...restProps}
      className={`favorites__card ${className}`}
      imageWrapperClass={`favorites__image-wrapper ${imageWrapperClass}`}
    />
  );
}

export default OfferCardFavorite;
