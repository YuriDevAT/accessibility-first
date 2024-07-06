import { IconType } from 'react-icons/lib';

export type Event = {
  title: string;
  icon: IconType;
  date: string;
  speaker: string;
  type: string;
  location: string;
};
