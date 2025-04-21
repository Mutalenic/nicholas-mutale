import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { CgChevronDoubleUp } from "react-icons/cg";
import { HiMail } from "react-icons/hi";
import { FiSend } from "react-icons/fi";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getintouchImg from "../public/assets/getintouch.jpg";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const currentForm = formRef.current;
    
    if (currentForm) {
      observer.observe(currentForm);
    }
    
    return () => {
      if (currentForm) {
        observer.unobserve(currentForm);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://getform.io/f/d7e77dee-2a60-4670-8add-ed3aed88a13f", {
        method: "POST",
        body: new FormData(formRef.current as HTMLFormElement)
      });
      
      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        setSubmitError(true);
        setTimeout(() => {
          setSubmitError(false);
        }, 5000);
      }
    } catch (error) {
      setSubmitError(true);
      setTimeout(() => {
        setSubmitError(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="w-full py-24 bg-white dark:bg-gray-900">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="inline-block text-lg font-medium text-blue-600 dark:text-blue-400 mb-4 px-4 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full">
            GET IN TOUCH
          </p>
          <h2 className="text-3xl font-bold mt-2 text-gray-800 dark:text-white">Let`&apos;`s Work Together</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Contact Information Panel */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:shadow-2xl relative">
            {/* Changed the z-index to be lower than social icons */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 z-10"></div>
            
            <div className="relative z-20 p-8">
              <div className="mb-8">
                <Image
                  src={getintouchImg}
                  alt="Get in touch"
                  className="rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105"
                  width={500}
                  height={300}
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Nicholas Mutale</h3>
                <p className="text-gray-600 dark:text-gray-300">I&apos;m available for freelance work, full-time positions, and collaborative projects. 
                  Feel free to reach out if you have any opportunities or questions!
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 mr-3" size={18} />
                  <span>Lusaka, Zambia</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <HiMail className="text-blue-600 dark:text-blue-400 mr-3" size={18} />
                  <span>nicomutale@gmail.com</span>
                </div>
              </div>
              
              <div className="relative">
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Connect With Me</h4>
                <div className="flex space-x-4 relative z-50 isolation-auto">
                  <a
                    href="https://www.linkedin.com/in/nicomutale/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-gray-700 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-500 hover:scale-110 text-blue-600 dark:text-blue-400 hover:text-white dark:hover:text-white hover:bg-[#0077B5] dark:hover:bg-[#0077B5] transform-gpu"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedinIn size={18} className="transition-colors duration-500" />
                  </a>
                  <a
                    href="https://github.com/mutalenic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-gray-700 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-500 hover:scale-110 text-gray-800 dark:text-white hover:text-white dark:hover:text-white hover:bg-[#333333] dark:hover:bg-[#333333] transform-gpu"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub size={18} className="transition-colors duration-500" />
                  </a>
                  <a
                    href="mailto:nicomutale@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-gray-700 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-500 hover:scale-110 text-red-500 dark:text-red-400 hover:text-white dark:hover:text-white hover:bg-[#EA4335] dark:hover:bg-[#EA4335] transform-gpu"
                    aria-label="Email Contact"
                  >
                    <HiMail size={18} className="transition-colors duration-500" />
                  </a>
                  <a
                    href="https://x.com/nicomutale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-gray-700 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-500 hover:scale-110 text-black-400 dark:text-black-300 hover:text-white dark:hover:text-white hover:bg-black dark:hover:bg-black transform-gpu"
                    aria-label="X Profile"
                  >
                    <FontAwesomeIcon icon={faXTwitter} size="lg" className="transition-colors duration-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div 
            className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send Me a Message</h3>
            
            {/* Success Message */}
            {submitSuccess && (
              <div className="mb-6 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 p-4 rounded-lg flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-medium">Message sent successfully!</p>
                  <p className="text-sm">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                </div>
              </div>
            )}
            
            {/* Error Message */}
            {submitError && (
              <div className="mb-6 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 p-4 rounded-lg flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-medium">Message could not be sent</p>
                  <p className="text-sm">Please try again or reach out via email directly.</p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="peer w-full border-b-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-transparent bg-transparent pt-4 pb-2 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors duration-300"
                    placeholder="Name"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-600 dark:peer-focus:text-blue-400 peer-focus:text-sm"
                  >
                    Name
                  </label>
                </div>
                
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="peer w-full border-b-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-transparent bg-transparent pt-4 pb-2 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors duration-300"
                    placeholder="Email"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-600 dark:peer-focus:text-blue-400 peer-focus:text-sm"
                  >
                    Email
                  </label>
                </div>
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="peer w-full border-b-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-transparent bg-transparent pt-4 pb-2 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors duration-300"
                  placeholder="Subject"
                  required
                />
                <label
                  htmlFor="subject"
                  className="absolute left-0 -top-3.5 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-600 dark:peer-focus:text-blue-400 peer-focus:text-sm"
                >
                  Subject
                </label>
              </div>
              
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="peer w-full border-b-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-transparent bg-transparent pt-4 pb-2 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors duration-300 resize-none"
                  placeholder="Message"
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-0 -top-3.5 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-600 dark:peer-focus:text-blue-400 peer-focus:text-sm"
                >
                  Message
                </label>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <FiSend className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        
        {/* Back to top button */}
        <div className="flex justify-center mt-16">
          <Link href="/#home">
            <div className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:rotate-180 text-blue-600 dark:text-blue-400 cursor-pointer">
              <CgChevronDoubleUp size={24} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;