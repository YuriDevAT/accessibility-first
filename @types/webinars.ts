export type Webinar = {
  title: string;
  date: string;
  time: string;
  event?: `https://${string}`;
  video?: `https://www.youtube.com/${string}`;
  slides?: `https://docs.google.com/presentation/${string}`;
};
