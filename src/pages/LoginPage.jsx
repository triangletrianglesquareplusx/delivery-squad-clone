import { HiLightBulb } from "react-icons/hi";
import { useForm } from "react-hook-form";
import ControlButton from "../utilities/ControlButton";
import { getAuth } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/authSlice";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AnimatedPage from "../components/animations-test/AnimatedPage";
function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    email: yup.string().email().required("An email is mandatory!"),
    passwordRequired: yup
      .number("You must have ints in the pass!")
      .required("A password is mandatory!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    //currently the function here works synchronously!!!
    // signInWithEmailAndPassword(auth, data.email, data.passwordRequired)
    //   .then((auth) => {
    //     console.log(auth.user.email);
    //     navigate("/admin");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    const auth = getAuth();
    const authObj = {
      auth: auth,
      emailUse: data.email,
      pass: data.passwordRequired,
    };
    //console.log(authObj); this auth obj does work!!!

    dispatch(loginUser(authObj)).then((result) => {
      console.log(result);
      if (result.type === "auth/login/fulfilled") {
        navigate("/admin");
      } else {
        navigate("/error");
      }
    });
  };

  return (
    <AnimatedPage>
      <div className="flex items-start justify-center h-screen m-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container flex flex-col items-center w-4/12 gap-2 p-10 text-sm rounded-lg shadow-lg bg-scaledDownWhite"
        >
          <div className="flex justify-center gap-3 text-regalBlue">
            <HiLightBulb />
            <p className="text-sm text-black" title="greeter">
              Welcome back{" "}
              <span className="text-sm text-regalBlue">friend</span> - enter.
            </p>
          </div>
          <p className="text-sm text-center">Email address</p>
          <div className="flex flex-col w-9/12">
            <input
              {...register("email", { required: true })}
              className="p-2 bg-blue-200 rounded-lg outline-none"
              data-testid="email-input"
            />
          </div>
          <p className="text-sm text-center">Password</p>
          <div className="flex flex-col w-9/12 gap-2">
            <input
              {...register("passwordRequired", { required: true })}
              className="p-2 bg-blue-200 rounded-lg outline-none"
              data-testid="pass-input"
            />
            <p className="text-red-600 ">{errors.passwordRequired?.message}</p>
          </div>
          <Link to="/register">
            <p className="text-xs text-regalBlue">
              Not a friend yet? Register!
            </p>
          </Link>

          {/*<input type="submit" value="Login" />*/}
          <ControlButton
            name="Login"
            className="px-5 py-1 text-white rounded-md shadow-lg bg-regalBlue"
          />
        </form>
      </div>
    </AnimatedPage>
  );
}

export default LoginPage;
