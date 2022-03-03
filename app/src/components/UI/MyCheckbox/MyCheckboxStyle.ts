import styled from 'styled-components';
import { ColorVars } from 'src/styles/variables';

const { light, grey, button } = ColorVars;

export const MyCheckboxBox = styled.div`
  input {
    display: none;
  }

  label {
    position: relative;
    display: inline-block;
    padding-left: 21px;
    color: ${grey};

    &::before {
      position: absolute;
      content: '';
      top: 3px;
      left: 2px;
      width: 12px;
      height: 12px;
      border: 1px solid ${grey};
      border-radius: 1px;
      transition: all 0.5s;
    }

    &::after {
      position: absolute;
      content: '';
      bottom: 9px;
      left: 5px;
      width: 6px;
      height: 2.5px;
      border: 2px solid ${light};
      border-top-style: none;
      border-right-style: none;
      transform: rotate(-45deg);
      opacity: 0;
      visibility: hidden;
      transition: all 0.5s;
    }
  }

  input[type='checkbox']:checked {
    & ~ label {
      &::before {
        border-color: ${button};
        background: ${button};
      }

      &::after {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`;
