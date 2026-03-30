import CallCard from "../components/call-card";
import SearchBar from "../components/search-bar";
import SectionTitle from "../components/section-title";
import Loading from "../components/ui/loading";
import Paginator from "../components/ui/paginator";
import useScrollToTop from "../hooks/use-scroll-to-top";
import { useSearchCalls } from "../hooks/use-search-call";

const PER_PAGE = 10;

function SearchPage() {
  const { calls, total, page, query, isLoading } = useSearchCalls();
  useScrollToTop(query);

  return (
    <div className="flex flex-col p-10 mt-20 md:p-20 mb-auto lg:mt-40">

      <div className="mb-10">
        <SectionTitle line1="Escritório" span="de" line2="Projetos" />
      </div>

      <SearchBar placeholder="Buscar chamadas..." initialValue={query} />

      <div className="flex flex-col mt-10 gap-6">
        {query && !isLoading && (
          <span className="text-gray-700 font-medium h-15 text-center">
            {calls.length > 0
              ? `${total} resultados encontrados para: `
              : "Não foram encontradas chamadas para: "}
            <strong>{query}</strong>
          </span>
        )}

        {isLoading && <Loading />}

        <div className="flex flex-col gap-4 justify-center items-center">
          {calls.map(call => (
            <CallCard key={call.id} {...call} />
          ))}
        </div>

        <Paginator page={page} totalItems={total} perPage={PER_PAGE} buildPageUrl={p => `?q=${encodeURIComponent(query)}&pagina=${p}`} />
      </div>
    </div>
  );
}

export default SearchPage;
