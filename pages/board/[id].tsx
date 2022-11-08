import { useRouter } from 'next/router';

import { BoardInterface } from '@interfaces/boardInterface';
import useBoardHttp from '@hooks/queries/useBoardQuery';
import WebLayout from '@layouts/web/WebLayout';


const BoardDetail = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const boardHttp = useBoardHttp();

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
  } = boardHttp.get<BoardInterface>(`/board/view/${id}`, id);


  return (
    <WebLayout>
      <div>
        {isSuccess &&
          <div>
            <div>Title : ${data.title}</div>
            <div>Read: ${data.readCount}</div>
            <div>Name: ${data.name}</div>
          </div>
        }
      </div>
    </WebLayout>
  );
};

export default BoardDetail;
