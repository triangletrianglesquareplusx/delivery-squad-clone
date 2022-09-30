import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ControlButton from "../utilities/ControlButton";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { ImEnter } from "react-icons/im";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AnimatedPage from "../components/animations-test/AnimatedPage";
import { registerUser } from "../features/authSlice";
function RegistrationPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userEmail, userUid, isError, messsage } = useSelector(

    (state) => state.auth
  );
  const rules = /\d+/;
  const schema = yup.object().shape({
    emailRegister: yup
      .string()
      .email("Must provide a valid email.")
      .required("This field is mandatory."),
    gender: yup.string().required("This selection is mandatory."),
    passwordRegister: yup
      .string()
      .min(10)
      .matches(rules, "Must use only integers.")
      .required("This field is mandatory."),
    passwordRegisterConfirm: yup
      .string()
      .oneOf([yup.ref("passwordRegister"), null], "Passwords must match.")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const auth = getAuth();
      const regObj = {
        auth: auth,
        email: data.emailRegister,
        passReg: data.passwordRegister,
      };
      dispatch(registerUser(regObj)).then(async (result) => {
        console.log(result);
        if (result.type === "auth/register/fulfilled") {
          const userTimestamp = serverTimestamp();
          console.log(userTimestamp);
          console.log(userUid);
          // await setDoc(doc(db, "users", userUid), {
          //   email: data.emailRegister,
          //   displayName: data.displayName,
          //   timeStamp: userTimestamp,
          //   gender: data.gender,
          // });
          // await updateProfile(auth.currentUser, {
          //   displayName: data.displayName,
          // });

          navigate("/admin");
        } else {
          navigate("/error");
        }
      });
      // const userCredentials = await createUserWithEmailAndPassword(
      //   auth,
      //   data.emailRegister,
      //   data.passwordRegister
      // );
      //done till here
      // const userTimestamp = serverTimestamp();
      // const uid = userCredentials.user.uid;

      // await setDoc(doc(db, "users", uid), {
      //   email: data.emailRegister,
      //   displayName: data.displayName,
      //   timeStamp: userTimestamp,
      //   gender: data.gender,
      // });

      // await updateProfile(auth.currentUser, {
      //   displayName: data.displayName,
      // });

      // navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AnimatedPage>
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

            <div className="flex flex-col w-9/12 gap-2">
              <label className="text-sm text-center">Email address</label>
              <input
                {...register("emailRegister")}
                className="p-2 bg-blue-200 rounded-lg outline-none"
              />
              <p className="text-center text-red-600">
                {errors.emailRegister?.message}
              </p>
            </div>

            <div className="flex flex-col w-9/12 gap-2 text-sm">
              <label className="text-sm text-center">
                Select gender preference
              </label>
              <div className="flex justify-around">
                <div className="flex flex-col">
                  <label className="text-sm">Male</label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    {...register("gender")}
                  />
                  <p className="text-sm text-center text-red-600">
                    {errors.gender?.message}
                  </p>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm">Female</label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    {...register("gender")}
                  />
                  <p className="text-sm text-center text-red-600">
                    {errors.gender?.message}
                  </p>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm">Other</label>
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    {...register("gender")}
                  />
                  <p className="text-sm text-center text-red-600">
                    {errors.gender?.message}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-9/12 gap-2">
              <label className="text-sm text-center">Choose Display Name</label>
              <input
                {...register("displayName")}
                className="p-2 bg-blue-200 rounded-lg outline-none"
              />
            </div>
            <div className="flex flex-col w-9/12 gap-2">
              <label className="text-sm text-center">Password</label>
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
            <div className="flex flex-col w-9/12 gap-2">
              <label className="text-sm text-center">
                Confirm Your Password
              </label>
              <input
                {...register("passwordRegisterConfirm")}
                className="p-2 bg-blue-200 rounded-lg outline-none"
              />
              <p className="text-center text-red-600">
                {errors.passwordRegisterConfirm?.message}
              </p>
            </div>

            <Link to="/login">
              <p className="text-xs text-regalBlue">
                Already registered? Login!
              </p>
            </Link>
            <ControlButton
              name="Register"

              className="px-5 py-1 text-white rounded-md shadow-lg bg-regalBlue"
            />
          </form>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default RegistrationPage;
