import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthNav } from 'src/components/Auth/AuthNav';
import { authRoutes } from 'src/routes';
import { ModalWrap, ModalBox } from '../components/UI/MyModal/ModalStyles';

export const Auth: FC = (): JSX.Element => {
  return (
    <ModalWrap>
      <ModalBox>
        <AuthNav />
        <Routes>
          {authRoutes.map((r) => (
            <Route path={r.path} element={r.element} key={r.path} />
          ))}
        </Routes>
      </ModalBox>
    </ModalWrap>
  );
};
