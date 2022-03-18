import Button from "../../../Atom/Button";

export default function ProfileSettings() {
  return (
    <div className="flex flex-col gap-8">
      <div className="block md:flex gap-10">
        <div className="flex w-fit h-fit rounded-full px-2 py-2 bg-slate-200 mx-6 my-6">
          <img
            className="h-60 w-60 rounded-full object-cover"
            src="https://qph.fs.quoracdn.net/main-qimg-c7ee067ed5157cf2a409092640daf7a5"
            alt=""
          />
        </div>
        <div className="flex items-center gap-3">
          <Button className="w-40 border-2 border-dark text-dark bg-transparent font-light">
            Update
          </Button>
          <Button className="w-40 border-2 border-secondary">Delete</Button>
        </div>
      </div>
      <div className="w-full sm:w-fit flex gap-3">
        <Button className="w-60 border-2 border-success bg-success">
          Save Changes
        </Button>
        <Button className="w-60 border-2 border-dark text-dark bg-transparent font-light">
          Discard Changes
        </Button>
      </div>
    </div>
  );
}
