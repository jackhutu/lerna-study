// import { bighouse } from './bighouse';
// import house from '@study/house';

// export default function() {
//   console.log(bighouse() + 'hello' + house);
// }

import { capitalize } from '@study/house';

export default class Hello {
  msg: string;
  constructor(msg: string) {
    this.msg = capitalize(msg);
  }

  say(): string {
    return 'Hello, ' + this.msg;
  }
}
