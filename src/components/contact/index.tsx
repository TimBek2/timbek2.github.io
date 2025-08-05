import {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import './style.css';
import './airplane-style.css';

export const Contact = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm('service_0zr62jp', 'template_gf0gohf', form.current, {
        publicKey: 'VMqJmhi8eYhbXp0OM',
      })
      .then(
        () => {
          setSubmitted(true);
          setSuccess(true);
          setError(null);
        },
        (error) => {
          setSubmitted(true);
          setSuccess(false);
          setError('Failed to send message. Please try again later.');
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="contact" id="contact">
      <div className='contact-image'>
        <div className="paperplane">
          <div className="plane">
            <div className="wingRight"></div>
            <div className="wingLeft"></div>
            <div className="bottom"></div>
            <div className="top"></div>
            <div className="middle"></div>
          </div>
          <div className="clouds">
            <div className="cloudOne"></div>
            <div className="cloudTwo"></div>
            <div className="cloudThree"></div>
          </div>
        </div>
      </div>
      <div className='contact-form-wrapper'>
        <p className="contact-subtitle">Drop me a link!</p>
        <h2>Contact Me</h2>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label htmlFor='name'>Name</label>
          <input type="text" name="name" autoComplete='name' id='name' placeholder="What's your name?" />
          <label htmlFor='email'>Email</label>
          <input type="email" name="email" autoComplete='email' id='email' placeholder="What's your email?" />
          <label htmlFor='message'>Message</label>
          <textarea name="message" id='message' placeholder="What's up?" />
          <input type="submit" value="Send" disabled={submitted} />
        </form>
        {success && <p className="success">Message sent! I'll get back to you soon!</p>}
        {error && <p className="error">{error}</p>}
      </div>
    </section>
  );
};

export default Contact;
