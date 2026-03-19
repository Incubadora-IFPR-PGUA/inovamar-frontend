import { useParams } from "react-router-dom";

import CallContent from "../components/call";
import Error from "../components/call/error";
import Loading from "../components/ui/loading";
import { useCall } from "../hooks/use-call";

function CallPage() {
  const { id } = useParams();
  const { call, isLoading, error } = useCall(Number(id));

  if (isLoading)
    return <Loading />;

  if (error)
    return <Error status={error.status} message={error.message} />;

  if (call)
    return <CallContent call={call} />;
}

export default CallPage;
