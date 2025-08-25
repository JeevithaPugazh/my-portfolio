import React,{useRef} from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_n7b2fzk',    
        'template_mozp7lh',    
        formRef.current,
        'vs21pevp8aUEiDevi'      
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error("Message error:", error.text);
          alert("Message failed to send. Please try again.");
        }
      );
  };
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center">
      <h2 className="text-4xl font-bold text-blue-400">Contact Me</h2>
      <p className="mt-4 text-gray-300">Feel free to reach out for collaboration or just a chat.</p>
      <form  ref={formRef} onSubmit={sendEmail} className="mt-6 max-w-lg mx-auto">
        <input name="name" type="text" placeholder="Your Name" className="w-full p-3 rounded-lg mb-4 bg-gray-800 text-white" />
        <input name="email" type="email" placeholder="Your Email" className="w-full p-3 rounded-lg mb-4 bg-gray-800 text-white" />
        <textarea name="message" placeholder="Your Message" className="w-full p-3 rounded-lg mb-4 bg-gray-800 text-white h-32"></textarea>
        <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;