import { useSelector } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../redux/user-process-data/selectors';
import { HotelReview } from '../../types/review';
import ReviewForm from '../review-form/review-form';
import ReviewItem from '../review-item/review-item';

type ReviewListProps = {
  items: HotelReview[] | [];
};

function ReviewList(props: ReviewListProps): JSX.Element {
  const { items = [] } = props;

  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{items.length}</span>
      </h2>
      <ul className="reviews__list">
        {items && items.map((comment) => <ReviewItem {...comment} key={comment.id} />)}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm />}
    </section>
  );
}

export default ReviewList;
