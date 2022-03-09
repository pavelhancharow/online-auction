import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminNav } from 'src/components/Account/Admin/AdminNav';
import { privateAdminRoutes } from 'src/routes';
import { ModalBox, ModalWrap } from '../components/UI/MyModal/ModalStyles';

export const Admin: FC = (): JSX.Element => {
  return (
    <ModalWrap>
      <ModalBox>
        <AdminNav />
        <Routes>
          {privateAdminRoutes.map((r) => (
            <Route path={r.path} element={r.element} key={r.path} />
          ))}
        </Routes>
      </ModalBox>
    </ModalWrap>
  );
};
