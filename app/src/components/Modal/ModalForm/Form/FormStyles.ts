import styled from 'styled-components';
import { MyBtn } from 'src/components/UI/MyButton/MyButtonStyle';
import { Circle, FlexBox } from 'src/styles/mixins';
import { ColorVars } from 'src/styles/variables';

import check from 'src/assets/svg/check.svg';
import error from 'src/assets/svg/xmark.svg';

const { button, fail } = ColorVars;

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;

  ${MyBtn} {
    margin-top: 24px;
    margin-left: auto;
    background: ${button};
    box-shadow: 0px 0px 16px 3px ${button}80;
  }
`;

export const FormInputIcon = styled(Circle)`
  background-repeat: no-repeat;
  background-position: center;
`;

export const FormInputCheck = styled(FormInputIcon)`
  background-image: url(${check});
  border-color: ${button};
`;
export const FormInputFail = styled(FormInputIcon)`
  background-image: url(${error});
  border-color: ${fail};
`;

export const FormInputBox = styled(FlexBox)`
  position: relative;

  ${FormInputCheck},
  ${FormInputFail} {
    position: absolute;
    top: 2px;
    right: 10px;
  }

  b {
    position: absolute;
    bottom: 0;
    left: 0;
    color: ${fail};
  }
`;
