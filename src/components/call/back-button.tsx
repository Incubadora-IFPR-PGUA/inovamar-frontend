import { FaArrowLeft } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <button
      className="flex items-center gap-2 text-brand-700 hover:text-brand-500 transition-colors w-fit"
      onClick={() => {
        if (location.key !== "default") {
          navigate(-1);
        }
        else {
          navigate("/");
        }
      }}
    >
      <FaArrowLeft />
      <span className="font-extrabold">Voltar</span>
    </button>
  );
}

export default BackButton;
