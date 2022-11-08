import { useRecoilState } from 'recoil';
import { ErrorBoundary } from 'react-error-boundary';

import WebLayout from '@layouts/web/WebLayout';
import { countSelectorState } from '@states/sampleState';
import BoardListComponent from '@components/BoardListComponent';
import ErrorFallbackComponent from '@components/errors/ErrorFallbackComponent';


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
