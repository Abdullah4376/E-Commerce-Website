import React, { useState } from 'react';
import { subDays, startOfMonth, endOfMonth, startOfYear, endOfYear } from 'date-fns';

function CustomDateRangePicker ({ onSelectDateRange }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedRange, setSelectedRange] = useState('Today');

  const dateRanges = [
    { label: 'Today', range: [new Date(), new Date()] },
    { label: 'Yesterday', range: [subDays(new Date(), 1), subDays(new Date(), 1)] },
    { label: 'Last 7 Days', range: [subDays(new Date(), 7), new Date()] },
    { label: 'Last 30 Days', range: [subDays(new Date(), 30), new Date()] },
    { label: 'Last 90 Days', range: [subDays(new Date(), 90), new Date()] },
    { label: 'Last Month', range: [startOfMonth(subDays(new Date(), 30)), endOfMonth(subDays(new Date(), 30))] },
    { label: 'Last Year', range: [startOfYear(subDays(new Date(), 365)), endOfYear(subDays(new Date(), 365))] },
    { label: 'Week to Date', range: [startOfMonth(new Date()), new Date()] },
    { label: 'Month to Date', range: [startOfMonth(new Date()), new Date()] },
  ];

  const handleSelect = (range) => {
    setSelectedRange(range.label);
    onSelectDateRange(range.range);
    setShowDropdown(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-1 bg-white p-2 border border-slate-500 rounded-lg"
      >
        <span className="text-slate-800 material-symbols-outlined">calendar_month</span>
        {selectedRange && selectedRange}
      </button>
      {showDropdown && (
        <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {dateRanges.map((range) => (
              <button
                key={range.label}
                onClick={() => handleSelect(range)}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDateRangePicker;