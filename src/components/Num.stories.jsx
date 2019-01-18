import React from 'react';
import { storiesOf } from '@storybook/react';
import { Num } from './Num';

storiesOf('Button', module)
  .add('with text', () => <Num num='azaza' />)
  .add('with number', () => <Num num={1} />);
