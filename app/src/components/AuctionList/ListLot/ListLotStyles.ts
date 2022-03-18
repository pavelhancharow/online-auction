import styled from 'styled-components';
import { FlexBox } from 'src/styles/mixins';
import { ColorVars } from 'src/styles/variables';

const { grey, dark, tertiary } = ColorVars;

export const ListLotBox = styled(FlexBox)`
  margin-bottom: 20px;
  border: 1px solid;
  border-color: transparent;
  transition: all 0.3s;

  &:hover {
    border-color: ${tertiary};
    box-shadow: 0px 0px 5px 0px ${tertiary}55;
  }

  h3 {
    margin-bottom: 15px;
    color: ${dark};
  }
`;

export const ListLotImg = styled.img`
  width: 100px;
  height: 100px;
  background: transparent;
  margin-right: 10px;
  flex-shrink: 0;
  object-fit: cover;
`;

export const ListLotInfo = styled.ul`
  li {
    margin-bottom: 5px;
    color: ${grey};

    & > b {
      color: ${dark};
    }
  }
`;
