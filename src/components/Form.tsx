"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormFields, formSchema } from "@/lib/formTypes";
import { handleFormSubmission } from "@/actions/formActions";
import { useState } from "react";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ resolver: zodResolver(formSchema) });

  const [response, setResponse] = useState<any>(null);

  const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
    console.log(data);
    const response = await handleFormSubmission(data);
    console.log(response);
    setResponse(response);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <hr />
      <div className="m-4">
        <header className="text-center text-2xl font-bold mb-2">Team</header>
        <label>
          Name
          <input {...register("team_name")} type="text" className="border-2" />
          {errors.team_name && (
            <div className="text-red-700">{errors.team_name.message}</div>
          )}
        </label>
        <label>
          University
          <input
            {...register("university_name")}
            type="text"
            className="border-2"
          />
          {errors.university_name && (
            <div className="text-red-700">{errors.university_name.message}</div>
          )}
        </label>
        {response?.error && (
          <div className="text-red-700">{response.error}</div>
        )}
      </div>
      <hr />
      <div className="m-4">
        <header className="text-center text-2xl font-bold mb-2">
          Team Leader
        </header>
        <label>
          Name
          <input
            {...register("leader_name")}
            type="text"
            className="border-2"
          />
        </label>
        {errors.leader_name && (
          <div className="text-red-700">{errors.leader_name.message}</div>
        )}
        <label>
          Email
          <input
            {...register("leader_email")}
            type="text"
            className="border-2"
          />
        </label>
        {errors.leader_email && (
          <div className="text-red-700">{errors.leader_email.message}</div>
        )}
        {response?.error && (
          <div className="text-red-700">{response.error}</div>
        )}
        <label>
          Food Preferance
          <select>
            <option {...register("leader_food")} value="option_1">
              option_1
            </option>
            <option {...register("leader_food")} value="option_2">
              option_2
            </option>
          </select>
          {errors.leader_food && (
            <div className="text-red-700">{errors.leader_food.message}</div>
          )}
        </label>
      </div>
      <hr />
      <div className="m-4">
        <header className="text-center text-2xl font-bold mb-2">
          Member 01
        </header>
        <label>
          Name
          <input
            {...register("member1_name")}
            type="text"
            className="border-2"
          />
          {errors.member1_name && (
            <div className="text-red-700">{errors.member1_name.message}</div>
          )}
        </label>
        <label>
          Email
          <input
            {...register("member1_email")}
            type="text"
            className="border-2"
          />
          {errors.member1_email && (
            <div className="text-red-700">{errors.member1_email.message}</div>
          )}
          {response?.error && (
            <div className="text-red-700">{response.error}</div>
          )}
        </label>
        <label>
          Food Preferance
          <select>
            <option {...register("member1_food")} value="option_1">
              option_1
            </option>
            <option {...register("member1_food")} value="option_2">
              option_2
            </option>
          </select>
          {errors.member1_food && (
            <div className="text-red-700">{errors.member1_food.message}</div>
          )}
        </label>
      </div>
      <hr />
      <div className="m-4">
        <header className="text-center text-2xl font-bold mb-2">
          Member 02
        </header>
        <label>
          Name
          <input
            {...register("member2_name")}
            type="text"
            className="border-2"
          />
          {errors.member2_name && (
            <div className="text-red-700">{errors.member2_name.message}</div>
          )}
        </label>
        <label>
          Email
          <input
            {...register("member2_email")}
            type="text"
            className="border-2"
          />
          {errors.member2_email && (
            <div className="text-red-700">{errors.member2_email.message}</div>
          )}
          {response?.error && (
            <div className="text-red-700">{response.error}</div>
          )}
        </label>
        <label>
          Food Preferance
          <select>
            <option {...register("member2_food")} value="option_1">
              option_1
            </option>
            <option {...register("member2_food")} value="option_2">
              option_2
            </option>
          </select>
          {errors.member2_food && (
            <div className="text-red-700">{errors.member2_food.message}</div>
          )}
        </label>
      </div>
      <hr />
      <button className="bg-slate-900 p-2 text-slate-100 w-[20%] m-2">
        Register
      </button>
    </form>
  );
};

export default Form;
