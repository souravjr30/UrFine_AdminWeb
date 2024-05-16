import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.css';

const DatePickerComponent = ({ selectedDate, handleChange }) => {
  

  return (
    <DatePicker
      selected={selectedDate}
      onChange={date => handleChange(date)}
      dateFormat="dd-MM-yyyy"
      minDate={new Date()}
      showYearDropdown
      scrollableYearDropdown
      // Apply custom styles
    />
  );
};

export default DatePickerComponent;
