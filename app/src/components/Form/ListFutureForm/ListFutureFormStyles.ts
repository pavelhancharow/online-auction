import styled from 'styled-components';
import { ColorVars } from 'src/styles/variables';
import { FlexBox } from 'src/styles/mixins';

const { button, primary } = ColorVars;

export const ListFutureBtnsBox = styled(FlexBox)`
  margin-bottom: 20px;

  & > button {
    margin: 0 !important;

    &:first-of-type {
      margin-right: 20px !important;
    }
    &:last-of-type {
      background: ${primary} !important;
      box-shadow: 0px 0px 16px 3px ${primary}80;
    }
  }

  h3 {
    flex-basis: 100%;
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const ListFutureItemBox = styled.div`
  input {
    display: none;
  }

  input[type='checkbox']:checked {
    & ~ label > div {
      background-color: ${button};
    }
  }
`;
