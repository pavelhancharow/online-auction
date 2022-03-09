import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthInfo } from 'src/components/Auth/AuthInfo';
import { publicRoutes } from 'src/routes';
import { ModalWrap, ModalBox } from '../components/UI/MyModal/ModalStyles';

export const Auth: FC = (): JSX.Element => {
  return (
    <ModalWrap>
      <ModalBox>
        <AuthInfo />
        <Routes>
          {publicRoutes.map((r) => (
            <Route path={r.path} element={r.element} key={r.path} />
          ))}
        </Routes>
      </ModalBox>
    </ModalWrap>
  );
};
