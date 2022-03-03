import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ModalInfo } from 'src/components/Modal/ModalInfo/ModalInfo';
import { publicRoutes } from 'src/routes';
import { ModalWrap, ModalBox } from './ModalStyles';

export const Modal: FC = (): JSX.Element => {
  return (
    <ModalWrap>
      <ModalBox>
        <ModalInfo />
        <Routes>
          {publicRoutes.map((r) => (
            <Route path={r.path} element={r.element} key={r.path} />
          ))}
        </Routes>
      </ModalBox>
    </ModalWrap>
  );
};
