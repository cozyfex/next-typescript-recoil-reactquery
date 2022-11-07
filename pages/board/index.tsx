import { ErrorBoundary } from 'react-error-boundary';
import { useRecoilState } from 'recoil';

import BoardListComponent from '@components/BoardListComponent';
import ErrorFallbackComponent from '@components/errors/ErrorFallbackComponent';
import WebLayout from '@layouts/web/WebLayout';
import { countSelectorState, sampleState } from '@states/sampleState';


const Index = () => {
  const [count, setCount] = useRecoilState(countSelectorState);

  return (
    <WebLayout>
      <div>
        <div>Board List</div>
        <div>{count}</div>

        <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
          <BoardListComponent />
        </ErrorBoundary>

      </div>
    </WebLayout>
  );
};

export default Index;
