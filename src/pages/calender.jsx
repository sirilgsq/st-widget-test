import { useState } from "react";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export const Calendar = () => {
  const employeeName = "Test user";
  const year = 2025;
  const leaveData = [
    {
      id: 1,
      startDate: "2025-01-15",
      endDate: "2025-01-17",
      type: "casual",
      status: "approved",
    },
    {
      id: 2,
      startDate: "2025-03-10",
      endDate: "2025-03-10",
      type: "sick",
      status: "pending",
    },
    {
      id: 3,
      startDate: "2025-05-05",
      endDate: "2025-05-07",
      type: "unpaid",
      status: "approved",
    },
  ];

  const [selectedYear, setSelectedYear] = useState(year);
  const [selectedDates, setSelectedDates] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [type, setType] = useState("casual");

  const leaveMap = {};
  leaveData.forEach((leave) => {
    let d = new Date(leave.startDate);
    const end = new Date(leave.endDate);
    while (d <= end) {
      const dateStr = d.toISOString().split("T")[0];
      leaveMap[dateStr] = leave;
      d.setDate(d.getDate() + 1);
    }
  });

  const todayStr = new Date().toISOString().split("T")[0];

  const toggleDate = (dateStr) => {
    const leave = leaveMap[dateStr];
    if (leave?.status === "approved") return;
    setSelectedDates((prev) =>
      prev.includes(dateStr)
        ? prev.filter((d) => d !== dateStr)
        : [...prev, dateStr]
    );
  };

  const handleSubmit = () => {
    console.log("Leave Request", {
      employeeName,
      dates: selectedDates,
      type,
      comment,
    });
    setSelectedDates([]);
    setComment("");
    setType("casual");
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectedYear(selectedYear - 1)}
            className="px-2 py-1 border rounded"
          >
            ◀
          </button>
          <h2 className="text-xl font-bold">{selectedYear}</h2>
          <button
            onClick={() => setSelectedYear(selectedYear + 1)}
            className="px-2 py-1 border rounded"
          >
            ▶
          </button>
        </div>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50"
          disabled={selectedDates.length === 0}
          onClick={() => setIsModalOpen(true)}
        >
          Request Leave ({selectedDates.length})
        </button>
      </div>

      {/* Legend */}
      <div className="flex gap-4 text-sm">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-blue-500 rounded" />
          Selected
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-red-500 rounded" />
          Approved
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-orange-500 rounded" />
          Pending
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 border-2 border-blue-400 rounded" />
          Today
        </div>
      </div>

      {/* calendar */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 12 }, (_, month) => {
          const firstDay = new Date(selectedYear, month, 1).getDay();
          const daysInMonth = new Date(selectedYear, month + 1, 0).getDate();
          const days = [];

          for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="h-8 w-8" />);
          }

          for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = `${selectedYear}-${String(month + 1).padStart(
              2,
              "0"
            )}-${String(day).padStart(2, "0")}`;
            const leave = leaveMap[dateStr];
            const isSelected = selectedDates.includes(dateStr);
            const isToday = dateStr === todayStr;

            let className =
              "h-8 w-8 text-sm rounded flex items-center justify-center cursor-pointer";
            if (isSelected) className += " bg-blue-500 text-white";
            else if (leave?.status === "approved")
              className += " bg-red-500 text-white cursor-not-allowed";
            else if (leave?.status === "pending")
              className += " bg-orange-500 text-white";
            else if (isToday) className += " border-2 border-blue-400";
            else className += "hover:bg-gray-200";

            days.push(
              <button
                key={day}
                className={className}
                onClick={() => toggleDate(dateStr)}
                disabled={leave?.status === "approved"}
              >
                {day}
              </button>
            );
          }

          return (
            <div key={month} className="border rounded p-2">
              <h3 className="text-center font-medium mb-1">{MONTHS[month]}</h3>
              <div className="grid grid-cols-7 gap-1 text-xs text-gray-500 mb-1">
                {DAYS.map((d) => (
                  <div key={d} className="text-center">
                    {d}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">{days}</div>
            </div>
          );
        })}
      </div>

      {/* modal  */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md space-y-4">
            <h2 className="text-lg font-bold">Leave Request</h2>
            <p className="text-sm text-gray-600">
              {selectedDates.length} days selected
            </p>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option value="casual">Casual Leave</option>
              <option value="sick">Sick Leave</option>
              <option value="unpaid">Unpaid Leave</option>
            </select>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Leave a comment"
              className="w-full border p-2 rounded"
              rows={3}
            />
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 border rounded"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
