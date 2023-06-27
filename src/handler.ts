import { hoge } from '/opt/lib/hoge';
import { now } from '/opt/lib/now';
export const hello = async (event) => {
  console.log(hoge());
  console.log(now().format('YYYY-MM-DD'));
  return 'OK';
};
