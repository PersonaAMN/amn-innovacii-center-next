"use client";

import { useState } from "react";

const Form = () => {
  const [value, setValue] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {};
  const image = null;
  return (
    <form onSubmit={handleFormSubmit} className="flexStart form">
      <div className="flexStart flex-col w-full gap-4">
        <label className="w-full text-gray-100">Введите ваши данные</label>
        <input
          type="text"
          placeholder="ФИО"
          value={value}
          required
          className="form_field-input"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Form;
