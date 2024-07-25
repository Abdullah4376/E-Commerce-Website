import React, { useState } from 'react';
import CustomDateRangePicker from './CustomDateRangePicker';

function Calendar() {
  const [selectedDateRange, setSelectedDateRange] = useState([null, null]);
  // const [comparisonDate] = useState(new Date());

  // Send the selected date range to the state to show data on the graphs or on the ui.
  // Send the selected date range to the state to show data on the graphs or on the ui.
  // Send the selected date range to the state to show data on the graphs or on the ui.
  // Send the selected date range to the state to show data on the graphs or on the ui.

  const handleDateRangeChange = (range) => {
    setSelectedDateRange(range);
    // Fetch and display data according to the selected date range
  };

  // Add a better comparing functionality like Shopify
  // Add a better comparing functionality like Shopify
  // Add a better comparing functionality like Shopify
  // Add a better comparing functionality like Shopify
  // Add a better comparing functionality like Shopify
  // Add a better comparing functionality like Shopify

  return (
    <div className='mt-7'>
      <div className="relative flex items-center gap-3">
        <CustomDateRangePicker onSelectDateRange={handleDateRangeChange} />
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