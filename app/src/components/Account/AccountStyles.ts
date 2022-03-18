import styled from 'styled-components';
import { ColorVars } from 'src/styles/variables';

const { blue, dark, grey } = ColorVars;

export const AccountInfoBox = styled.ul`
  font-size: 1.2rem;

  li {
    color: ${grey};

    & > b {
      color: ${dark};
      font-weight: 700;
    }
  }
`;

export const AccountLotsBox = styled.ul`
  padding-left: 30px;

  li {
    width: fit-content;

    & > a {
      transition: 0.3s;
    }

    &:hover > a {
      color: ${blue};
    }
  }
`;
