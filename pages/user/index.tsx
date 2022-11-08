import { useRecoilState } from 'recoil';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallbackComponent from '@components/errors/ErrorFallbackComponent';
import UserListComponent from '@components/UserListComponent';
import WebLayout from '@layouts/web/WebLayout';
import { countSelectorState, sampleState } from '@states/sampleState';


const Index = () => {
  const [count, setCount] = useRecoilState(countSelectorState);

  return (
    <WebLayout>
      <div>
        <div>User List</div>
        <div>{count}</div>

        <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
          <UserListComponent />
        </ErrorBoundary>

      </div>
    </WebLayout>
  );
};

export default Index;
