import styled from 'styled-components';
import { ColorVars } from 'src/styles/variables';

const { blueDark, grey } = ColorVars;

export const MyInputElem = styled.input`
  display: inline-block;
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 20px;
  text-overflow: ellipsis;
  color: ${grey};
  background-color: transparent;
  border-bottom: 1px solid ${grey};
  transition: all 0.3s;
  cursor: auto;

  &::placeholder {
    text-indent: 0px;
    color: ${grey};
    transition: all 0.7s ease-out;
  }

  &:focus {
    color: ${blueDark};
    border-bottom-color: ${blueDark};

    &::placeholder {
      text-indent: -500px;
    }
  }
`;
