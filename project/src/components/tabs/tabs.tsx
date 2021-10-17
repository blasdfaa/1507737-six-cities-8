interface ITabsProps {
  items: string[];
}

function Tabs(props: ITabsProps): JSX.Element {
  const { items } = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {items.map((tab, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li className="locations__item" key={`${tab}_${index}`}>
              <a className="locations__item-link tabs__item" href="#!">
                <span>{tab}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
