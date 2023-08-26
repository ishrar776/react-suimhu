import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
const DemoCounter = () => {
  const count = useSelector((state) => state.counter1.candidateName);
  const dispatch = useDispatch();
  return <div>Hellow {count}</div>;
};
export default DemoCounter;
