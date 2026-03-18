import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

type SectionProps = {
  title: string;
  children: React.ReactNode;
  collapsible?: boolean;
};

function Section({ title, children, collapsible = false }: SectionProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => {
    if (collapsible)
      setIsExpanded(!isExpanded);
  };

  return (
    <div className="border-2 border-gray-200 rounded-lg">
      <div
        onClick={toggleExpanded}
        className={`
          flex items-center justify-between
          font-bold text-lg rounded-t-lg px-4 py-3 border-b-2 border-gray-200
          ${collapsible ? "cursor-pointer" : ""}
        `}
      >
        <h3 className="font-extra-bold">{title}</h3>
        {collapsible && (
          <span className="text-yellow-400">
            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        )}
      </div>

      {isExpanded && (
        <div className="p-4 text-justify">{children}</div>
      )}
    </div>
  );
}

export default Section;
