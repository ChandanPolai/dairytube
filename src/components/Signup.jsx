import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import { Container } from "./index.js";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register as createAccount } from "../app/Slices/userSlice.js";
import { icons } from "../assets/Icons.jsx";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authStatus = useSelector(({ auth }) => auth.status);
  const { loading, userData } = useSelector(({ user }) => user);


  // 🚀🚀this code is comemet by chandan hata dena 
  
   useEffect(() => {
    if (authStatus) {
      navigate("/");
    } else if (!authStatus && userData) {
      navigate("/login");
    }
  }, [authStatus, userData, navigate]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
    if (authStatus) navigate("/");
    dispatch(createAccount(data));
  };

  return (
    <div>
      <Container>
        <div className="bg-gray-900 sm:rounded p-8 text-gray-100 max-w-md mx-auto ">
          <p className="text-xl font-bold text-center mb-6">Sign Up</p>
          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="">
              <Input
                label="Full Name"
                type="text"
                {...register("fullName", {
                  required: "Please enter your fullName",
                })}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div>
              <Input
                label="Username"
                type="text"
                {...register("username", {
                  required: "Please enter your username",
                })}
              />
              {errors.username && (
                <p className="text-red-500 text-sm">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div>
              <Input
                label="Email"
                type="email"
                {...register("email", {
                  required: "Enter your email",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div>
              <Input
                label="Password"
                type="password"
                {...register("password", {
                  required: "Password must be required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <Input
                label="Avatar"
                type="file"
                {...register("avatar", {
                  required: "please upload your avatar",
                  validate: (file) => {
                    const allowedExtensions = [
                      "image/jpeg",
                      "image/png",
                      "image/jpg",
                    ];
                    const fileType = file[0]?.type;
                    return allowedExtensions.includes(fileType)
                      ? true
                      : "Invalid file type! Only .png .jpg and .jpeg files are accepted";
                  },
                })}
                accept="image/*"
              />
              {errors.avatar && (
                <p className="text-red-500 text-sm">{errors.avatar.message}</p>
              )}
            </div>
            <div>
              <Input
                label="coverImage"
                type="file"
                {...register("coverImage", {
                  required: true,
                  validate: (file) => {
                    const allowedExtensions = [
                      "image/jpeg",
                      "image/png",
                      "image/jpg",
                    ];
                    const fileType = file[0]?.type;
                    return allowedExtensions.includes(fileType)
                      ? true
                      : "Invalid file type! Only .png .jpg and .jpeg files are accepted";
                  },
                })}
                accept="image/*"
              />
              {errors.coverImage && (
                <p className="text-red-500 text-sm">
                  {errors.coverImage.message}
                </p>
              )}
            </div>
            

            <Button
              type="submit"
              disabled={loading}
              children="Sign Up"
              className="w-full disabled:cursor-not-allowed bg-purple-600 rounded-md py-2 font-semibold hover:bg-purple-700 focus:bg-purple-900 pointer"
            >
              {loading ? <span>{icons.loading}</span> : "Sign Up"}
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-400">
            you have an account?{" "}
            <Link to={"/login"} className="text-gray-100 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Signup;
