import styled,{css} from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainer = css`
padding: 10px 15px;
cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 75px;
  padding: 10px 15px 15px 15px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;


`;

export const NameContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
color: gray;
text-align: left;
`; 

export const OptionLink = styled(Link)`
${OptionContainer}
`;

export const OptionDiv = styled.div`
${OptionContainer}
`;