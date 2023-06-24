import React, { useState } from "react";
import { useEffect } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { MdCancel } from "react-icons/md";

function BookingForm({ booking, setBooking, editMode, mode, formData }) {
  const filterItem = booking.filter((f) => f.id !== formData.id);
  const [startDate, setStartDate] = useState(new Date());
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    const ammount =
      Number(data.grossAmt) +
      Number(data.insuranceAmt) +
      Number(data.percelAmt);

    const formData = {
      id: Date.now(),
      date: startDate,
      carrier: data?.carrier,
      center: data?.center,
      consignment: data?.consignment,
      grossAmt: data?.grossAmt,
      insuranceAmt: data?.insuranceAmt,
      mobileNo: data?.mobileNo,
      netAmt: ammount,
      package: data?.package,
      percelAmt: data?.percelAmt,
      receiver: data?.receiver,
      remark: data?.remark,
      sender: data?.sender,
      weight: data?.weight,
    };
    const newFormArray = [...filterItem, formData];
    localStorage.setItem("booking", JSON.stringify(newFormArray));
    if (newFormArray) {
      setBooking(newFormArray);
    }
    reset();
  };
  useEffect(() => {
    const bookingData = localStorage.getItem("booking");
    const data2 = JSON.parse(bookingData);
    if (bookingData) {
      setBooking(data2);
    }
  }, [setBooking]);

  return (
   
  );
}

export default BookingForm;
