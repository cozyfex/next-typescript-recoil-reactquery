import { useState } from 'react';
import { useRecoilState } from 'recoil';

import WebLayout from '@layouts/web/WebLayout';
import { countSelectorState, sampleState } from '@states/sampleState';


const Another = () => {
  const [sample, setSample] = useRecoilState(sampleState);
  const [count, setCount] = useRecoilState(countSelectorState);

  // useAppQueries<UserInterface>((user.isSuccess ? user.data.list : []).map(item =>
  //   userQuery(`/user/view/${item.userId}`, item.userId),
  // ));

  const decrease = () => setCount(count - 1);
  const setTitle = () => setSample({ ...sample, title: String(document.querySelector('input')?.value) });

  const [userListError, setUserListError] = useState(true);
  const [boardListError, setBoardListError] = useState(true);

  const resetUserList = () => {
    setUserListError(false);
  };

  const resetBoardList = () => {
    setBoardListError(false);
  };

  return (
    <WebLayout>
      <div>
        <div>Another Page</div>
        <div>{count}</div>
        <div>
          <button onClick={decrease}>Decrease</button>
        </div>
        <div>{sample.title}</div>
        <div>
          <input type="text" onChange={setTitle} />
        </div>
      </div>
    </WebLayout>
  );
};

export default Another;
