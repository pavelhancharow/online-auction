import styled from 'styled-components';
import { ColorVars } from 'src/styles/variables';
import { FlexBoxBetween } from 'src/styles/mixins';

const { greyLight, blue } = ColorVars;

export const LoginContainer = styled(FlexBoxBetween)`
  a {
    color: ${greyLight};
    transition: 0.3s;

    &:hover {
      color: ${blue};
    }
  }
`;
