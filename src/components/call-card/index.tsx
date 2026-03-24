import Header from "./header";
import MainContent from "./main-content";

type Props = {
  id: number;
  initial_funding?: string;
  title: string;
  description: string;
  inscription?: string;
  source: string;
};

function CallCard({ id, initial_funding, title, description, inscription, source }: Props) {
  return (
    <div className="
        bg-white
        w-full lg:w-3/5 px-8 py-4
        rounded-lg border-gray-200 border-2
        flex flex-col gap-4
        transition-all duration-500
        hover:border-gray-500
        hover:shadow-md hover:shadow-shadow-100
        "
    >
      <Header initial_funding={initial_funding} title={title} />
      <MainContent id={id} description={description} inscription={inscription ?? ""} source={source} />
    </div>
  );
}

export default CallCard;
