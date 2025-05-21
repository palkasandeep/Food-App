// import React, { useContext } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { FaFacebookF, FaGithub, FaGoogle, FaRegUser } from "react-icons/fa";
// import { useForm } from "react-hook-form";
// import Modal from "./Modal";
// import { AuthContext } from "../contexts/AuthProvider";
// import axios from "axios";

// const Signup = () => {
//   const { signUpWithGmail, createUser, updateUserProfile } = useContext(AuthContext);

//   const navigate = useNavigate();
//   const location = useLocation();

//   const from = location.state?.from?.pathname || "/";

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     const email = data.email;
//     const password = data.password;
//     // console.log(email, password)
//     createUser(email, password).then((result) => {
//       // Signed up 
//       const user = result.user;
//       updateUserProfile(data.email, data.photoURL).then(() => {
//         const userInfo = {
//           name: data.name,
//           email: data.email
//         }
//       });
//       axios.post("/http://localhost:6001/users", userInfo).then((response) => {
//         // console.log(response)
//         alert("Signin successful!");
//         navigate(from, { replace: true });
//       })

//     })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//       });
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
//           onSubmit={handleSubmit(onSubmit)}
//         >
//           <h3 className="font-bold text-lg">Please Create An Account!</h3>
//           {/* name */}
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Name</span>
//             </label>
//             <input
//               type="name"
//               placeholder="Your name"
//               className="input input-bordered"
//               {...register("name")}
//             />
//           </div>

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
//               {...register("password")}
//             />
//             <label className="label">
//               <a href="#" className="label-text-alt link link-hover mt-2">
//                 Forgot password?
//               </a>
//             </label>
//           </div>

//           {/* error message */}
//           <p>{errors.message}</p>

//           {/* submit btn */}
//           <div className="form-control mt-6">
//             <input
//               type="submit"
//               className="btn bg-green text-white"
//               value="Sign up"
//             />
//           </div>

//           <div className="text-center my-2">
//             Have an account?
//             <Link to="/login">
//               <button
//                 className="ml-2 underline"
//               >
//                 Login here
//               </button>
//             </Link>

//           </div>
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
//   );
// };

// export default Signup;
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthProvider";
import axios from "axios";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Signup = () => {
  const { signUpWithGmail, createUser, updateUserProfile } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic()

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const email = data.email;
      const password = data.password;
      const name = data.name;
      const photoURL = data.photoURL || "";

      const result = await createUser(email, password);
      const user = result.user;

      await updateUserProfile(name, photoURL);

      const userInfo = {
        name: name,
        email: email
      };

      await axiosPublic.post("/users", userInfo);
      alert("Signup successful!");
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Signup failed:", error);
      alert(error.message);
    }
  };

  // login with google
  const handleRegister = async () => {
    try {
      const result = await signUpWithGmail();
      const user = result.user;

      const userInfo = {
        name: user.displayName,
        email: user.email
      };

      await axiosPublic.post("/users", userInfo);
      alert("Signup successful!");
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Google Signup failed:", error);
      alert(error.message);
    }
  };

  return (
    <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20">
      <div className="mb-5">
        <form
          className="card-body"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="font-bold text-lg">Please Create An Account!</h3>

          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
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
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn bg-green hover:bg-green-600 text-white"
              value="Sign up"
            />
          </div>

          <div className="text-center my-2">
            Have an account?
            <Link to="/login">
              <button className="ml-2 underline text-blue-500">
                Login here
              </button>
            </Link>
          </div>
        </form>

        {/* Social Signup */}
        <div className="text-center space-x-3">
          <button
            onClick={handleRegister}
            className="btn btn-circle hover:bg-green hover:text-white"
          >
            <FaGoogle />
          </button>
          <button className="btn btn-circle hover:bg-green hover:text-white">
            <FaFacebookF />
          </button>
          <button className="btn btn-circle hover:bg-green hover:text-white">
            <FaGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
