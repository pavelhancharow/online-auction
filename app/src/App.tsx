import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Modal } from './pages/Modal/Modal';

export const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Modal />
    </BrowserRouter>
  );
};
