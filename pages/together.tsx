import { ErrorBoundary } from 'react-error-boundary';
import { useRecoilState } from 'recoil';

import WebLayout from '@layouts/web/WebLayout';
import { countSelectorState } from '@states/sampleState';
import BoardListComponent from '@components/BoardListComponent';
import ErrorFallbackComponent from '@components/errors/ErrorFallbackComponent';
import UserListComponent from '@components/UserListComponent';

const Together = () => {
  const [count, setCount] = useRecoilState(countSelectorState);

  return (
    <WebLayout>
      <div>
        <div>Together Page</div>
        <div>{count}</div>

        <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
          <UserListComponent />
        </ErrorBoundary>

        <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
          <BoardListComponent />
        </ErrorBoundary>
      </div>
    </WebLayout>
  );
};

export default Together;
