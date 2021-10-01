import { colors } from "./colors";
import { space, lineHeights } from "./spacing";
import { sizes } from "./sizes";
import { fonts, fontWeights, fontSizes } from "./fonts";

export interface Theme {
  colors: any;
  space: any;
  lineHeights: any;
  sizes: any;
  fonts: any;
  fontSizes: any;
  fontWeights: any;
}

export const theme: Theme = {
  colors,
  space,
  lineHeights,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
};
