import type { Preview } from "@storybook/react";
import { Story } from "@storybook/blocks";
import RfsThemeProvider from "../src/lib/Providers/RfsThemeProvider";

const preview: Preview = {
  decorators: [
    (Story) => (
      <RfsThemeProvider>
        <Story />
      </RfsThemeProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
