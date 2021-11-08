import React from 'react';
import { useParams } from 'react-router';
import { reviewPostStatus } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';

import { postReviewAction } from '../../redux/hotel-page-data/api-actions';
import { getPostReviewLoadingStatus } from '../../redux/hotel-page-data/selectors';
import MessageLoader from '../message-loader/message-loader';

const reviewStars = [
  {
    title: 'perfect',
    value: '5',
    id: '5-stars',
  },
  {
    title: 'good',
    value: '4',
    id: '4-stars',
  },
  {
    title: 'not bad',
    value: '3',
    id: '3-stars',
  },
  {
    title: 'badly',
    value: '2',
    id: '2-stars',
  },
  {
    title: 'terribly',
    value: '1',
    id: '1-stars',
  },
];

type UseParams = {
  id: string;
};

function ReviewForm(): JSX.Element {
  const { id: offerId } = useParams<UseParams>();

  const dispatch = useAppDispatch();

  const reviewSendingStatus = useAppSelector(getPostReviewLoadingStatus);

  const [reviewComment, setReviewComment] = React.useState<string>('');
  const [rating, setRating] = React.useState<number>(0);

  const starsRefs = React.useRef<HTMLInputElement[] | null>(null);
  starsRefs.current = [];

  const isReviewSending = reviewSendingStatus === reviewPostStatus.Loading;
  const isReviewSendingSuccess = reviewSendingStatus === reviewPostStatus.Success;
  const isFormValid = reviewComment.length > 60 && Boolean(rating);

  React.useEffect(() => {
    if (isReviewSendingSuccess) {
      setReviewComment('');
      setRating(0);
      resetRating();
    }
  }, [isReviewSendingSuccess]);

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const reviewPost = {
      comment: reviewComment,
      rating,
    };

    dispatch(postReviewAction(Number(offerId), reviewPost));
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setReviewComment(e.target.value);
  };

  const handleChangeRating = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRating(Number(e.target.value));
  };

  const addToStarsRefs = (el: HTMLInputElement): void => {
    if (el && starsRefs.current !== null && !starsRefs.current.includes(el)) {
      starsRefs.current.push(el);
    }
  };

  const resetRating = (): void => {
    if (starsRefs.current !== null) {
      starsRefs.current.forEach((input) => {
        input.checked = false;
      });
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmitForm}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {reviewStars.map(({ id, value, title }) => (
          <React.Fragment key={id}>
            <input
              ref={addToStarsRefs}
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={id}
              type="radio"
              onChange={handleChangeRating}
            />
            <label htmlFor={id} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use href="#icon-star" />
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewComment}
        onChange={handleChangeText}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span>
          and describe your stay with at least
          <b className="reviews__text-amount">&nbsp;50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isFormValid || isReviewSending}
        >
          {isReviewSending ? <MessageLoader /> : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
