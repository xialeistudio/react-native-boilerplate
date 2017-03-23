/**
 * @date 2017/3/23
 * @author xialeistudio<1065890063@qq.com>
 */
import React from 'react';
import dva from 'dva/mobile';
import { Toast } from 'antd-mobile';
import Home from './Home';

const app = dva({
  onError(e) {
    Toast.fail(e.message);
  },
});
// 根组件
app.router(() => <Home />);

export default app;
