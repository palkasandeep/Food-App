// import React, { useContext, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
// import { useForm } from "react-hook-form";
// import { AuthContext } from "../contexts/AuthProvider";
// import axios from "axios";

// const Login = () => {
//   const [errorMessage, seterrorMessage] = useState("");
//   const { signUpWithGmail, login } = useContext(AuthContext);

//   const navigate = useNavigate();
//   const location = useLocation();

//   const from = location.state?.from?.pathname || "/";

//   //react hook form
//   const {
//     register,
//     handleSubmit, reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     const email = data.email;
//     const password = data.password;
//     login(email, password)
//       .then((result) => {
//         // Signed in
//         const user = result.user;
//         const userInfo = {
//           name: data.name,
//           email: data.email
//         }
//       });
//     axios.post("http://localhost:6001/users", userInfo).then((response) => {
//       // console.log(response)
//       alert("Signin successful!");
//       navigate(from, { replace: true });
//       // console.log(user);
//       alert("Login successful!");
//       navigate(from);
//       // ...
//     })
//       .catch((error) => {
//         const errorMessage = error.message;
//         seterrorMessage("Please provide valid email & password!");
//       });
//     reset()

//   };

//   // login with google
//   const handleRegister = () => {
//     signUpWithGmail()
//       .then((result) => {
//         const user = result.user;
//         const userInfo = {
//           name: result?.user?.displayName,
//           email: result?.user?.email
//         }
//         axios.post("http://localhost:6001/users", userInfo).then((response) => {
//           // console.log(response)
//           alert("Signin successful!");
//           navigate("/");
//         })
//       })
//       .catch((error) => console.log(error));
//   };

//   return (
//     <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20">
//       <div className="mb-5">
//         <form
//           className="card-body"
//           method="dialog"
//           onSubmit={handleSubmit(onSubmit)}
//         >
//           <h3 className="font-bold text-lg">Please Login!</h3>

//           {/* email */}
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Email</span>
//             </label>
//             <input
//               type="email"
//               placeholder="email"
//               className="input input-bordered"
//               {...register("email")}
//             />
//           </div>

//           {/* password */}
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="password"
//               className="input input-bordered"
//               {...register("password", { required: true })}
//             />
//             <label className="label">
//               <a href="#" className="label-text-alt link link-hover mt-2">
//                 Forgot password?
//               </a>
//             </label>
//           </div>

//           {/* show errors */}
//           {errorMessage ? (
//             <p className="text-red text-xs italic">
//               Provide a correct username & password.
//             </p>
//           ) : (
//             ""
//           )}

//           {/* submit btn */}
//           <div className="form-control mt-4">
//             <input
//               type="submit"
//               className="btn bg-green text-white"
//               value="Login"
//             />
//           </div>

//           {/* close btn */}
//           <Link to="/">
//             <div
//               className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//             >
//               ✕
//             </div></Link>

//           <p className="text-center my-2">
//             Donot have an account?
//             <Link to="/signup" className="underline text-red ml-1">
//               Signup Now
//             </Link>
//           </p>
//         </form>
//         <div className="text-center space-x-3">
//           <button onClick={handleRegister} className="btn btn-circle hover:bg-green hover:text-white">
//             <FaGoogle />
//           </button>
//           <button className="btn btn-circle hover:bg-green hover:text-white">
//             <FaFacebookF />
//           </button>
//           <button className="btn btn-circle hover:bg-green hover:text-white">
//             <FaGithub />
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthProvider";
import axios from "axios";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [errorMessage, seterrorMessage] = useState("");
  const { signUpWithGmail, login } = useAuth();
  const axiosPublic = useAxiosPublic()


  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Submit handler
  const onSubmit = (data) => {
    const { email, password } = data;

    login(email, password)
      .then((result) => {
        const userInfo = {
          email: result.user.email,
          name: result.user.displayName || "Anonymous",
        };

        axiosPublic
          .post("/users", userInfo)
          .then(() => {
            alert("Login successful!");
            navigate(from, { replace: true });
          });
      })
      .catch(() => {
        seterrorMessage("Please provide a valid email & password!");
      });

    reset();
  };

  // Login with Google
  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        const userInfo = {
          name: result.user.displayName,
          email: result.user.email,
        };

        axiosPublic
          .post("/users", userInfo)
          .then(() => {
            alert("Sign-in successful!");
            navigate("/");
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="max-w-md bg-white shadow-md w-full mx-auto flex items-center justify-center my-20 p-6 rounded-md">
      <div className="mb-5">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h3 className="font-bold text-lg mb-4">Please Login!</h3>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">Email is required</p>}
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered"
              {...register("password", { required: true })}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">Password is required</p>}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover mt-2">
                Forgot password?
              </a>
            </label>
          </div>

          {/* Show errors */}
          {errorMessage && (
            <p className="text-red text-xs italic mt-2">
              {errorMessage}
            </p>
          )}

          {/* Submit Button */}
          <div className="form-control mt-4">
            <input
              type="submit"
              className="btn bg-green hover:bg-green-600 text-white"
              value="Login"
            />
          </div>

          {/* Close Button */}
          <Link to="/">
            <div className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </div>
          </Link>

          <p className="text-center my-2">
            Don't have an account?{" "}
            <Link to="/signup" className="underline text-red ml-1">
              Sign up Now
            </Link>
          </p>
        </form>

        {/* Social Logins */}
        <div className="text-center space-x-3">
          <button
            onClick={handleRegister}
            className="btn btn-circle hover:bg-green-500 hover:text-white"
          >
            <FaGoogle />
          </button>
          <button className="btn btn-circle hover:bg-green-500 hover:text-white">
            <FaFacebookF />
          </button>
          <button className="btn btn-circle hover:bg-green-500 hover:text-white">
            <FaGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
