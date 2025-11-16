// src/components/Contact.tsx

import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'your_service_id',     // Replace with your EmailJS service ID
        'your_template_id',    // Replace with your EmailJS template ID
        form.current,
        'your_user_id'         // Replace with your EmailJS public key
      )
      .then(() => {
        alert('Message sent successfully!');
        form.current?.reset();
      })
      .catch(error => {
        console.error('EmailJS error:', error);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />

        <label>Email</label>
        <input type="email" name="user_email" required />

        <label>Message</label>
        <textarea name="message" required />

        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;