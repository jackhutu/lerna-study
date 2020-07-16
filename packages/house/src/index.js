import w from 'window';
import { isObject } from 'lodash-es';

export default function house() {
  console.log('house');
  return isObject(w) + 'house';
}
