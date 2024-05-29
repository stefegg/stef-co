import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { format, differenceInDays, endOfDay } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "./date-styles.css";
import { HotelContext } from "@/app/_providers";
import { useContext } from "react";

const DateRange = () => {
  const [startDate, setStartDate] = useState<Date | null>();
  const [endDate, setEndDate] = useState<Date | null>();
  const { setStayLength } = useContext(HotelContext);
  const onChange = (date: [Date | null, Date | null]) => {
    const [start, end] = date;
    setStartDate(start);
    setEndDate(end);
    if (start && end) {
      findNights(start, end);
    }
  };
  const findNights = (start: Date, end: Date) => {
    if (start && end !== null) {
      const stayRange = differenceInDays(endOfDay(end), endOfDay(start));
      setStayLength({
        startDate: format(start, "MMM do yyyy"),
        endDate: format(end, "MMM do yyyy"),
        numDays: stayRange + 1,
        numNights: stayRange,
      });
    } else return;
  };
  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      minDate={new Date()}
      selectsRange
      inline
    />
  );
};

export default DateRange;
