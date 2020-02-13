import styled from "styled-components";
import { colors } from "../../styles";

export const Text = styled.p`
  font-size: ${({ small }) => (small ? "0.8rem" : "1rem")};
  font-family: "Roboto", sans-serif;
  line-height: 1.43;
  color: ${({ inverted }) => (inverted ? colors.white : colors.black)};
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
`;

export const ErrorText = styled(Text)`
  color: ${colors.error};
`;
