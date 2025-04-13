import { useState } from "react";
import { FaSearch, FaEnvelope, FaQuestionCircle ,FaComments} from "react-icons/fa";

const faqs = [
  {
    question: "How do I file a claim?",
    answer:
      "Go to the 'Claims' section from your dashboard, click on 'File New Claim', and follow the instructions.",
  },
  {
    question: "Where can I download my policy documents?",
    answer:
      "You can find and download all documents from the 'Your Policies' section under each policy card.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can use the 'Contact Support' button below or raise a ticket directly from your dashboard.",
  },
  {
    question: "Can I renew an expired policy?",
    answer:
      "Yes, expired policies can be renewed from the 'Your Policies' section if within the grace period.",
  },
];

const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
        <FaQuestionCircle /> Help Center
      </h1>

      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search for answers..."
          className="w-full border border-gray-300 rounded-xl px-4 py-2 pr-10 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="absolute right-3 top-3 text-gray-400" />
      </div>

      {/* FAQs */}
      <div className="mb-8">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div key={index} className="border-b py-3">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left font-semibold text-gray-800 hover:text-blue-600"
              >
                {faq.question}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">No results found.</p>
        )}
      </div>

      {/* Contact Support */}
      <div className="bg-blue-50 p-5 rounded-2xl shadow-sm border border-blue-200">
        <h2 className="text-lg font-semibold mb-2 text-blue-800">
          Still need help?
        </h2>
        <p className="text-sm text-blue-700 mb-4">
          Contact our support team or raise a ticket—we’re here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
        <button
                onClick={() => window.location.href = 'mailto:manavrastogi501@gmail.com'}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow text-sm font-medium flex items-center gap-2 justify-center"
              >
                <FaEnvelope /> Contact Support
              </button>

              <button
                onClick={() => openLiveChat()}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow text-sm font-medium flex items-center gap-2 justify-center"
              >
                <FaComments /> Live Chat
              </button>

              <p className="text-sm mt-2">Or call us at <strong>+91 9528321676</strong></p>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
