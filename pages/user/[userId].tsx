import ErrorFallbackComponent from '@components/errors/ErrorFallbackComponent';
import UserListComponent from '@components/UserListComponent';
import { UserInterface } from '@interfaces/userInterface';
import WebLayout from '@layouts/web/WebLayout';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { ErrorBoundary } from 'react-error-boundary';

const UserDetail = ({ user }: { user: UserInterface }) => {
  const router = useRouter();
  const userId = router.query.userId as string;

  return (
    <WebLayout>
      <div>
        <div>User Detail</div>

        <div>ID: {user.userId}</div>
        <div>Name: {user.name}</div>
      </div>
    </WebLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userId = context.query.userId;
  const userInformation = await axios.get(`/user/view/${userId}`);

  return {
    props: {
      user: userInformation.data,
    },
  };
};

export default UserDetail;

