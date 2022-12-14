import Link from 'next/link';
import React from 'react';

import useUserHttp from '@hooks/queries/useUserQuery';
import { ListInterface } from '@interfaces/listInterface';
import { UserInterface } from '@interfaces/userInterface';


const UserListComponent = () => {
  const userHttp = useUserHttp();

  const {
    data,
    error,
    isError,
    isFetched,
    isFetching,
    isLoading,
    isStale,
    isSuccess,
    remove,
    status,
  } = userHttp.get<ListInterface<UserInterface[]>>('/user/list', 'list');

  return (
    <React.Fragment>
      {isSuccess ?
        <div>
          <table>
            <thead>
            <tr>
              <th>No</th>
              <th>ID</th>
              <th>name</th>
            </tr>
            </thead>
            <tbody>
            {data.list.map((item, index) =>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <Link href={`/user/${item.userId}`}>
                    {item.userId}
                  </Link>
                </td>
                <td>{item.name}</td>
              </tr>,
            )}
            </tbody>
          </table>
        </div> : null
      }
    </React.Fragment>
  );
};

export default UserListComponent;
