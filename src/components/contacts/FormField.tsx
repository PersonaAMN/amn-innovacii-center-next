import { Form } from "@/types/common.types";

const FormField = ({ title, placeholder, state, setState }: Form) => {
  return (
    <div className="flexStart flex-col w-full gap-4">
      <label className="w-full text-gray-100">{title}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={state}
        required
        className="form_field-input"
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
};

export default FormField;
