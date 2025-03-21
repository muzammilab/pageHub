import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Login from "./Login";
import toast from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:3001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup succesfully");
          navigate("/");
          window.location.reload();
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user)); //localStorage me store karre hai user ki info taki course page ko unauthorised user se protect kar sake.
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast.error("Error: " + err.response.data.message); // dono message ek saath print karana hai toh isliye plus lagaye concatanate karne ke liye.
      });
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
        <div className="max-w-sm w-full shadow-2xl p-8 rounded-2xl bg-white">
          <div className="">
            <form
              onSubmit={handleSubmit(onSubmit)}
              method="dialog"
              className="space-y-4"
            >
              {/* Close button */}
              <div className="flex justify-end">
                <Link to="/" className="btn btn-sm btn-circle btn-ghost ">
                  ✕
                </Link>
              </div>

              <h3 className="font-bold text-lg text-center mb-6">Sign Up</h3>
              {/* Name */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="input input-bordered w-full"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && <span>This field is required</span>}
              </div>
              {/* Email */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && <span>This field is required</span>}
              </div>
              {/* Password */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && <span>This field is required</span>}
              </div>
              {/* Signup Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="btn btn-primary w-full bg-pink-500 hover:bg-pink-600 border-none"
                >
                  Sign up
                </button>
              </div>
            </form>
            <div className="mt-4 text-center">
              Already have an account?{" "}
              <a
                className="text-pink-500 hover:text-pink-600 cursor-pointer"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </a>
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
