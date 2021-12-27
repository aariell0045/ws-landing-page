import { createGlobalStyle } from "styled-components";
import { FONT_FAMILIES, FONT_SIZES_WEB } from "./fonts.styles";
import { Colors } from "./colors.styles";

export const GlobalStyle = createGlobalStyle`
    *, *:before, *:after {
      box-sizing: inherit;
    }

    html,
    body {
        height: 100%;
        margin: 0;
        font-family: ${FONT_FAMILIES.REGULAR};
      	font-size: ${FONT_SIZES_WEB.BODY};
				background: ${Colors.white};
      	box-sizing: border-box;
				scrollbar-color: ${Colors.black} ${Colors.black};
    }

    input,
    select,
    textarea {
			font-family: inherit;
    }

    button {
			font-family: inherit;
      background-repeat: no-repeat;
      background-position: center;
      background-color: transparent;
      border: 0;
      padding: 0;
      cursor: pointer;
    }

    button:disabled {
      cursor: default;
    }

		::-webkit-scrollbar {
			background-color: ${Colors.black};
			width: 4px;
			height: 4px;
		}

		::-webkit-scrollbar-thumb {
			position: absolute;
			background: ${Colors.black};
			border-radius: 3px;
		}

		a{
			text-decoration: none;
		}
`;
