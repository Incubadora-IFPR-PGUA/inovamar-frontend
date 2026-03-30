import logo from "../assets/img/logos/inovamar.png";

type SectionTitleProps = {
  line1: string;
  span: string;
  line2: string;
};

function SectionTitle({ line1, span, line2 }: SectionTitleProps) {
  return (
    <div className="flex items-center sm:flex-row sm:justify-center sm:gap-4 font-extrabold">
      <img
        src={logo}
        alt="Logo"
        className="hidden sm:block w-16 lg:w-[3.8rem] shrink-0"
      />
      <h2 className="grow-0">
        <span className="text-5xl sm:text-[2.8rem] md:text-[3rem] lg:text-[3.8rem] leading-tight">
          {line1}
        </span>
        <br className="sm:hidden" />
        <span className="text-3xl sm:text-[1.4em] md:text-[1.5em] lg:text-[1.9em]">
          {" "}
          {span}
          {" "}
        </span>
        <span className="text-4xl sm:text-[2.8rem] md:text-[3rem] lg:text-[3.8rem] leading-tight">
          {line2}
        </span>
      </h2>
      <img
        src={logo}
        alt="Logo"
        className="block sm:hidden w-18"
      />
    </div>
  );
}

export default SectionTitle;
