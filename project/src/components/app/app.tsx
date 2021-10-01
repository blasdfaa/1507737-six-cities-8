import Header from '../header';
import FavoritePage from '../pages/favorite-page';
import HomePage from '../pages/home-page';

const TabNames: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
const PopupOptions: string[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export type PlaceCardType = {
  title: string;
  imageUrl: string;
  isFavorite: boolean;
  price: number;
  type: string;
  rating: number;
  category: string;
  variant?: string;
};

const OfferItems: PlaceCardType[] = [
  {
    title: 'Beautiful & luxurious apartment at great location',
    imageUrl: '/img/apartment-01.jpg',
    isFavorite: false,
    price: 12,
    rating: 1.2,
    type: 'Premium',
    category: 'Apartment',
  },
  {
    title: 'Beautiful & luxurious apartment at great location',
    imageUrl: '/img/apartment-02.jpg',
    isFavorite: true,
    price: 123510,
    rating: 3,
    type: 'Premium',
    category: 'Apartment',
  },
  {
    title: 'Beautiful & luxurious apartment at great location',
    imageUrl: '/img/apartment-03.jpg',
    isFavorite: true,
    price: 120315,
    rating: 5,
    type: 'Premium',
    category: 'Private room',
  },
  {
    title: 'Beautiful & luxurious apartment at great location',
    imageUrl: '/img/room.jpg',
    isFavorite: false,
    price: 1210,
    rating: 2.3,
    type: 'Premium',
    category: 'Apartment',
  },
  {
    title: 'Beautiful & luxurious apartment at great location',
    imageUrl: '/img/room.jpg',
    isFavorite: false,
    price: 1320,
    rating: 3.4,
    type: 'Premium',
    category: 'Private room',
  },
];

function App(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <HomePage tabNames={TabNames} popupOptions={PopupOptions} offerItems={OfferItems} />
      <FavoritePage offerItems={OfferItems} />
    </div>
  );
}

export default App;
