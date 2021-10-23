/*
 * @Author : jaydon
 * @Date   : 2021-06-17 10:55
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
 */

import Vue from 'vue';
import _ from 'lodash';
import ls from 'local-storage';
import dayjs from 'dayjs';
import jsCookie from 'js-cookie';
import { addPrototype, parseContext } from './common';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');
dayjs.extend(relativeTime);

const context = require.context('./', false, /^(?!\.\/index).*\.js$/);
const utils = parseContext(context);

addPrototype('do', Object.assign(utils, _));
addPrototype('ls', ls);
addPrototype('dayjs', dayjs);
addPrototype('cookie', jsCookie);
addPrototype('event', new Vue());

module.exports = utils;
