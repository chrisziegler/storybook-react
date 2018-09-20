import React from 'react';
import { wInfo } from './utils';

import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { text, boolean } from '@storybook/addon-knobs/react';

storiesOf('Button', module)
  .addWithJSX(
    'with background',
    wInfo(`
    description of the component

    ~~~js
    <Button>Click Here</Button>
    ~~~
    `)(() => <Button bg="palegoldenrod">Hello World</Button>)
  )
  .addWithJSX('with background 2', () => (
    <Button disabled={boolean('disabled', false)}>
      {text('text', 'Hello World')}
    </Button>
  ));
