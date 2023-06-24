import React from "react";
import { FaWpforms } from "react-icons/fa";
function Form() {
  const [inputs, setInputs] = useState({
    name: "",
    address_1: "",
    address_2: "",
    city: "",
    state: "",
    contactPerson: "",
    phone: "",
    mobile: "",
    email: "",
    website: "",
    gstNo: "",
    fuelCharge: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    address_1: "",
    address_2: "",
    city: "",
    state: "",
    contactPerson: "",
    phone: "",
    mobile: "",
    email: "",
    website: "",
    gstNo: "",
    fuelCharge: "",
  });
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const [isCash, setIsCash] = useState(true);
  const handleChange = (e) => {
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));

    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePartyEdit = (id) => {
    setEditMode(true);
    const selected = partyData?.find((d) => d._id === id);
    setFormData(selected);
  };
  const mode = () => {
    setEditMode(false);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={
        editMode
          ? "md:w-2/5 border-4 border-orange-400 bg-white shadow-xl rounded"
          : "md:w-2/5 border-t-4 border-orange-400 bg-white shadow-xl rounded"
      }
    >
      <div className="flex justify-between items-center border-b  font-bold shadow-md py-1 px-2 mb-3">
        <h2 className="text-sm md:text-xl ">Add Party</h2>
        {editMode ? (
          <p
            onClick={mode}
            className="bg-red-500 cursor-pointer text-white flex justify-center text-sm md:text-xl  items-center px-2 py-2"
          >
            <MdCancel size={28} className="mr-4" /> Cancel Edit
          </p>
        ) : (
          ""
        )}
      </div>

      <div className="px-2 md:px-6 py-4 mb-8 md:mb-0">
        <div className="flex items-center my-1">
          <label
            htmlFor="name"
            className="w-1/4 text-sm md:text-xl  text-gray-400"
          >
            Name
          </label>
          <div className="w-3/4">
            <input
              type="text"
              id="name"
              placeholder="PARTY NAME"
              className="border px-4 py-2 outline-none text-sm md:text-xl  w-full"
              value={inputs.name}
              name="name"
              onChange={handleChange}
            />
            <p className="text-red-500">{errors.name}</p>
          </div>
        </div>
        <div className="flex mt-6">
          <label
            htmlFor="name"
            className="w-1/4 text-sm md:text-xl  text-gray-400"
          >
            Address
          </label>
          <div className="w-3/4">
            <div className="">
              <input
                type="text"
                id="address"
                placeholder="ADDRESS LINE 1"
                className="border px-4 py-2 outline-none text-sm md:text-xl  w-full"
                defaultValue={editMode ? formData?.address1 : inputs.address_1}
                value={inputs.address_1}
                name="address_1"
                onChange={handleChange}
              />
              <p className="text-red-500">{errors.address_1}</p>
            </div>
            <div className="mt-2">
              <input
                type="text"
                id="address_2"
                placeholder="ADDRESS LINE 2 "
                className="border px-4 py-2 outline-none text-sm md:text-xl  w-full"
                value={inputs.address_2}
                name="address_2"
                onChange={handleChange}
              />
              <p className="text-red-500">{errors.address_2}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <label
            htmlFor="name"
            className="w-1/4 text-sm md:text-xl  text-gray-400"
          >
            City
          </label>
          <div className="w-3/4">
            <input
              type="text"
              id="city"
              placeholder="CITY"
              className="border px-4 py-2 outline-none text-sm md:text-xl  w-full"
              value={inputs.city}
              name="city"
              onChange={handleChange}
            />
            <p className="text-red-500">{errors.city}</p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <label
            htmlFor="name"
            className="w-1/4 text-sm md:text-xl  text-gray-400"
          >
            State
          </label>
          <div className="w-3/4">
            <input
              type="text"
              id="State"
              placeholder="STATE"
              className="border px-4 py-2 outline-none text-sm md:text-xl  w-full"
              value={inputs.state}
              name="state"
              onChange={handleChange}
            />
            <p className="text-red-500">{errors.state}</p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <label
            htmlFor="name"
            className="w-1/4 text-sm md:text-xl  text-gray-400"
          >
            Contact Person
          </label>
          <div className="w-3/4">
            <input
              type="text"
              id="contactPerson"
              placeholder="CONTACT PERSON NAME"
              className="border px-4 py-2 outline-none text-sm md:text-xl  w-full"
              value={inputs.contactPerson}
              name="contactPerson"
              onChange={handleChange}
            />
            <p className="text-red-500">{errors.contactPerson}</p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <label
            htmlFor="name"
            className="w-1/4 text-sm md:text-xl  text-gray-400"
          >
            Phone
          </label>
          <div className="w-3/4">
            <input
              type="text"
              id="phone"
              placeholder="PHONE"
              className="border px-4 py-2 outline-none text-sm md:text-xl  w-full"
              value={inputs.phone}
              name="phone"
              onChange={handleChange}
            />
            <p className="text-red-500">{errors.phone}</p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <label
            htmlFor="name"
            className="w-1/4 text-sm md:text-xl  text-gray-400"
          >
            Mobile
          </label>
          <div className="w-3/4">
            <input
              type="text"
              id="mobile"
              placeholder="MOBILE NO"
              className="border px-4 py-2 outline-none text-sm md:text-xl  w-full"
              value={inputs.mobile}
              name="mobile"
              onChange={handleChange}
            />
            <p className="text-red-500">{errors.mobile}</p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <label
            htmlFor="name"
            className="w-1/4 text-sm md:text-xl  text-gray-400"
          >
            Email
          </label>
          <div className="w-3/4">
            <input
              type="eamil"
              id="eamil"
              placeholder="EMAIL ADDRESS"
              className="border px-4 py-2 outline-none text-sm md:text-xl  w-full"
              value={inputs.email}
              name="email"
              onChange={handleChange}
            />
            <p className="text-red-500">{errors.email}</p>
          </div>
        </div>{" "}
        <div className="flex items-center mt-4">
          <label
            htmlFor="name"
            className="w-1/4 text-sm md:text-xl  text-gray-400"
          >
            Website
          </label>
          <div className="w-3/4">
            <input
              type="text"
              id="website"
              placeholder="WEBSITE"
              className="border px-4 py-2 outline-none text-sm md:text-xl  w-full"
              value={inputs.website}
              name="website"
              onChange={handleChange}
            />
            <p className="text-red-500">{errors.website}</p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <label
            htmlFor="name"
            className="w-1/4 text-sm md:text-xl  text-gray-400"
          >
            Gst No
          </label>
          <div className="w-3/4">
            <input
              type="text"
              id="gstNo"
              placeholder="GST NO"
              className="border px-4 py-2 outline-none text-sm md:text-xl  w-full"
              value={inputs.gstNo}
              name="gstNo"
              onChange={handleChange}
            />
            <p className="text-red-500">{errors.gstNo}</p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <label
            htmlFor="name"
            className="w-1/4 text-sm md:text-xl  text-gray-400"
          >
            Fuel Charge(%)
          </label>
          <div className="w-3/4">
            <input
              type="text"
              id="name"
              placeholder="FUEL CHARGE"
              className="border px-4 py-2 outline-none text-sm md:text-xl  w-full"
              value={inputs.fuelCharge}
              name="fuelCharge"
              onChange={handleChange}
            />

            <p className="text-red-500">{errors.fuelCharge}</p>
          </div>
        </div>
        <div className="flex justify-center my-8">
          <div>
            <div className=" mb-4 flex ml-4 items-center">
              <div
                onClick={() => setIsCash(!isCash)}
                className="border w-6 h-6 rounded-full"
              >
                {isCash && <MdOutlineCheck size={20} className="text-center" />}
              </div>
              <span className="label-text ml-3 text-gray-500 font-semibold">
                : Is Cash
              </span>
            </div>
            <button
              type="submit"
              className="bg-purple-500 text-md px-4 py-2 hover:bg-purple-600 rounded-md uppercase font-semibold text-white"
            >
              {editMode ? "Update Party" : "Create Party"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
