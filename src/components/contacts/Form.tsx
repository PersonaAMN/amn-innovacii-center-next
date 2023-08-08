"use client";

import { useState } from "react";
import FormField from "./FormField";

const FeedbackForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
  });
  const handleFormSubmit = (e: React.FormEvent) => {};
  const handleStateChange = (fieldName: string, value: string) => {
    setForm((prevState) => ({ ...prevState, [fieldName]: value }));
  };

  return (
    <form onSubmit={handleFormSubmit} className="flexStart form">
      <FormField
        title="Как к вам обращаться?"
        placeholder="ФИО"
        state={form.fullName}
        setState={(value) => handleStateChange("fullName", value)}
      />
      <FormField
        title="Введите адрес электронной почты"
        placeholder="email@gmail.com"
        state={form.email}
        setState={(value) => handleStateChange("email", value)}
      />
    </form>
  );
};

export default FeedbackForm;
