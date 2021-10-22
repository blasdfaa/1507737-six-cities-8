type TabsProps = {
  currentCategory: string;
  items: string[];
  onTabClick: (category: string) => void;
};

function Tabs(props: TabsProps): JSX.Element {
  const { items, currentCategory, onTabClick } = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {items.map((city) => (
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
