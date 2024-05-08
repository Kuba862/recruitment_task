import { BrowserRouter } from 'react-router-dom';
import { Routes } from './Route';
import Header from '../components/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes homePath="/" petitionPath='/:id/:title?' />
    </BrowserRouter>
  );
};

export default Router;
