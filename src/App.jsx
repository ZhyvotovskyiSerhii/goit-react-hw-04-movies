import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';



const Navigation = lazy(() =>
  import('./components/Navigation'),
);

const MoviesPage = lazy(() =>
  import('./components/MoviesPage' ),
);


const NotFoundPage = lazy(() =>
  import('./components/NotFoundPage'),
);

const MovieDetailsPage = lazy(() =>
  import(
    './components/MovieDetailsPage' 
  ),
);

const HomePage = lazy(() =>
  import('./components/HomePage'),
);


export default function App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Navigation />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/movies" component={MoviesPage} exact />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  ); 
}
