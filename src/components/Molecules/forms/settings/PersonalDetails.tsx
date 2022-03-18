import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { UpdateUser } from "../../../../types/user.type";
import Button from "../../../Atom/Button";
import Input from "../../../Atom/Input";

export default function PersonalDetails() {

  function submitForm(e: FormEvent) {
    e.preventDefault();

    toast.success("Details updated successfully 🔥🔥");
    console.log(user);
  }

  const [user, setUser] = useState<UpdateUser>({
    email: '',
    first_name: '',
    last_name: '',
    username: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({...user, [e.target.name] : e.target.value})
  }

  return (
    <form onSubmit={submitForm} className="w-full sm:w-fit flex flex-col">
      <div className="px-4 py-3 block md:flex  justify-between">
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
                Update your photo and personal details
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
            First Name
          </label>
          <Input className="sm:w-96" name="first_name" required onChange={handleChange} value={user.first_name}></Input>
        </div>
        <div className="mt-2 border-b border-gray-200 flex justify-start px-4 py-5 gap-2 md:gap-12 lg:gap-20">
          <label
            htmlFor="first_name"
            className="text-dark font-medium w-full md:w-60 lg:w-80"
          >
            Last Name
          </label>
          <Input className="sm:w-96" name="last_name" required onChange={handleChange} value={user.last_name}></Input>
        </div>
        <div className="mt-2 border-b border-gray-200 flex justify-start px-4 py-5 gap-2 md:gap-12 lg:gap-20">
          <label
            htmlFor="last_name"
            className="text-dark font-medium w-full md:w-60 lg:w-80"
          >
            Username
          </label>
          <Input className="sm:w-96" name="username" required onChange={handleChange} value={user.username}></Input>
        </div>
        <div className="mt-2 border-b border-gray-200 flex justify-start px-4 py-5 gap-2 md:gap-12 lg:gap-20">
          <label
            htmlFor="username"
            className="text-dark font-medium w-full md:w-60 lg:w-80"
          >
            Email
          </label>
          <Input className="sm:w-96" name="email" type="email" required onChange={handleChange} value={user.email}></Input>
        </div>
      </div>
    </form>
  );
}
