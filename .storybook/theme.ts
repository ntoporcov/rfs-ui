import { create } from "@storybook/theming/create";
import logo from "../src/storyAssets/rfsui.png";
export default create({
  base: "light",
  brandTitle: "RFS UI",
  brandUrl: "/",
  brandImage: logo,
  brandTarget: "_self",
});
