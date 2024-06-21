import useTranslation from 'next-translate/useTranslation';
import Layout from '../components/layout';
import Container from '../components/container';
import Head from 'next/head';
import { Event } from '../@types/events';
import { events } from '../data/events';

const title = 'Events';

const Events = () => {
  const { t } = useTranslation('events');
  const currentDate = new Date();

  const upcomingEvents: Event[] = events.filter(
    (event) => new Date(event.date) >= currentDate
  ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const pastEvents: Event[] = events.filter(
    (event) => new Date(event.date) < currentDate
  );

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <h1 className="mt-16 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
          {t('title')}
        </h1>
        <section className="mt-16 mb-32 max-w-4xl">
          <p className="text-xl leading-relaxed my-6">{t('p1')}</p>
          <p className="text-xl leading-relaxed my-6">{t('p2')}</p>
          <h2 className="text-3xl mt-12 mb-4 leading-snug font-bold text-center md:text-left">
            {t('h2-1')}
          </h2>
          <ul className="text-lg leading-relaxed my-6 dark:text-slate-800">
            {upcomingEvents.map((event, index) => (
              <li
                key={event.date}
                className={`${
                  event.speaker === 'Julia'
                    ? 'bg-blue-200 dark:bg-blue-500'
                    : event.speaker === 'Laura'
                      ? 'bg-purple-200 dark:bg-purple-500'
                      : 'bg-yellow-200 dark:bg-yellow-500'
                } py-1 px-4 rounded-md my-3`}
              >
                <h3 className="text-2xl mt-6 mb-4 leading-snug font-semibold dark:text-inherit">
                  <event.icon
                    size={20}
                    className="inline"
                    aria-labelledby={event.type}
                  />{' '}
                  {event.title} ({event.speaker})
                </h3>
                <p className="mb-4 font-mono text-lg text-center md:text-left">
                  {event.date}, {event.type} @{event.location}
                </p>
              </li>
            ))}
          </ul>
          <h2 className="text-3xl mt-12 mb-4 leading-snug font-bold text-center md:text-left">
            {t('h2-2')}
          </h2>
          <ul className="dark:text-slate-800">
            {pastEvents.map((event, index) => (
              <li
                key={event.date}
                className={`${
                  event.speaker === 'Julia'
                    ? 'bg-blue-200 dark:bg-blue-500'
                    : event.speaker === 'Laura'
                      ? 'bg-purple-200 dark:bg-purple-500'
                      : 'bg-yellow-200 dark:bg-yellow-500'
                } py-1 px-4 rounded-md my-3`}
              >
                <h3 className="text-2xl mt-6 mb-4 leading-snug font-semibold dark:text-inherit">
                  <event.icon
                    size={20}
                    className="inline"
                    aria-labelledby={event.type}
                  />{' '}
                  {event.title} ({event.speaker})
                </h3>
                <p className="mb-4 font-mono text-lg text-center md:text-left">
                  {event.date}, {event.type} @{event.location}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </Layout>
  );
};

export default Events;
