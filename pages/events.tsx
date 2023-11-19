import Layout from '../components/layout'
import Container from '../components/container'
import Head from "next/head";

const title = "Events"

const Events = () => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <h1 className="mt-16 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">{title}</h1>
        <section className="mt-16 mb-32 max-w-4xl">
          <p className="text-xl leading-relaxed my-6">We are available for motivational and informative speaking. We love to write about your event, create and share content on all major platforms like LinkedIn, Instagram, Twitter and more.</p>
          <h2 className='text-3xl mt-12 mb-4 leading-snug font-bold text-center md:text-left'>Upcoming Events</h2>
          <ul className="text-lg leading-relaxed my-6">
            <li>
              <h3 className="text-2xl mt-8 mb-4 leading-snug font-semibold">🗣 How to keep up with tech knowledge output? Focus accessibility (Julia)</h3>
              <p className="mb-4 font-mono text-lg text-center md:text-left">November 28, 2023, Discussion @Girlcode Break Time</p>
            </li>
            <li>
              <h3 className="text-2xl mt-8 mb-4 leading-snug font-semibold">🎦 Getting started with designing for Web Accessibility (Julia)</h3>
              <p className="mb-4 font-mono text-lg text-center md:text-left">December 01, 2023, Talk @GDE DevFest Calabar</p>
            </li>
            <li>
              <h3 className="text-2xl mt-8 mb-4 leading-snug font-semibold">🗣 Die blinde User Experience bei Hope Tech Plus (Laura)</h3>
              <p className="mb-4 font-mono text-lg text-center md:text-left">January 11, 2024, @Discussion Drive CX Breakfast</p>
            </li>
          </ul>
          <h2 className='text-3xl mt-12 mb-4 leading-snug font-bold text-center md:text-left'>Past Events</h2>
          <ul className="text-lg leading-relaxed my-6">
            <li>
              <h3 className="text-2xl mt-8 mb-4 leading-snug font-semibold">🗣 Devs need to learn more about accessibility, but how? (Julia)</h3>
              <p className="mb-4 font-mono text-lg text-center md:text-left">October 17, 2023, Twitter Space @SpaghettiSpaces</p>
            </li>
            <li>
              <h3 className="text-2xl mt-8 mb-4 leading-snug font-semibold">🗣 GAAD – Global Accessibility Awareness Day (Julia)</h3>
              <p className="mb-4 font-mono text-lg text-center md:text-left">May 18, 2023, Panel Discussion @Atos</p>
            </li>
            <li>
              <h3 className="text-2xl mt-8 mb-4 leading-snug font-semibold">🗣 Self-Learning to Start Your Coding Career (Julia)</h3>
              <p className="mb-4 font-mono text-lg text-center md:text-left">Jannuary 11, 2023, Talk @CodeSmith</p>
            </li>
            <li>
              <h3 className="text-2xl mt-8 mb-4 leading-snug font-semibold">🎦 Human (soft) skills for developers (Julia)</h3>
              <p className="mb-4 font-mono text-lg text-center md:text-left">December 20, 2022, Talk @daily.dev</p>
            </li>
            <li>
              <h3 className="text-2xl mt-8 mb-4 leading-snug font-semibold">🎦 Myths & Misconception about Accessibility (Julia)</h3>
              <p className="mb-4 font-mono text-lg text-center md:text-left">September 13, 2022, Talk @Frontend Foxes</p>
            </li>
            <li>
              <h3 className="text-2xl mt-8 mb-4 leading-snug font-semibold">🗣 Who is responsible for accessibility? (Julia, Laura)</h3>
              <p className="mb-4 font-mono text-lg text-center md:text-left">June 08, 2022, Q&A @A1 Telekom</p>
            </li>
            <li>
              <h3 className="text-2xl mt-8 mb-4 leading-snug font-semibold">🗣 From Poker dealer to coder (Julia)</h3>
              <p className="mb-4 font-mono text-lg text-center md:text-left">April 04, 2022, Q&A @EddieJaoude</p>
            </li>
          </ul>
        </section>
      </Container>
    </Layout >
  )
}

export default Events