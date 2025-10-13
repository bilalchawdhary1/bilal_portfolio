"use client";

import {motion} from "framer-motion";
import {useInView} from "../hooks/useInView";
import {useState} from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const Contact = () => {
  const {ref: inViewRef, isInView} = useInView({once: true, margin: "-100px"});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Reset form
    setFormData({name: "", email: "", subject: "", message: ""});
    setIsSubmitting(false);

    // Show success message (you can implement actual form submission here)
    alert("Thank you for your message! I'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "chbilalc627@gmail.com",
      href: "mailto:chbilalc627@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Lahore, Pakistan",
      href: null,
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/bilalchawdhary1",
      href: "https://github.com/bilalchawdhary1",
    },
  ];

  return (
    <section
      id='contact'
      className='py-24 md:py-28 bg-gray-50 dark:bg-gray-950 scroll-mt-24 border-t border-gray-200 dark:border-gray-800'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          ref={inViewRef}
          initial={{opacity: 0, y: 50}}
          animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
          transition={{duration: 0.8}}
          className='text-center mb-12 md:mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
            Get In Touch
          </h2>
          <div className='w-24 h-1 bg-indigo-600 mx-auto mb-8'></div>
          <p className='text-lg md:text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto'>
            Have a project in mind or just want to chat? I'd love to hear from
            you. Let's create something amazing together!
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Contact Information */}
          <motion.div
            initial={{opacity: 0, x: -50}}
            animate={isInView ? {opacity: 1, x: 0} : {opacity: 0, x: -50}}
            transition={{duration: 0.8, delay: 0.2}}
            className='space-y-8'
          >
            <div>
              <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                Let's Connect
              </h3>
              <p className='text-lg text-gray-600 dark:text-gray-300 mb-8'>
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                I'll try my best to get back to you!
              </p>
            </div>

            {/* Contact Details */}
            <div className='space-y-6'>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{opacity: 0, y: 20}}
                  animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                  transition={{duration: 0.6, delay: 0.4 + index * 0.1}}
                  className='flex items-center space-x-4'
                >
                  <div className='w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center'>
                    <info.icon className='text-indigo-600' size={24} />
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900 dark:text-white'>
                      {info.title}
                    </h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={
                          info.href.startsWith("http") ? "_blank" : "_self"
                        }
                        rel={
                          info.href.startsWith("http")
                            ? "noopener noreferrer"
                            : ""
                        }
                        className='text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300'
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className='text-gray-600 dark:text-gray-300'>
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
              transition={{duration: 0.6, delay: 0.7}}
              className='pt-6'
            >
              <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                Follow Me
              </h4>
              <div className='flex space-x-4'>
                <motion.a
                  href='https://github.com/bilalchawdhary1'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{scale: 1.1, y: -2}}
                  whileTap={{scale: 0.9}}
                  className='w-10 h-10 bg-gray-200 dark:bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors duration-300'
                >
                  <Github
                    className='text-gray-600 dark:text-gray-300 hover:text-white'
                    size={20}
                  />
                </motion.a>
                <motion.a
                  href='https://linkedin.com/in/muhammad-bilal-dev'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{scale: 1.1, y: -2}}
                  whileTap={{scale: 0.9}}
                  className='w-10 h-10 bg-gray-200 dark:bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors duration-300'
                >
                  <Linkedin
                    className='text-gray-600 dark:text-gray-300 hover:text-white'
                    size={20}
                  />
                </motion.a>
                <motion.a
                  href='mailto:chbilalc627@gmail.com'
                  whileHover={{scale: 1.1, y: -2}}
                  whileTap={{scale: 0.9}}
                  className='w-10 h-10 bg-gray-200 dark:bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors duration-300'
                >
                  <Mail
                    className='text-gray-600 dark:text-gray-300 hover:text-white'
                    size={20}
                  />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{opacity: 0, x: 50}}
            animate={isInView ? {opacity: 1, x: 0} : {opacity: 0, x: 50}}
            transition={{duration: 0.8, delay: 0.4}}
            className='bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800'
          >
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300'
                    placeholder='Your name'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300'
                    placeholder='your.email@example.com'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300'
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className='w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none'
                  placeholder='Tell me about your project or just say hello!'
                />
              </div>

              <motion.button
                type='submit'
                disabled={isSubmitting}
                whileHover={{scale: 1.02}}
                whileTap={{scale: 0.98}}
                className='w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2'
              >
                {isSubmitting ? (
                  <>
                    <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
