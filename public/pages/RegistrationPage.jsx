import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import auth from "../Firebase/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ImEnter } from "react-icons/im";

function RegistrationPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUserWithEmailAndPassword(
      auth,
      data.emailRegister,
      data.passwordRegister
    )
      .then((auth) => navigate("/home"))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="flex items-start justify-center h-screen m-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container flex flex-col items-center w-4/12 gap-2 p-10 text-sm rounded-lg shadow-lg bg-scaledDownWhite"
        >
          <div className="flex items-center justify-center gap-3 text-regalBlue">
            <ImEnter />
            <p className="text-sm text-black">
              Register and become a
              <span className="text-sm text-regalBlue"> friend</span>.
            </p>
          </div>
          <p className="text-sm text-center">Email address</p>
          <div className="flex flex-col w-9/12">
            <input
              {...register("emailRegister", {
                required: {
                  value: true,
                  message: "This field is mandatory!",
                },
              })}
              className="p-2 bg-blue-200 rounded-lg outline-none"
            />
            <p className="text-center text-red-600">
              {errors.emailRegister?.message}
            </p>
          </div>
          <p className="text-sm text-center">Password</p>
          <div className="flex flex-col w-9/12 gap-2">
            <input
              {...register("passwordRegister", {
                required: true,
                minLength: {
                  value: 10,
                  message: "Min. length of 10 required!",
                },
                pattern: {
                  value: /\d+/,
                  message: "Must be only integers!",
                },
              })}
              className="p-2 bg-blue-200 rounded-lg outline-none"
            />
            <p className="text-center text-red-600">
              {errors.passwordRegister?.message}
            </p>
          </div>
          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;
