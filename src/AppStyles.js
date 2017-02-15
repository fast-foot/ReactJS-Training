import { StyleSheet } from 'aphrodite/no-important';

import { blackSquare } from './SquareStyles';

export default StyleSheet.create({
  container: {
    background: 'orange'
  },
  square: {
    ...blackSquare,
    width: '50px',
    height: '50px'
  }
});
