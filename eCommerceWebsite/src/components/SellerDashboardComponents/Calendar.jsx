import React, { useState } from 'react';
import { format } from 'date-fns';
import CustomDateRangePicker from './CustomDateRangePicker';

function Calendar() {
  const [selectedDateRange, setSelectedDateRange] = useState([null, null]);
  const [comparisonDate] = useState(new Date());

  const handleDateRangeChange = (range) => {
    setSelectedDateRange(range);
    // Fetch and display data according to the selected date range
  };

  return (
    <div className='mt-7'>
      <div className="relative flex items-center gap-3">
        <CustomDateRangePicker onSelectDateRange={handleDateRangeChange} />
        <p className="text-sm">
          Compared from {selectedDateRange[0] ? format(selectedDateRange[0], 'MMMM d, yyyy') : format(comparisonDate, 'MMMM d, yyyy')} - {format(comparisonDate, 'MMMM d, yyyy')}
        </p>
      </div>
    </div>
  );
}

export default Calendar;

// {selectedDateRange[0] && (
//   <div className="mt-4">
//     <p className="text-lg">
//       Selected Date Range: {format(selectedDateRange[0], 'MMMM d, yyyy')} - {format(selectedDateRange[1], 'MMMM d, yyyy')}
//     </p>
//     {/* Display data for the selected date range */}
//   </div>
// )}