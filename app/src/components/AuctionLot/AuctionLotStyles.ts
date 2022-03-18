import styled from 'styled-components';
import { FlexBox, FlexColumn } from 'src/styles/mixins';
import { ColorVars } from 'src/styles/variables';

const { grey, dark } = ColorVars;

export const AuctionLotBox = styled(FlexColumn)`
  align-items: center;
  padding-bottom: 20px;
`;

export const AuctionLotImg = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 15px;
  background: transparent;
`;

export const AuctionLotInfoBox = styled(FlexColumn)`
  align-self: start;
  font-size: 16px;
  color: ${grey};

  p {
    font-weight: 400 !important;
  }

  b {
    font-weight: 700;
    color: ${dark};
  }
`;

export const AuctionLotBtnsBox = styled(FlexBox)`
  justify-content: space-evenly;
  flex-wrap: wrap;

  h3 {
    flex-basis: 100%;
    margin-bottom: 20px;
    text-align: center;
  }
`;
