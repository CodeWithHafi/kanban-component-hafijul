import type { Preview } from '@storybook/react'
// This line imports your global Tailwind styles into Storybook
import '../src/index.css' 

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f8f9fa' }, // neutral-50
        { name: 'dark', value: '#1a1a1a' },  // neutral-900
      ],
    },
  },
}

export default preview