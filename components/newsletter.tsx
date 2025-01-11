import Link from "next/link";

const Newsletter = () => {

  return (
    <section className="mb-32 sm:p-12 text-center">
      <div className="border lg:w-4/5 px-3 py-6 md:p-16 mx-auto h-auto">
        <h2 className="text-4xl mb-4">Subscribe to A11y News newsletter!</h2>
        <p className="text-lg mb-8">Never miss an event again by subscribing to Laura's newsletter A11y News. <br />Events worldwide, in Austria, in person or online, in English or German - Laura, keeps you in the loop.</p>
        <div className="p-4">
          <Link href="https://a11ynews.substack.com/" className="bg-purple-500 p-3 inline-block focus:outline dark:outline-white outline-slate-950 outline-offset-1 text-slate-950">Subscribe to A11y News Newsletter on Substack</Link>
        </div>
      </div>
    </section>
  )
};

export default Newsletter;
