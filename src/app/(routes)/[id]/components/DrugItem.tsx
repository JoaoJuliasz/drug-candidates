type DrugItemProps = {
  title: string;
  value: string;
};

export const DrugItem = ({ title, value }: DrugItemProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-base font-semibold text-gray-700">{title}</label>
      <p className="text-sm text-gray-500">{value}</p>
    </div>
  );
};
