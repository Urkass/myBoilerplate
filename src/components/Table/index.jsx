import React from 'react';

import style from './index.pcss';

export const Table = props => (
  <div className={style.table}>{props.children}</div>
);
