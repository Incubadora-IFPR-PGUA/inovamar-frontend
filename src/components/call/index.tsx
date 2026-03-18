import { ScrollRestoration } from "react-router-dom";

import type { Call } from "../../types/call";

import BackButton from "./back-button";
import InfoItem from "./info-item";
import Section from "./section";

type CallContentProps = {
  call: Call;
};

function CallContent({ call }: CallContentProps) {
  return (
    <div className="flex flex-col gap-6 p-6 md:p-9 max-w-4xl mx-auto">
      <ScrollRestoration />

      <BackButton />

      <h2 className="font-black text-3xl">{call.title}</h2>

      <Section title="Informações gerais">
        <div className="flex flex-col">
          {call.initial_funding && (
            <InfoItem label="Dotação inicial" value={call.initial_funding} />
          )}
          {call.inscription && (
            <InfoItem label="Prazo de inscrição" value={call.inscription} />
          )}
          <InfoItem label="Organização proponente" value={call.source} />
        </div>
      </Section>

      <Section title="Descrição" collapsible>
        {call.description}
      </Section>

      {call.links && call.links.length > 0 && (
        <Section title="Links" collapsible>
          <ul className="list-disc list-inside space-y-2">
            {call.links.map(link => (
              <li key={link.link}>
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-700 hover:underline"
                >
                  {link.title ?? link.link}
                </a>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  );
}

export default CallContent;
