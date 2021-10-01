import styled from "styled-components/native";

const defaultTextStyles = (theme: any): string => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme: any): string => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme: any): string => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme: any): string => `
    color: ${theme.colors.text.error};
`;

const caption = (theme: any): string => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme: any): string => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

interface VariantsGroup {
  body: (theme: any) => string;
  label: (theme: any) => string;
  caption: (theme: any) => string;
  error: (theme: any) => string;
  hint: (theme: any) => string;
}

export enum Varient {
  BODY = "body",
  LABEL = "label",
  CAPTION = "caption",
  ERROR = "error",
  HINT = "hint",
}

const variantsGroup: VariantsGroup = {
  body,
  label,
  caption,
  error,
  hint,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant = Varient.BODY, theme }: { variant: Varient; theme: any }) =>
    variantsGroup[variant](theme)}
`;
