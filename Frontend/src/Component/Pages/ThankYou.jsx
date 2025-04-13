import React from "react";
import { Link } from "react-router-dom";
import Button from "@/components/ui/button";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50 px-6">
      <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Thank You!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Your application has been submitted successfully. We’ll review your details and contact you shortly.
      </p>

      <Link to="/">
        <Button className="bg-blue-600 hover:bg-blue-700">Back to Home</Button>
      </Link>
    </div>
  );
};

export default ThankYou;
