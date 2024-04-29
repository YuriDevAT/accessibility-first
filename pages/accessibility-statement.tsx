import Layout from '../components/layout'
import Container from '../components/container'
import Head from "next/head";

const title = "Accessibility Statement"

const AccessibilityStatement = () => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <h1 className="mt-16 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">{title}</h1>
        <section className="mt-16 mb-32 max-w-4xl">
          <p className="text-lg leading-relaxed my-6">This is an accessibility statement from Accessibility First.</p>
          <h2 className='text-3xl mt-12 mb-4 leading-snug font-bold'>Measures to support accessibility</h2>
          <p className="text-lg leading-relaxed my-6">Accessibility First takes the following measures to ensure accessibility of Accessibility First:</p>
          <ul className="text-lg leading-relaxed my-6 list-disc list-inside">
            <li>Include accessibility as part of our mission statement.</li>
            <li>Include accessibility throughout our internal policies.</li>
            <li>Integrate accessibility into our procurement practices.</li>
            <li>Provide continual accessibility training for our staff.</li >
            <li>Assign clear accessibility goals and responsibilities.</li >
            <li>Employ formal accessibility quality assurance methods.</li >
          </ul>
          <h2 className='text-3xl mt-12 mb-4 leading-snug font-bold'>Conformance status</h2>
          <p className="text-lg leading-relaxed my-6">
            The <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines (WCAG)</a> defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Accessibility First is fully conformant with WCAG 2.1 level AA. Fully conformant means that the content fully conforms to the accessibility standard without any exceptions.
          </p>
          <h2 className='text-3xl mt-12 mb-4 leading-snug font-bold'>Feedback</h2>
          <p className="text-lg leading-relaxed my-6">We welcome your feedback on the accessibility of Accessibility First. Please let us know if you encounter accessibility barriers on Accessibility First:</p>
          <ul className="text-lg leading-relaxed my-6">
            <li>LinkedIn: <a href="https://www.linkedin.com/company/accessibilityfirst/" className="underline">@company/accessibilityfirst</a></li>
            <li>Instagram: <a href="https://www.instagram.com/accessibilityfirst/" className="underline">@accessibilityfirst</a></li>
          </ul >

          <p className="text-lg leading-relaxed my-6">We try to respond to feedback within 2 business days.</p>
          <h2 className='text-3xl mt-12 mb-4 leading-snug font-bold'>Date</h2>
          <p className="text-lg leading-relaxed my-6">
            This statement was created on 31 August 2023 using the <a href="https://www.w3.org/WAI/planning/statements/" className="underline">W3C Accessibility Statement Generator Tool</a>.
          </p>
        </section>
      </Container>
    </Layout >
  )
}

export default AccessibilityStatement