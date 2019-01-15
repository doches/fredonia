import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(
  withOptions({
    name: 'Fredonia',
    url: 'https://quailhq.com'
  })
);

addDecorator(
  withBackgrounds([
    { name: 'white', value: '#fefefe', default: true },
    { name: 'blue', value: '#02485b' },
  ])
);

addDecorator(withKnobs);

const req = require.context('../src/components', true, /\.?story\.tsx/)
const loadStories = () => req.keys().forEach((filename) => req(filename))

configure(loadStories, module);
