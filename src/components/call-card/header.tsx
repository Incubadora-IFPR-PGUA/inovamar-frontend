type Props = {
  initial_funding?: string;
  title: string;
};

function Header({ title, initial_funding }: Props) {
  return (
    <div className="flex flex-col gap-2 after:content-[''] after:block after:w-full after:h-0.5 after:bg-gray-200 after:mt-2">
      {initial_funding && (
        <span className="bg-gray-100 p-1.5 rounded-lg text-gray-700 text-sm font-semibold w-fit">
          {`${initial_funding}`}
        </span>
      )}
      <span className="font-extrabold text-xl lg:text-2xl">{title}</span>
    </div>
  );
}

export default Header;
