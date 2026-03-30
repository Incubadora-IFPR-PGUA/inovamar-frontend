import { useLocation } from "react-router-dom";

import CallCard from "../components/call-card";
import Paginator from "../components/ui/paginator";
import { useCalls } from "../hooks/use-calls";
import useScrollToTop from "../hooks/use-scroll-to-top";

const PER_PAGE = 10;

function Calls() {
  const { calls, total, page } = useCalls();

  return (
    <div className="flex flex-col gap-6 p-6 md:p-9 mx-auto justify-center">

      <div className="flex flex-col gap-4 justify-center items-center">
        {calls.map(call => (
          <CallCard key={call.id} id={call.id} initial_funding={call.initial_funding} title={call.title} description={call.description} inscription={call.inscription} source={call.source} />
        ))}
      </div>

      <Paginator page={page} totalItems={total} perPage={PER_PAGE} />
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
