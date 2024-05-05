import {initProject1} from '~/p1';

const value = initProject1();

if (typeof value === 'string') {
  console.log(value.replace('init', 'check'));
} else {
  console.log(value);
}
