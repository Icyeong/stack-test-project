"use client";
import React from "react";
import { useForm, Resolver } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.firstName && values.lastName ? values : {},
    errors: {
      ...(values.firstName
        ? {}
        : {
            firstName: {
              type: "required",
              message: "First name is required.", // 오류 메시지 추가
            },
          }),
      ...(values.lastName
        ? {}
        : {
            lastName: {
              type: "required",
              message: "Last name is required.", // 오류 메시지 추가
            },
          }),
    },
  };
};

export default function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <input {...register("firstName")} placeholder="Bill" />
      {errors?.firstName && <p>{errors.firstName.message}</p>}

      <input {...register("lastName")} placeholder="Luo" />
      {errors?.lastName && <p>{errors.lastName.message}</p>}

      <input type="submit" />
    </form>
  );
}
