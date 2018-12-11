import React from 'react';
import { storiesOf } from '@storybook/react';
import { Num } from './Num';

storiesOf('Button', module)
  .add('with text', () => <Num num={5} />)
  .add('with some emoji', () => <Num num={200} />);
