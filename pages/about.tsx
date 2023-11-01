import Layout from '../components/layout'
import Container from '../components/container'

const About = () => {
  return (
    <Layout>
      <Container>
        <section className="mt-16 mb-32">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left max-w-3xl">Welcome to Accessibility <span className="text-blue-800">First</span></h1>
          <p className="text-xl leading-relaxed my-6 max-w-3xl">
            Accessibility First is a collection of insights, learnings, and experiences from industry professionals / leaders to spread awareness and help you erradicate invisible barriers.
          </p>
          <p className="text-xl leading-relaxed my-6 max-w-3xl">
            Breaking into accessibility can be overwhelming. It is a broad and always-evolving field. There is no simple checklist to make your products inclusive. Accessibility is about learning and developing empathy for life experiences different from your own. Developing empathy is our whole thing.
          </p>
          <h2 className='text-3xl mt-12 mb-4 leading-snug font-bold text-center md:text-left'>
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed my-6 max-w-3xl">
            Bridging the gap between designers, developers and testers by guiding them creating web content with accessibility in mind to make everyone aware of who actually is responsible for accessibility: <b className="uppercase">we all are!</b>
          </p>
          <h2 className='text-3xl mt-12 mb-4 leading-snug font-bold text-center md:text-left'>
            Our Vision
          </h2>
          <p className="text-lg leading-relaxed my-6 max-w-3xl">
            Interdisciplinary teams, working together to make their respective corners of the World Wide Web a pleasant experience for all users.
          </p>
          <h2>About Accessibility</h2>
          <p className="text-lg leading-relaxed my-6 max-w-3xl">
            Accessibility is a team effort. Every role contributes a part to the puzzle to build a good user experience.
          </p>
          <h3 className="text-2xl mt-8 mb-4 leading-snug font-semibold">UX Design</h3>
          <p className="text-lg leading-relaxed my-6 max-w-3xl">
            Learn about what it means to create accessible design, how to avoid common mistakes and what to keep in mind when creating a design experience for everyone.
          </p>
          <h3 className="text-2xl mt-8 mb-4 leading-snug font-semibold">Web Development</h3>
          <p className="text-lg leading-relaxed my-6 max-w-3xl">
            There are so many accessible in-build features already called semantic HTML already. So why not learn about all of them and use them in the right way?
          </p>
          <h3 className="text-2xl mt-8 mb-4 leading-snug font-semibold">QA Testing</h3>
          <p className="text-lg leading-relaxed my-6 max-w-3xl">
            There is much more than cross browser / device testing. Learn how to navigate a website using only the keyboard and how to get started with a screen reader.
          </p>

        </section>
      </Container>
    </Layout >
  )
}

export default About