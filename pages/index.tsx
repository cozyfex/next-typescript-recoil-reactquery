import { useRecoilState } from 'recoil';

import WebLayout from '@layouts/web/WebLayout';
import { countSelectorState, sampleState } from '@states/sampleState';


const Index = () => {
  const [sample, setSample] = useRecoilState(sampleState);
  const [count, setCount] = useRecoilState(countSelectorState);

  const increase = () => setCount(count + 1);
  const setTitle = () => setSample({ ...sample, title: String(document.querySelector('input')?.value) });

  return (
    <WebLayout>
      <div>
        <div>Index Page</div>
        <div>{count}</div>
        <div>
          <button onClick={increase}>Increase</button>
        </div>
        <div>{sample.title}</div>
        <div>
          <input type="text" />
          <button onClick={setTitle}>Change title</button>
        </div>
      </div>
    </WebLayout>
  );
};

export default Index;
