import { useNavigate } from "react-router-dom";

import type { Organization } from "../../types/call";

type Props = {
  id: number;
  description: string;
  inscription: string;
  organization: Organization;
};

function MainContent({ id, description, inscription, organization }: Props) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <div className="text-xs/5 font-semibold text-justify line-clamp-10 md:line-clamp-15 md:w-2/3">
        {description}
      </div>

      <div className="grid grid-cols-3  grid-rows-2 gap-2
            md:grid-cols-1 md:grid-rows-3 md:w-1/3"
      >
        {inscription
          ? (
              <div className="
                border-gray-200 border-t-2 border-b-2
                flex justify-center items-center
                bg-brand
                col-span-3
                text-start
                py-3
                md:col-span-1
                md:row-start-2
                md:justify-normal"
              >
                <span className="text-xs font-bold flex gap-1 md:flex-col">
                  <span>INSCRIÇÕES</span>
                  <span className="text-brand-500 md:text-base">{inscription}</span>
                </span>
              </div>
            )
          : (
              <div className="col-span-3 md:col-span-1 md:row-start-2" />
            )}
        <div className="md:row-start-1 flex items-center">
          <img
            className="w-15 md:w-22 h-fit"
            src={organization.image_url}
            alt={`Logo ${organization.title}`}
          />
        </div>

        <div className="col-span-2 flex justify-center items-end md:row-start-3">
          <button
            className="
            bg-yellow-400
            w-full p-2
            flex justify-center
            rounded-lg
            font-bold
            cursor-pointer
            md:row-start-3"
            onClick={() => {
              navigate(`/chamada/${id}`);
            }}
          >
            Detalhes
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
