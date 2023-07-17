import { aB as o, j as f } from "./chunk-NO6MRLPK-0daf97be.js";
import { w as t, f as r } from "./chunk-DGNA6VRZ-3bdd8ead.js";
import "react";
import "react-dom";
const m = o(
  {
    colors: {
      blue: {
        50: "#eef8ff",
        100: "#d9efff",
        200: "#bce3ff",
        300: "#8ed3ff",
        400: "#59b8ff",
        500: "#3399ff",
        600: "#1b79f5",
        700: "#1463e1",
        800: "#174fb6",
        900: "#19458f",
        950: "#142b57"
      }
    },
    components: {
      Menu: {
        baseStyle: {
          list: {
            p: 1
          },
          item: {
            rounded: 4
          }
        }
      },
      Button: {
        defaultProps: {
          colorScheme: "blue"
        }
      }
    }
  },
  t({ colorScheme: "blue" })
), i = (e) => /* @__PURE__ */ f.jsx(r, { theme: { ...m, ...e.theme }, children: e.children });
export {
  i as RfsThemeProvider
};
