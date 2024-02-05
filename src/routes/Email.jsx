import React from "react";
import Layout7 from "../components/Layout7";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { apiPostMail } from "./api";

export default function Email() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const { mutate, isLoading, data } = useMutation(apiPostMail, {
    onSuccess: () => {
      if (data.result === "success") reset();
    },
  });

  const onSubmit = (formData) => {
    mutate(formData);
  };

  return (
    <Layout>
      <Layout7>
        <section className="py-16">
          <h2 className="py-2 mb-6 font-bold text-2xl">Contact us</h2>
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name", {
                required: "이름을 적어주세요.",
                minLength: { value: 2, message: "이름은 최소 두글자여야 합니다." },
                maxLength: { value: 6, message: "이름이 너무 깁니다." },
              })}
              className="px-4 py-2 border text-lg"
              type="text"
              placeholder="이름"
            />
            <div className="text-red-600 min-h-5 mt-2 mb-8 ml-2">{errors?.name?.message || ""}</div>
            <input
              {...register("email", {
                required: "이메일을 적어주세요.",
                pattern: {
                  value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "이메일을 정확하게 입력해주세요.",
                },
              })}
              className="px-4 py-2 border text-lg"
              type="email"
              placeholder="이메일"
            />
            <div className="text-red-600 min-h-5 mt-2 mb-8 ml-2">{errors?.email?.message || ""}</div>
            <textarea
              {...register("msg", {
                required: "내용을 입력해주세요.",
                minLength: {
                  value: 2,
                  message: "내용을 자세히 입력해주세요.",
                },
              })}
              className="px-4 py-2 border text-lg"
              type="textArea"
              placeholder="내용"
              row="3"
            />
            <div className="text-red-600 min-h-5 mt-2 mb-8 ml-2">{errors?.msg?.message || ""}</div>
            <button className="uppercase bg-red-600 duration-500 hover:bg-red-700 px-10 py-3 text-white w-[150px]" style={{ clipPath: "polygon(10% 0, 100% 0, 100% 74%, 90% 100%, 0 100%, 0 30%)" }} disabled={isLoading}>
              {isLoading ? "전송 중..." : "전송"}
            </button>
          </form>
        </section>
      </Layout7>
    </Layout>
  );
}
