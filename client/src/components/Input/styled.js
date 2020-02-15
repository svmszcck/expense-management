import styled from "styled-components";
import { colors } from "../../styles";

export const StyledInput = styled.input`
  background: ${colors.white};
  box-shadow: inset 0 1px 3px 0 rgba(174, 174, 174, 0.5);
  border-radius: 4px;
  border: none;
  padding: 13px 10px 11px 15px;
  font-size: 14px;
  color: ${colors.black};
  box-sizing: border-box;
  width: 100%;
  margin: 8px 0;

  &::placeholder {
    color: ${colors.gray};
  }
`;
