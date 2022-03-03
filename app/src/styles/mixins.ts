import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
`;

export const FlexColumn = styled(FlexBox)`
  flex-direction: column;
`;

export const FlexBoxBetween = styled(FlexBox)`
  justify-content: space-between;
  align-items: center;
`;

export const Circle = styled.span`
  width: 20px;
  height: 20px;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
`;
