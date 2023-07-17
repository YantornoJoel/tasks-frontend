import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FormTask } from ".";
import { INITIAL_STATE } from "@/constants/newTask";
import { SwalAlert } from "@/helpers/swal";
import { TaskState } from "@/models";
import { useTasksStore } from "@/store";
import { validateForm } from "@/helpers";

export const NewTask = () => {
  const [values, setValues] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { name, description, state } = values;
  const createTask = useTasksStore((state) => state.createTask);

  const navigate = useNavigate();

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValues((prevValues) => ({ ...prevValues, name: value }));

    const validationResult = validateForm({ ...values, name: value });
    setErrors((prevErrors) => ({
      ...prevErrors,
      name: validationResult.errors.name || "",
    }));
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setValues((prevValues) => ({ ...prevValues, description: value }));

    const validationResult = validateForm({ ...values, description: value });
    setErrors((prevErrors) => ({
      ...prevErrors,
      description: validationResult.errors.description || "",
    }));
  };

  const handleStateChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setValues((prevValues) => ({ ...prevValues, state: value as TaskState }));

    const validationResult = validateForm({ ...values, state: value });
    setErrors((prevErrors) => ({
      ...prevErrors,
      state: validationResult.errors.state || "",
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationResult = validateForm(values);
    setErrors(validationResult.errors);

    if (Object.keys(validationResult.errors).length === 0) {
      createTask(name, description, state as TaskState);
      setValues(INITIAL_STATE);
      navigate("/");
      SwalAlert("La tarea fue creada correctamente");
    }
  };

  return (
    <FormTask
      errors={errors}
      name={name}
      description={description}
      state={state}
      handleSubmit={handleSubmit}
      handleNameChange={handleNameChange}
      handleDescriptionChange={handleDescriptionChange}
      handleStateChange={handleStateChange}
    />
  );
};
