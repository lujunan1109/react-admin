/*
 * @Author: your name
 * @Date: 2020-10-26 20:25:06
 * @LastEditTime: 2020-10-26 20:46:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ting_ge_blogd:\项目管理\react-admin\react-admin\src\components\componentProps\index.js
 */
import React, { useReducer } from "react";
import Count from './child'
// 这里也需要export
export const StoreDispatch = React.createContext(null);
const initialState = {
  count: 0,
  step: 1,
  sum: 0,
};

function reducer(state, action) {
  const { count, step, sum } = state;
  switch (action.type) {
    case 'tick':
      return { sum,step,count };
    case 'step':
      return { count, step: action.step ,sum};
      case 'sum':
          return {sum: count+step,step,count:sum}
    default:
      throw new Error();
  }
}
export default function Counter() {
  // 提示：`dispatch` 不会在重新渲染之间变化
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreDispatch.Provider value={dispatch}>
      <Count state={state} />
    </StoreDispatch.Provider>
  );
}