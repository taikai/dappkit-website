import styled, { css } from "styled-components";
import { rem } from "polished";
import { colors, sizes } from "../../../styles/design-tokens";

const { light, dark, grey100, grey800, grey900, green500, green900 } = colors;
const { defaultSize, border } = sizes;

export const Wrapper = styled.div`
  position: relative;
  border: ${rem(border, defaultSize)} solid ${dark};
  background-color: ${light};
  padding: ${rem("30px", defaultSize)};
  box-shadow: ${light} ${rem("10px", defaultSize)} ${rem("10px", defaultSize)} 0
      ${rem("-2px", defaultSize)},
    ${dark} ${rem("10px", defaultSize)} ${rem("10px", defaultSize)};

  h3 {
    margin-bottom: ${rem("10px")};
    color: ${grey900};
  }

  p {
    color: ${grey800};
  }

  ${(props) =>
    props.color === "dark" &&
    css`
      border: ${rem(border, defaultSize)} solid ${light};
      background-color: ${dark};
      box-shadow: ${dark} ${rem("10px", defaultSize)}
          ${rem("10px", defaultSize)} 0 ${rem("-2px", defaultSize)},
        ${light} ${rem("10px", defaultSize)} ${rem("10px", defaultSize)};

      h3 {
        color: ${light};
      }

      p {
        color: ${grey100};

        span {
          ${"" /* border-radius: ${(rem("1px"), defaultSize)}; */}
          background-color: ${green900};
          padding: 0 ${rem("2px", defaultSize)};
          font-family: "Space Mono", monospace;
          font-feature-settings: "ss01" on;
          color: ${green500};
        }
      }
    `}
`;
