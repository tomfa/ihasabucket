import { ReactNode } from 'react';

export type FAQuestion = {
  id: string;
  title: string;
  answer: ReactNode | string;
};
