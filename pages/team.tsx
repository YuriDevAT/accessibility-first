import Image from "next/image";
import Layout from '../components/layout'
import Container from '../components/container'
import Head from "next/head";

const title = "Team"

const Team = () => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <h1 className="mt-16 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">{title}</h1>
        <section className="mt-16 mb-32 max-w-4xl">
          <ul>
            <li className="flex flex-col md:flex-row items-center gap-x-8 mb-16 md:mb-0">
              <Image
                className="h-64 w-64 rounded-full block"
                src="/assets/authors/julia.jpg"
                alt="Julia Undeutsch"
                width="49"
                height="49"
              />
              <div>
                <h2 className='text-3xl mt-12 mb-4 leading-snug font-bold text-center md:text-left'>
                  Julia Undeutsch
                </h2>
                <p className="mb-4 font-mono text-lg text-center md:text-left dark:text-slate-200">
                  Founder
                </p>
                <p className="text-lg leading-relaxed my-6">
                  I am Web & UX Accessibility Specialist at Atos Austria.
                  After graduating University in Musicology and Japanese Studies in summer 2020, I started learning front-end development and specialized in the topic of web accessibility early on.
                  Since then, I take every opportunity to spread awareness on the topic by regularly creating content in form of writing blog articles and such.
                  Since 2022, I have been certified by IAAP as a <a href="https://www.accessibilityassociation.org/s/certified-professional" className="underline dark:text-slate-200">Professional in Accessibility Core Competencies (CPACC)</a>.
                </p>
              </div>
            </li>
            <li className="flex flex-col md:flex-row items-center gap-x-8">
              <Image
                className="h-64 w-64 rounded-full"
                src="/assets/authors/laura.jpg"
                alt=""
                width="49"
                height="49"
              />
              <div>
                <h2 className='text-3xl mt-12 mb-4 leading-snug font-bold text-center md:text-left'>
                  Laura Wissiak
                </h2>
                <p className="mb-4 font-mono text-lg text-center md:text-left dark:text-slate-200">
                  Lead UX Researcher
                </p>
                <p className="text-lg leading-relaxed my-6">
                  I am a UX researcher currently working on assistive tech for blind and visually impaired users.

                  My passion lies with all things accessibility, from easy language to assistive technology. Whatever the product, my goal is to eliminate as many obstacles as possible from it. Creating inclusive and comfortable experiences is what I strive for, both on and offline.

                  Besides the above, I bring a socio-cultural background to the table, through a BA in Japanese Studies, which taught me about cultural and social science, and not to forget communication, on- and offline, through curricula extensions in Social Media Communication as well as Transcultural Communication.
                </p>
              </div>
            </li>
          </ul>
        </section>
      </Container>
    </Layout >
  )
}

export default Team