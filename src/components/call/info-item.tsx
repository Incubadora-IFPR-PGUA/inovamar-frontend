type InfoItemProps = {
  label: string;
  value: string;
};

function InfoItem({ label, value }: InfoItemProps) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-2 py-3 border-b-2 border-gray-200 last:border-b-0">
      <span className="font-semibold">
        {label}
        :
      </span>
      <span>{value}</span>
    </div>
  );
}

export default InfoItem;
