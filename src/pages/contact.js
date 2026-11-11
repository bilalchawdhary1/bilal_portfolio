import {useState} from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TransitionEffect from "@/components/TransitionEffect";
import {useRouter} from "next/router";

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submissionError, setSubmissionError] = useState("");

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmissionError("");

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/thanks");
      } else {
        console.error("Form submission failed!", await response.text());
        setSubmissionError(
          "We couldn't send your message. Please try again or email chbilalc627@gmail.com directly."
        );
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);
      setSubmissionError(
        "We couldn't send your message. Please try again or email chbilalc627@gmail.com directly."
      );
    }
  };

  return (
    <>
      <SEO
        title='Contact Muhammad Bilal | AI and Python Development'
        description='Contact Muhammad Bilal about AI application development, LLM integrations, chatbots, and Python backend projects.'
        path='/contact'
      />

      <TransitionEffect />
      <main className='text-dark dark:text-light'>
        <Layout className='!pb-20'>
          <header className='mb-10 max-w-3xl'>
            <p className='mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary dark:text-primaryDark'>
              Get in touch
            </p>
            <h1 className='text-5xl font-bold tracking-tight sm:text-4xl'>
              Let’s talk about your project.
            </h1>
          </header>

          <section className='grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-6 lg:grid-cols-1'>
            <div className='surface-card rounded-2xl border p-7 sm:p-5'>
              <h2 className='text-xl font-bold'>Let’s build something useful</h2>
              <p className='mt-4 text-sm leading-6 text-dark/70 dark:text-light/70'>
                Have a product idea or need to add AI capabilities to an
                existing product? Get in touch to discuss AI applications, LLM
                integrations, intelligent workflows, or Python backend work.
              </p>
              <div className='mt-7 flex flex-col items-start gap-3 text-sm font-medium'>
                <a
                  className='rounded-md underline decoration-dark/25 underline-offset-4 transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:decoration-light/25 dark:hover:text-primaryDark dark:focus-visible:ring-primaryDark'
                  href='mailto:chbilalc627@gmail.com'
                >
                  chbilalc627@gmail.com
                </a>
                <a
                  className='rounded-md underline decoration-dark/25 underline-offset-4 transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:decoration-light/25 dark:hover:text-primaryDark dark:focus-visible:ring-primaryDark'
                  href='https://www.linkedin.com/in/bilal-fullstack'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  LinkedIn
                </a>
                <a
                  className='rounded-md underline decoration-dark/25 underline-offset-4 transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:decoration-light/25 dark:hover:text-primaryDark dark:focus-visible:ring-primaryDark'
                  href='https://github.com/bilalchawdhary1'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className='surface-card rounded-2xl border p-7 sm:p-5'>
              <form
                name='contact-form'
                method='POST'
                onSubmit={handleSubmit}
                className='space-y-5'
              >
                <input type='hidden' name='form-name' value='contact-form' />
                <p className='hidden'>
                  <label>
                    Name
                    <input name='bot-field' />
                  </label>
                </p>

                <div>
                  <label
                    htmlFor='name'
                    className='mb-2 block text-sm font-medium'
                  >
                    Your name
                  </label>
                  <input
                    id='name'
                    type='text'
                    name='name'
                    required
                    autoComplete='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full rounded-lg border border-dark/15 bg-white/60 px-4 py-3 text-sm text-dark dark:border-light/20 dark:bg-black/15 dark:text-light'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='mb-2 block text-sm font-medium'
                  >
                    Email address
                  </label>
                  <input
                    id='email'
                    type='email'
                    name='email'
                    required
                    autoComplete='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full rounded-lg border border-dark/15 bg-white/60 px-4 py-3 text-sm text-dark dark:border-light/20 dark:bg-black/15 dark:text-light'
                  />
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='mb-2 block text-sm font-medium'
                  >
                    How can I help?
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    required
                    rows='5'
                    value={formData.message}
                    onChange={handleChange}
                    className='w-full resize-y rounded-lg border border-dark/15 bg-white/60 px-4 py-3 text-sm text-dark dark:border-light/20 dark:bg-black/15 dark:text-light'
                  />
                </div>

                <button
                  type='submit'
                  className='inline-flex min-h-11 items-center justify-center rounded-lg border border-dark bg-dark px-5 py-3 text-sm font-semibold text-light transition-[transform,background-color,color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-transparent hover:text-dark hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:border-light dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:focus-visible:ring-primaryDark'
                >
                  Send message
                </button>
                {submissionError && (
                  <p
                    className='text-sm font-medium text-red-700 dark:text-red-300'
                    role='alert'
                  >
                    {submissionError}
                  </p>
                )}
              </form>
            </div>
          </section>
        </Layout>
      </main>
    </>
  );
}
