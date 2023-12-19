import * as React from 'react';
import { FadeLoader } from 'react-spinners';
import MyPage from './MyPage';

function Exericse1_2() {
  return (
    <React.Suspense fallback={<FadeLoader color={'lightblue'} size={150} />}>
      <MyPage/>
    </React.Suspense>
  );
}

export default Exericse1_2;