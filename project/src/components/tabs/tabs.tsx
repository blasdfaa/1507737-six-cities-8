import { offerCategories } from '../../const';
import { OfferCategory } from '../../types/offer';

type TabsProps = {
  currentCategory: string;
  onTabClick: (category: OfferCategory) => void;
};

function Tabs(props: TabsProps): JSX.Element {
  const { currentCategory, onTabClick } = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {offerCategories.map((city) => (
            <li className="locations__item" key={`${city}_category`}>
              <a
                className={`locations__item-link tabs__item ${
                  city === currentCategory ? 'tabs__item--active' : ''
                }`}
                href="#!"
                onClick={() => onTabClick(city)}
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
