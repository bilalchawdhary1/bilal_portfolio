import {useState} from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import TransitionEffect from "@/components/TransitionEffect";
import {useRouter} from "next/router";
import {GithubIcon, LinkedInIcon} from "@/components/Icons";

const MailIcon = ({className = "h-full w-full"}) => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.8'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
    focusable='false'
    className={className}
  >
    <rect x='3' y='5' width='18' height='14' rx='2' />
    <path d='m3.5 7 8.5 6 8.5-6' />
  </svg>
);

const contactMethods = [
  {
    label: "Email",
    value: "chbilalc627@gmail.com",
    href: "mailto:chbilalc627@gmail.com",
    Icon: MailIcon,
  },
  {
    label: "LinkedIn",
    value: "bilal-fullstack",
    href: "https://www.linkedin.com/in/bilal-fullstack",
    Icon: LinkedInIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: "bilalchawdhary1",
    href: "https://github.com/bilalchawdhary1",
    Icon: GithubIcon,
    external: true,
  },
];

const goodFit = [
  "AI applications",
  "LLM integrations",
  "Chatbots and agents",
  "Python and FastAPI backends",
];

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
          "We couldn't send your message. Please try again or email chbilalc627@gmail.com directly.",
        );
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);
      setSubmissionError(
        "We couldn't send your message. Please try again or email chbilalc627@gmail.com directly.",
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
            <p className='eyebrow'>Get in touch</p>
            <h1 className='text-balance text-5xl font-semibold tracking-tight sm:text-4xl'>
              Let’s talk about your project.
            </h1>
            <p className='mt-4 max-w-xl text-base leading-7 text-dark/70 dark:text-light/70'>
              Send a short note about what you are building, or reach out
              directly using any of the links below.
            </p>
          </header>

          <section className='grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-6 lg:grid-cols-1'>
            <div className='surface-card flex flex-col rounded-2xl border p-7 sm:p-5'>
              <h2 className='text-xl font-semibold tracking-tight'>
                Let’s build something useful
              </h2>
              <p className='mt-4 text-sm leading-6 text-dark/70 dark:text-light/70'>
                Have a product idea or need to add AI capabilities to an
                existing product? Get in touch to discuss AI applications, LLM
                integrations, intelligent workflows, or Python backend work.
              </p>

              <ul className='mb-7 mt-7 space-y-3'>
                {contactMethods.map(({label, value, href, Icon, external}) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className='group flex min-h-14 items-center gap-3 rounded-xl border border-dark/10 px-3.5 py-2.5 transition-[border-color,background-color] duration-200 hover:border-primary/40 hover:bg-primary/[0.04] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:border-light/10 dark:hover:border-primaryDark/50 dark:hover:bg-primaryDark/[0.06] dark:focus-visible:ring-primaryDark'
                    >
                      <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-dark/10 text-dark dark:border-light/10 dark:text-light'>
                        <Icon className='h-[1.1rem] w-[1.1rem]' />
                      </span>
                      <span className='min-w-0 flex-1'>
                        <span className='block text-xs font-medium text-dark/55 dark:text-light/55'>
                          {label}
                        </span>
                        <span className='block truncate text-sm font-medium'>
                          {value}
                        </span>
                      </span>
                      <span
                        aria-hidden='true'
                        className='text-dark/40 transition-transform duration-200 group-hover:translate-x-0.5 dark:text-light/40'
                      >
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className='mt-auto border-t border-dark/10 pt-6 dark:border-light/10'>
                <p className='mb-3 font-mono text-[0.7rem] font-semibold uppercase tracking-wider text-dark/55 dark:text-light/55'>
                  Good fit for
                </p>
                <ul className='flex flex-wrap gap-2'>
                  {goodFit.map(item => (
                    <li key={item} className='chip chip-lg'>
                      {item}
                    </li>
                  ))}
                </ul>
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

                <button type='submit' className='btn btn-primary'>
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
