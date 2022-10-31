import { addDecorator } from '@storybook/react';

import { Theme } from '../../src/app/providers/ThemeProvider';
import {
  I18nextDecorator,
  RouterDecorator,
  StyleDecorator,
  ThemeDecorator,
  TranslationDecorator,
} from '../../src/shared/config/storybook';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'ru', title: 'Russian' },
      ],
      title: 'Translate',
    },
  },
};

addDecorator(I18nextDecorator);
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
