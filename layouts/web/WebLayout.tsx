import React, { useEffect, Suspense } from 'react';
import { useRecoilState } from 'recoil';
import { InfinitySpin } from 'react-loader-spinner';

import BaseLayout from '@layouts/BaseLayout';
import { sampleState } from '@states/sampleState';

import MenuComponent from '@components/MenuComponent';
// const MenuComponent = React.lazy(() => import('@components/MenuComponent'));

const WebLayout = ({ children }: { children: React.ReactNode }) => {
  const [sample, setSample] = useRecoilState(sampleState);

  useEffect(() => {
    if (sample.title) document.title = sample.title;
  }, [sample.title]);

  return (
    <BaseLayout>
      <MenuComponent />
      {children}
    </BaseLayout>
  );
};

export default WebLayout;
