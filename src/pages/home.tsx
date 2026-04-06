import { useLocation } from "react-router-dom";

import CallCard from "../components/call-card";
import SearchBar from "../components/search-bar";
import SectionTitle from "../components/section-title";
import Paginator from "../components/ui/paginator";
import { useCalls } from "../hooks/use-calls";
import useScrollToTop from "../hooks/use-scroll-to-top";

const PER_PAGE = 10;

function Calls() {
  const { calls, total, page } = useCalls();

  return (
    <div className="flex flex-col p-10 mt-20 md:p-20 mb-auto lg:mt-40">
      <div className="mb-10">
        <SectionTitle line1="Escritório" span="de" line2="Projetos" />
      </div>

      <SearchBar placeholder="Buscar chamadas..." />

      <div className="flex flex-col gap-4 justify-center items-center mt-10">
        {calls.map(call => (
          <CallCard
            key={call.id}
            id={call.id}
            initial_funding={call.initial_funding}
            title={call.title}
            description={call.description}
            inscription={call.inscription}
            organization={call.organization}
          />
        ))}
      </div>

      <div className="mt-6">
        <Paginator page={page} totalItems={total} perPage={PER_PAGE} />
      </div>
    </div>
  );
}

function Home() {
  const location = useLocation();
  useScrollToTop(location.state?.scrollTrigger);

  return (
    <Calls />
  );
}

export default Home;
