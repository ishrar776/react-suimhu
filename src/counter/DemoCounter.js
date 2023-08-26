import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
const DemoCounter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return <div>Hellow israr {count}</div>;
};
export default DemoCounter;
