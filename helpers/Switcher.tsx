import { toast } from "sonner";

export const handleToggle = (
  toChange: string,
  setter: (value: boolean) => void,
  curValue: boolean,
) => {
  const newVal = !curValue;
  setter(newVal);
  if (newVal) toast.success(`${toChange} Enabled Successfully.`);
  else toast.success(`${toChange} Disabled Successfully.`);
};
