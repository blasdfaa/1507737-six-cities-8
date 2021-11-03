import { HotelCategory, HotelInfo } from '../../types/hotel';
import HotelList from '../hotel-list/hotel-list';

type FavoriteListItemProps = {
  favoriteItems: HotelInfo[];
  category: HotelCategory;
};

function FavoriteListItem(props: FavoriteListItemProps): JSX.Element | null {
  const { favoriteItems, category } = props;

  const filtredItems = favoriteItems.filter((item) => item.city.name === category);

  if (!filtredItems.length) {
    return null;
  }

  return (
    <li className="favorites__locations-items" key={category}>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#!">
            <span>{category}</span>
          </a>
        </div>
      </div>
      <HotelList items={filtredItems} type="favorite" listClassName="favorites__places" />
    </li>
  );
}

export default FavoriteListItem;
