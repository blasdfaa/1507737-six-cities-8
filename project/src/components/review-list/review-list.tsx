import { IOfferReview } from '../../types/review';
import ReviewForm from '../review-form/review-form';
import ReviewItem from '../review-item/review-item';

interface IReviewListProps {
  items: IOfferReview[];
}

function ReviewList(props: IReviewListProps): JSX.Element {
  const { items = [] } = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{items.length}</span>
      </h2>
      <ul className="reviews__list">
        {items && items.map((comment) => <ReviewItem {...comment} key={comment.id} />)}
      </ul>
      <ReviewForm />
    </section>
  );
}

export default ReviewList;
