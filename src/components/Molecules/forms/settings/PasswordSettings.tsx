import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { UpdatePassword } from "../../../../types/user.type";
import Button from "../../../Atom/Button";
import Input from "../../../Atom/Input";

export function PasswordSettings() {
  function submitForm(e: FormEvent) {
    e.preventDefault();

    if(password.confirm_password != password.new_password){
        toast.error("Passwords do not match 😔")
    }
    else if(password.old_password ==  password.new_password){
        toast.error("Old and new password can't be the same 😔")
    }
    else{
        toast.success("Details updated successfully 🔥🔥");
    }
    console.log(password);
  }
  const [password, setPassword] = useState<UpdatePassword>({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };
  return (
    <form className="w-full sm:w-fit flex flex-col" onSubmit={submitForm}>
      <div className="px-4 py-3 block md:flex  justify-between gap-10">
        <div className="block md:flex gap-4">
          <div className="flex rounded-full h-fit w-fit px-1 py-1 bg-slate-200">
            <img
              className="h-24 w-24 rounded-full object-cover"
              src="https://qph.fs.quoracdn.net/main-qimg-c7ee067ed5157cf2a409092640daf7a5"
              alt=""
            />
          </div>
          <div className="flex items-end">
            <div className="flex flex-col mb-2">
              <p className="font-bold text-2xl text-gray-600">Profile</p>
              <p className="font-extralight  text-gray-600">
                {" "}
                Update your password
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-end">
          <Button className="px-8 bg-transparent border-2 border-dark text-dark">
            Cancel
          </Button>
          <Button className="px-8 bg-success border-2 border-success" type="submit">
            Save
          </Button>
        </div>
      </div>
      <div className="mt-6">
        <div className="mt-2 border-b border-gray-200 flex justify-start px-4 py-5 gap-2 md:gap-12 lg:gap-20">
          <label
            htmlFor="firstname"
            className="text-dark font-medium w-full md:w-60 lg:w-80"
          >
            Old Password
          </label>
          <Input
            className="sm:w-96"
            name="old_password"
            type="password"
            required onChange={handleChange} value={password.old_password}
          ></Input>
        </div>
        <div className="mt-2 border-b border-gray-200 flex justify-start px-4 py-5 gap-2 md:gap-12 lg:gap-20">
          <label
            htmlFor="username"
            className="text-dark font-medium w-full md:w-60 lg:w-80"
          >
            New Password
          </label>
          <Input
            className="sm:w-96"
            name="new_password"
            type="password"
            required onChange={handleChange} value={password.new_password}
          ></Input>
        </div>
        <div className="mt-2 border-b border-gray-200 flex justify-start px-4 py-5 gap-2 md:gap-12 lg:gap-20">
          <label
            htmlFor="username"
            className="text-dark font-medium w-full md:w-60 lg:w-80"
          >
            Confirm Password
          </label>
          <Input
            className="sm:w-96"
            name="confirm_password"
            type="password"
            required onChange={handleChange} value={password.confirm_password}
          ></Input>
        </div>
      </div>
    </form>
  );
}
