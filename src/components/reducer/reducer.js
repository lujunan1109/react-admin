/*
 * @Author: your name
 * @Date: 2020-10-26 19:41:49
 * @LastEditTime: 2020-10-26 20:44:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ting_ge_blogd:\项目管理\react-admin\react-admin\src\components\reducer\reducer.js
 */
import React, { useReducer, useEffect } from "react";

const initialState = {
  count: 0,
  step: 1,
};

function reducer(state, action) {
  const { count, step } = state;
  if (action.type === 'tick') {
    return { count: count + step, step };
  } else if (action.type === 'step') {
    return { count, step: action.step };
  } else {
    throw new Error();
  }
}
export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <>
      <h1>{count}</h1>
      <input value={step} onChange={e => {
        dispatch({
          type: 'step',
          step: Number(e.target.value)
        });
      }} />
      <p>和{count+step}</p>
    </>
  );
}