import { useState } from "react";
import { FiX } from "react-icons/fi";



const AddProfileModal = ({ isOpen, onClose }) => {
const [step, setStep] = useState(1);

  const handleNext = () => setStep(2);
  const handleBack = () => setStep(1);
  const handleDone = () => {
    // Here you can handle form submission
    console.log("Form submitted");
    onClose();
    setStep(1); // Reset back to first step
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-[500px] rounded-lg shadow-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Add New Profile</h3>
          <button onClick={onClose}>
            <FiX size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b mb-4">
          <button
            onClick={() => setStep(1)}
            className={`flex-1 py-2 text-center ${
              step === 1
                ? "border-b-2 border-blue-600 font-medium text-blue-600"
                : "text-gray-500"
            }`}
          >
            Basic
          </button>
          <button
            onClick={() => setStep(2)}
            className={`flex-1 py-2 text-center ${
              step === 2
                ? "border-b-2 border-blue-600 font-medium text-blue-600"
                : "text-gray-500"
            }`}
          >
            Social
          </button>
        </div>

        {/* Step 1: Basic Info */}
        {step === 1 && (
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Enter Name*</label>
              <input
                type="text"
                placeholder="Eg. John Doe"
                className="w-full border px-3 py-2 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Enter Email*</label>
              <input
                type="email"
                placeholder="Eg. John@xyz.com"
                className="w-full border px-3 py-2 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Enter Phone*</label>
              <input
                type="text"
                placeholder="Eg. 9123456789"
                className="w-full border px-3 py-2 rounded-lg"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Next
              </button>
            </div>
          </form>
        )}

        {/* Step 2: Social Info */}
        {step === 2 && (
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Instagram Link (Optional)</label>
              <input
                type="text"
                placeholder="Eg. instagram.com/username"
                className="w-full border px-3 py-2 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">YouTube Link (Optional)</label>
              <input
                type="text"
                placeholder="Eg. youtube.com/username"
                className="w-full border px-3 py-2 rounded-lg"
              />
            </div>

            <div className="flex justify-end gap-5">
              <button
                type="button"
                onClick={handleBack}
                className="bg-gray-200 px-4 py-2 rounded-lg"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleDone}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Done
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default AddProfileModal
