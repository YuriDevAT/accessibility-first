export type Webinar = {
  title: string;
  date: string;
  time: string;
  event?: `https://${string}`;
  video?: `https://youtu.be/${string}`;
  slides?: `https://docs.google.com/presentation/${string}`;
  transcript?: `https://drive.google.com/file/${string}`;
};
