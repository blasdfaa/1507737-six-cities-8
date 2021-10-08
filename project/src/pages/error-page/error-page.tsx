import { Link } from 'react-router-dom';

import './error-page.css';

interface ErrorPageProps {
  code: string;
  text: string;
}

function ErrorPage(props: ErrorPageProps): JSX.Element {
  const { code, text } = props;

  return (
    <main className="error-page">
      <div className="error-page__wrapper">
        <div className="error-page__code">
          <h1>{code}</h1>
        </div>
        <h2 className="error-page__title">WE ARE SORRY, PAGE NOT FOUND!</h2>
        <p className="error-page__text">{text}</p>
        <Link className="error-page__link" to="/">
          BACK TO HOMEPAGE
        </Link>
      </div>
    </main>
  );
}

export default ErrorPage;
