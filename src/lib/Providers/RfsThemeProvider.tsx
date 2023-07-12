import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export const theme = extendTheme({
  colors: {
    blue: {
      "50": "#eef8ff",
      "100": "#d9efff",
      "200": "#bce3ff",
      "300": "#8ed3ff",
      "400": "#59b8ff",
      "500": "#3399ff",
      "600": "#1b79f5",
      "700": "#1463e1",
      "800": "#174fb6",
      "900": "#19458f",
      "950": "#142b57",
    },
  },
  components: {
    Menu: {
      baseStyle: {
        list: {
          p: 1,
        },
        item: {
          rounded: 4,
        },
      },
    },
    Button: {
      defaultProps: {
        colorScheme: "blue",
      },
    },
  },
});

const RfsThemeProvider = (
  props: PropsWithChildren<{ theme?: ReturnType<typeof extendTheme> }>,
) => {
  return (
    <ChakraProvider theme={{ ...theme, ...props.theme }}>
      {props.children}
    </ChakraProvider>
  );
};

export default RfsThemeProvider;
