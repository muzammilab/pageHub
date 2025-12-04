import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Signup from "./Signup";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:3001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Loggedin succesfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload(); //taki hume khudse page reload na karna pade. 
            localStorage.setItem("Users", JSON.stringify(res.data.user)); //localStorage me store karre hai user ki info taki course page ko unauthorised user se protect kar sake.
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast.error("Error: " + err.response.data.message); // dono message ek saath print karana hai toh isliye plus lagaye concatanate karne ke liye.
        setTimeout(() => {}, 2000);
      });
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box max-w-sm">
          <h3 className="font-bold text-lg text-center mb-6">Login</h3>

          <form
            onSubmit={handleSubmit(onSubmit)}
            method="dialog"
            className="space-y-4"
          >
            {/* Close button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

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
            {/* Login Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="btn btn-primary w-full bg-pink-500 hover:bg-pink-600 border-none"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-4">
            New to pageHub?{" "}
            <Link to="/signup" className="text-blue-500 underline">
              Sign up{" "}
            </Link>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Login;
