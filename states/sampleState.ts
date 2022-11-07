import { SampleInterface } from '@interfaces/sampleInterface';
import { atom, DefaultValue, selector } from 'recoil';
import { v1 } from 'uuid';

const sampleState = atom<SampleInterface>({
  key: `sampleState/${v1()}`,
  default: {
    count: 0,
    title: '',
  },
});

const countSelectorState = selector({
  key: `countState/${v1()}`,
  get: ({ get }) => ((get(sampleState).count)),
  set: ({ get, set }, count) => {
    if (typeof count === 'number') {
      set(sampleState, { ...get(sampleState), count });
    }
  },
});

export { sampleState, countSelectorState };
