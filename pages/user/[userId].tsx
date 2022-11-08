import { GetServerSideProps } from 'next';
import axios from 'axios';

import { UserInterface } from '@interfaces/userInterface';
import WebLayout from '@layouts/web/WebLayout';


const UserDetail = ({ user }: { user: UserInterface }) => {

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

