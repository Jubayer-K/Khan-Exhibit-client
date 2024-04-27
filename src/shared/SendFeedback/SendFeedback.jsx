import { toast } from "react-toastify";

const SendFeedback = () => {
  const feedbackToast = () => toast.success("message submitted");
  const handleSubmit = (e) => {
    e.preventDefault();
    feedbackToast();
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-evenly mx-auto w-full min-h-screen  rounded-2xl font-nunito">
        <div className=" p-8 w-full sm:w-96 ">
          <h2 className="text-5xl font-bold text-nowrap">Send Feedback</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2">Name :</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Email Address :</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full btn glass hover:bg-gray-800 text-white rounded-md bg-gray-500"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="md:w-1/2 md:pr-8 mb-6 p-2 space-x-10 ">
          <img src="/footer.png" alt="" />
          <p className="text-gray-700 leading-relaxed">
            We value your input! <br />
            Your feedback helps us enhance your experience with our Painting and
            Drawing platform. Whether you have suggestions for improvements,
            encounter technical issues, or simply want to share your thoughts,
            we&apos;re all ears.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Your perspective matters greatly to us as we strive to create a
            seamless and enjoyable environment for artists of all levels. Please
            take a moment to let us know how we&apos;re doing. Your comments,
            questions, and ideas are invaluable to us as we continue to refine
            and innovate our platform. We appreciate your time and dedication to
            making our community thrive. Thank you for being a part of our
            journey!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SendFeedback;
