import React, { useState } from 'react';

const emptyForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const formFields = [
  {
    id: 'name',
    label: 'Full Name',
    type: 'text',
    placeholder: 'John Doe',
  },
  {
    id: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'john@example.com',
  },
  {
    id: 'subject',
    label: 'Subject',
    type: 'text',
    placeholder: 'How can we help?',
  },
];

const contactMethods = [
  {
    title: 'Email',
    value: 'support@shophub.com',
    cardClass: 'from-blue-100 to-blue-200',
    iconClass: 'text-blue-600',
    paths: [
      'M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z',
      'M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z',
    ],
  },
  {
    title: 'Phone',
    value: '1-800-SHOPHUB',
    cardClass: 'from-purple-100 to-purple-200',
    iconClass: 'text-purple-600',
    paths: [
      'M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.26.608.738 1.786 2.409 3.41 1.671 1.624 2.808 2.149 3.416 2.409l.773-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z',
    ],
  },
  {
    title: 'Address',
    value: '123 Shop Street, NY 10001',
    cardClass: 'from-pink-100 to-pink-200',
    iconClass: 'text-pink-600',
    paths: [
      'M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z',
    ],
  },
];

const ContactIcon = ({ method }) => (
  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${method.cardClass} rounded-xl mb-4`}>
    <svg className={`w-7 h-7 ${method.iconClass}`} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      {method.paths.map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formIsComplete = Object.values(formData).every((value) => value.trim());

    if (!formIsComplete) {
      return;
    }

    setSubmitted(true);

    setTimeout(() => {
      setFormData(emptyForm);
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Have any questions or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100 mb-12">
          {submitted ? (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-2">
                Message Sent!
              </h2>
              <p className="text-gray-600 max-w-md mx-auto">
                Thank you for reaching out! We've received your message and will get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {formFields.map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-gray-900 font-bold mb-3">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50 transition-all duration-200"
                    required
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-gray-900 font-bold mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your message here..."
                  rows="5"
                  className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50 transition-all duration-200 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/30 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-lg"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method) => (
            <div key={method.title} className="bg-white rounded-2xl p-8 border border-gray-100 text-center hover:shadow-lg transition-all duration-300">
              <ContactIcon method={method} />
              <h3 className="font-bold text-gray-900 mb-2 text-lg">{method.title}</h3>
              <p className="text-gray-600">{method.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
