import styled from 'styled-components';
import modal from 'src/assets/img/modal.jpeg';
import { MyBtn } from 'src/components/UI/MyButton/MyButtonStyle';
import { ColorVars } from 'src/styles/variables';
import { FlexBox } from 'src/styles/mixins';

const { body, blue, cyan, tertiary } = ColorVars;

export const ModalInfoBox = styled.div`
  width: 47%;
  padding: 64px 54px 64px 34px;
  color: ${body};
  background: rgba(107, 0, 201, 1);
  background: linear-gradient(
      145deg,
      rgba(107, 0, 201, 0.5) 0%,
      rgba(79, 0, 185, 0.5) 100%
    ),
    url(${modal});
  background-repeat: no-repeat;
  background-position: center;

  h2 {
    font-size: 3.3rem;
  }

  p {
    margin-bottom: 32px;
    color: ${tertiary};
  }

  span {
    display: inline-block;
    margin-bottom: 16px;
  }

  ${MyBtn} {
    &:first-of-type {
      background: ${blue};
      box-shadow: 0px 0px 16px 3px ${blue}80;
    }
    &:last-of-type {
      background: ${cyan};
      box-shadow: 0px 0px 16px 3px ${cyan}80;
    }
  }
`;

export const ModalInfoBtns = styled(FlexBox)`
  align-items: center;
  margin-bottom: 20px;

  button {
    &:first-of-type {
      margin-right: 20px;
    }
  }
`;
