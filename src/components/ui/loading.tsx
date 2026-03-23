import { FaSpinner } from "react-icons/fa6";

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-4rem)]">
      <FaSpinner className="animate-spin [animation-duration:2.2s] text-5xl text-brand-700 md:text-6xl" />
    </div>
  );
}

export default Loading;
