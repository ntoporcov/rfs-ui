import type { Meta, StoryObj } from "@storybook/react";
import logo from "../../storyAssets/rfsui.png";

import { AppsBar, AppsBarProps } from "./AppsBar";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Oracle Cloud/AppsBar",
  component: AppsBar,
  tags: ["autodocs"],
  args: {
    apps: [
      {
        name: "App 1",
        href: "https://something.com",
        image: logo,
        active: true,
      },
      {
        name: "App 2",
        href: "https://something.com",
        image: logo,
      },
      {
        name: "App 3",
        href: "https://something.com",
        image: logo,
      },
      {
        name: "App 4",
        href: "https://something.com",
        image: logo,
      },
    ],
  } as AppsBarProps,
} satisfies Meta<typeof AppsBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const AppBar: Story = {};

export const WithNav: Story = {
  args: {
    ...meta.args,
    navLinks: [
      { label: "Home", onClick: () => {}, active: true },
      { label: "Search", onClick: () => {} },
      { label: "Configurations", onClick: () => {} },
    ],
  } as AppsBarProps,
};
