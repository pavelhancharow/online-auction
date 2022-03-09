import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserNav } from 'src/components/Account/User/UserNav';
import { privateUserRoutes } from 'src/routes';
import { ModalBox, ModalWrap } from '../components/UI/MyModal/ModalStyles';

export const User: FC = (): JSX.Element => {
  return (
    <ModalWrap>
      <ModalBox>
        <UserNav />
        <Routes>
          {privateUserRoutes.map((r) => (
            <Route path={r.path} element={r.element} key={r.path} />
          ))}
        </Routes>
      </ModalBox>
    </ModalWrap>
  );
};
