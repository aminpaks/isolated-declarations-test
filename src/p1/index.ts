import {initProject2} from '~/p2';

export function initProject1(params?: string) {
  console.log(initProject2);
  if (!params?.length) {
    return 50;
  }
  return 'initProject1';
}
