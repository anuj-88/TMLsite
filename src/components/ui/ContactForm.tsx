// import React, { useState } from 'react';

// const ContactForm: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     subject: '',
//     message: '',
//   });

//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [submitted, setSubmitted] = useState(false);

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};
    
//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required';
//     }
    
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
    
//     if (!formData.message.trim()) {
//       newErrors.message = 'Message is required';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
    
//     // Clear error for this field if it exists
//     if (errors[name]) {
//       setErrors((prev) => {
//         const newErrors = { ...prev };
//         delete newErrors[name];
//         return newErrors;
//       });
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (validateForm()) {
//       // In a real application, this is where you would send the data to your server
//       console.log('Form submitted:', formData);
//       setSubmitted(true);
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         company: '',
//         subject: '',
//         message: '',
//       });
//       setTimeout(() => setSubmitted(false), 5000);
//     }
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 md:p-8">
//       {submitted ? (
//         <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6">
//           <p className="font-medium">Thank you for contacting us!</p>
//           <p className="mt-1">We've received your message and will get back to you soon.</p>
//         </div>
//       ) : null}
      
//       <form onSubmit={handleSubmit}>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
//               Full Name *
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition
//                 ${errors.name ? 'border-red-500' : 'border-slate-300'}`}
//               placeholder="Your name"
//             />
//             {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
//           </div>
          
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
//               Email Address *
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition
//                 ${errors.email ? 'border-red-500' : 'border-slate-300'}`}
//               placeholder="Your email"
//             />
//             {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
//           </div>
          
//           <div>
//             <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//               placeholder="Your phone number"
//             />
//           </div>
          
//           <div>
//             <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
//               Company
//             </label>
//             <input
//               type="text"
//               id="company"
//               name="company"
//               value={formData.company}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//               placeholder="Your company"
//             />
//           </div>
          
//           <div className="md:col-span-2">
//             <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
//               Subject
//             </label>
//             <select
//               id="subject"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//             >
//               <option value="">Select a subject</option>
//               <option value="Custom Software Development">Custom Software Development</option>
//               <option value="IT Infrastructure Consulting">IT Infrastructure Consulting</option>
//               <option value="Web & Mobile App Development">Web & Mobile App Development</option>
//               <option value="Cloud Solutions">Cloud Solutions</option>
//               <option value="Digital Transformation">Digital Transformation</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
          
//           <div className="md:col-span-2">
//             <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
//               Message *
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows={5}
//               className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition
//                 ${errors.message ? 'border-red-500' : 'border-slate-300'}`}
//               placeholder="Tell us about your project or inquiries"
//             ></textarea>
//             {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
//           </div>
          
//           <div className="md:col-span-2">
//             <button
//               type="submit"
//               className="w-full md:w-auto btn btn-primary"
//             >
//               Send Message
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 md:p-8">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf4XRsnlTiokS1sBd1yKNfZ_oBSTT3ZLsWZMHjsHu-B6rCpJw/viewform?embedded=true"
        width="100%"
        height="1000"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Contact Form"
        className="w-full h-[1000px] border-0"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default ContactForm;
