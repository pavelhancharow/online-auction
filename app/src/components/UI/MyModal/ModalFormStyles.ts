import styled from 'styled-components';
import { ColorVars } from 'src/styles/variables';
import { FlexColumn } from 'src/styles/mixins';

const { body, grey, blue } = ColorVars;

export const ModalFormBox = styled(FlexColumn)`
  width: 53%;
  padding: 56px 54px 128px 50px;
  background-color: ${body};
  overflow-y: auto;

  h2 {
    font-size: 1.6rem;
  }

  span {
    display: inline-block;
    margin-bottom: 20px;
    color: ${grey};

    a {
      color: ${blue};
    }
  }

  p {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
  }
`;

export const ModalAuctionBox = styled(ModalFormBox)`
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 38px;

  & > button {
    position: absolute;
    width: 90px;
  }
`;
