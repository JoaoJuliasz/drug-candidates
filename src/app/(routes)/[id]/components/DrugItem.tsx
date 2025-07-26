type DrugItemProps = {
  title: string;
  value: string;
};

export const DrugItem = ({ title, value }: DrugItemProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label>{title}</label>
      <p>{value}</p>
    </div>
  );
};
