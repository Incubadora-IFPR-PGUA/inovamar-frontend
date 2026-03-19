import { ScrollRestoration } from "react-router-dom";

import BackButton from "../call/back-button";

type ErrorProps = {
  status: number;
  message: string;
};

function Error({ status, message }: ErrorProps) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-4rem)]">
      <ScrollRestoration />
      <span className="font-black text-8xl">{status}</span>
      <span className="font-black px-3 text-center text-sm md:text-xl">{message}</span>
      <BackButton />
    </div>
  );
}

export default Error;
