// src/pages/PaymentPage.jsx
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaymentPage = () => {
  const [timeLeft, setTimeLeft] = useState(60);
  const location = useLocation();
  const navigate = useNavigate();

  const totalAmount = location.state?.totalAmount || 0;

  useEffect(() => {
    if (timeLeft <= 0) {
      toast.error("Your order is cancelled due to no payment made.", {
        position: "top-center",
        autoClose: 3000,
      });

      setTimeout(() => {
        navigate('/');
      }, 3000);

      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 2000);

    return () => clearInterval(timer);
  }, [timeLeft, navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 ">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-5xl mt-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Complete Your Payment</h2>
          <div className="text-lg text-red-600 font-bold">
            Time left: {timeLeft}s
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left - QR Code */}
          <div className="flex-1 flex justify-center items-center border-4 border-ligh-brown rounded-2xl p-4">
            <h1>If I add a QR code, cyber security authorities might suspect that I'm selling these products illegally, and I could get into legal trouble😅</h1>
          </div>

          <div className="flex-1 space-y-6">
            <div>
              <p className="text-gray-500">Total Amount</p>
              <h3 className="text-3xl font-bold text-gray-800">₹{totalAmount.toFixed(2)*80}</h3>
            </div>

            <div>
              <p className="text-gray-600 mb-2 font-medium">Pay using</p>
              <div className="flex gap-4">
                <img
                  src="/images/gpay-logo.png"
                  alt="GPay"
                  className="w-12 h-12 object-contain"
                />
                <img
                  src="/images/PhonePe-Logo.png"
                  alt="PhonePe"
                  className="w-12 h-12 object-contain"
                />
                <img
                  src="/images/Paytm_Logo.png"
                  alt="Paytm"
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>

            {/* Button */}
            <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
              Complete Payment
            </button>

            {/* Note */}
            <p className="text-sm text-gray-500">
              Order will be cancle Automaticaly and redirected to the main Page if Payment if You can't pay within {timeLeft} .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
