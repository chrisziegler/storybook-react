import React from 'react';
import { withInfo } from '@storybook/addon-info';

import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { color } from '@storybook/addon-knobs/react';

storiesOf('Button', module)
  .addWithJSX(
    'with background',
    withInfo({
      styles: {
        header: {
          h1: {
            color: 'orangered'
          }
        }
      },
      text: `
    description of the component
    ~~~js
    <Button>Click Here</Button>
    ~~~
    `
    })(() => <Button bg="palegoldenrod">Hello World</Button>)
  )
  .addWithJSX(
    'with background 2',
    withInfo('description of the text for button 2')(() => (
      <Button bg={color('bg', 'green', 'group1')}>Hello World2</Button>
    ))
  );
