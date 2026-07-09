import type { Preview } from "@storybook/nextjs";
import { robotoFont } from "../src/app/fonts";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        className={`${robotoFont.className} bg-zinc-900 text-lg font-light p-8 min-h-screen w-full`}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
