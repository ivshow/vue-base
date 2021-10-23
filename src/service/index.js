/*
 * @Author : jaydon
 * @Date   : 2021-06-17 21:41
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
 */

import http from './http';
import { parseContext, addPrototype } from '@/utils';

const context = require.context('./apis', false, /\.js$/);
const apis = parseContext(context);

// 挂载api
addPrototype('api', apis);
addPrototype('http', http);

module.exports = apis;
