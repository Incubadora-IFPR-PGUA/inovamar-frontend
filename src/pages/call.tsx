import { ScrollRestoration, useParams } from "react-router-dom";

import CallContent from "../components/call";
import Error from "../components/call/error";
import Loading from "../components/ui/loading";
import { useCall } from "../hooks/use-call";

function CallPage() {
  const { id } = useParams();
  const { call, isLoading, error } = useCall(Number(id));

  return (
    <>
      <ScrollRestoration />
      {isLoading && <Loading />}
      {error && <Error status={error.status} message={error.message} />}
      {call && <CallContent call={call} />}
    </>
  );
}

export default CallPage;
