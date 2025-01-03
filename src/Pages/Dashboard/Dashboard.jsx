import React from "react";
import { useState } from "react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import avatar1 from "../../assets/Avatar-1.png";
import avatar2 from "../../assets/Avatar-2.png";
import avatar3 from "../../assets/Avatar.png";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Navbar } from "../Components/Navbar";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const Dashboard = () => {

  const chartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Net Sales",
            data: [10000, 20000, 15000, 25000, 30000, 40000],
            borderColor: "#3B82F6",
            backgroundColor: "rgba(59, 130, 246, 0.5)",
            fill: true,
            tension: 0.4,
          },
          {
            label: "Gross Sales",
            data: [20000, 30000, 25000, 35000, 45000, 60000],
            borderColor: "#10B981",
            backgroundColor: "rgba(16, 185, 129, 0.5)",
            fill: true,
            tension: 0.4,
          },
        ],
      };
    
      // Chart Options
      const chartOptions = {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return `$${context.raw.toLocaleString()}`;
              },
            },
          },
        },
        scales: {
          y: {
            ticks: {
              callback: function (value) {
                return `$${value / 1000}k`;
              },
            },
          },
        },
      };
  const teamMembers = [
    { name: "John Doe", image: avatar1 },
    { name: "Hourglass", image: avatar2 },
    { name: "Layers", image: avatar3 },
  ];

  const [selectedDay, setSelectedDay] = useState(4);
  const days = [
    { day: "SUN", date: 1 },
    { day: "MON", date: 2 },
    { day: "TUE", date: 3 },
    { day: "THU", date: 4 },
    { day: "WED", date: 5 },
    { day: "FRI", date: 6 },
    { day: "SAT", date: 7 },
  ];
  return (
    <>
      <Navbar />
      <div className="p-6 space-y-6">
        {/* Statistics Section */}
        <div className="grid grid-cols-4 gap-5">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Active Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-semibold">2,420</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Employees</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-semibold">1,210</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Total customers served
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-semibold">316</p>
            </CardContent>
          </Card>
          <Card className="p-8 max-w-md mx-auto">
            <h2 className="text-md font-semibold text-gray-900 mb-4">
              Upcoming Appointments
            </h2>
            <div className="grid grid-cols-7 gap-4 text-center">
              {days.map(({ day, date }) => (
                <Button
                  key={date}
                  variant={selectedDay === date ? "default" : "ghost"}
                  className={`flex flex-col items-center justify-center rounded-md py-9 space-y-3 ${
                    selectedDay === date
                      ? "bg-purple-500 text-white"
                      : "text-gray-500 hover:text-black"
                  }`}
                  onClick={() => setSelectedDay(date)}
                >
                  <span className="text-xs font-normal">{day}</span>
                  <span className="text-2xl font-bold">{date}</span>
                </Button>
              ))}
            </div>
          </Card>
          <Card className="col-span-3">
            {" "}
            <CardHeader>
              {" "}
              <CardTitle>Gross & Net Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <Line data={chartData} options={chartOptions} />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader></CardHeader>
            <CardContent>
              <img src={image1} alt="Hair & Style" className="rounded-md" />
              <p className="mt-3 text-lg font-semibold">Hair & Styles</p>
              <p className="text-lg font-semibold ">
                Price: <span className="text-purple-600">$75.00</span>
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader></CardHeader>
            <CardContent>
              <img src={image2} alt="Nails" className="rounded-md" />
              <p className="mt-3 text-lg font-semibold">Nails</p>
              <p className="text-lg font-semibold ">
                Price: <span className="text-purple-600">$75.00</span>
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader></CardHeader>
            <CardContent>
              <img src={image3} alt="Fitness" className="rounded-md" />
              <p className="mt-3 text-lg font-semibold">Fitness</p>
              <p className="text-lg font-semibold ">
                Price: <span className="text-purple-600">$75.00</span>
              </p>
            </CardContent>
          </Card>

          <div className="">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Top team members
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="flex flex-col items-center text-center shadow-md"
                >
                  <Avatar className="w-15 h-15 mb-6 mt-4">
                    <AvatarImage src={member.image} alt={member.name} />
                  </Avatar>
                  <p className="text-sm p-2 font-medium text-gray-800">
                    {member.name}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="items-end justify-end ">
          <Card>
            <CardHeader>
              <CardTitle>Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={avatar1} alt="John Doe" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">John Doe</p>
                        <p className="text-sm text-gray-500">Nail Extension</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">12:00 - 12:45</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

// import React from "react";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
// } from "@/components/ui/card";
// import { Line } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
// import { Avatar } from "@/components/ui/avatar";

// // Register chart components
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const Dashboard = () => {
//   // Chart Data
//   const chartData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "Net Sales",
//         data: [10000, 20000, 15000, 25000, 30000, 40000],
//         borderColor: "#3B82F6",
//         backgroundColor: "rgba(59, 130, 246, 0.5)",
//         fill: true,
//         tension: 0.4,
//       },
//       {
//         label: "Gross Sales",
//         data: [20000, 30000, 25000, 35000, 45000, 60000],
//         borderColor: "#10B981",
//         backgroundColor: "rgba(16, 185, 129, 0.5)",
//         fill: true,
//         tension: 0.4,
//       },
//     ],
//   };

//   // Chart Options
//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       tooltip: {
//         callbacks: {
//           label: function (context) {
//             return `$${context.raw.toLocaleString()}`;
//           },
//         },
//       },
//     },
//     scales: {
//       y: {
//         ticks: {
//           callback: function (value) {
//             return `$${value / 1000}k`;
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//       {/* Metrics Cards */}
//       <div className="grid grid-cols-3 gap-4 col-span-3">
//         <Card>
//           <CardContent>
//             <CardTitle>Total Customers</CardTitle>
//             <p className="text-2xl font-bold">2,420</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent>
//             <CardTitle>Members</CardTitle>
//             <p className="text-2xl font-bold">1,210</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent>
//             <CardTitle>Active Now</CardTitle>
//             <p className="text-2xl font-bold">316</p>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Sales Chart */}
//       <Card className="col-span-3">
//         <CardHeader>
//           <CardTitle>Gross & Net Sales</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="h-64">
//             <Line data={chartData} options={chartOptions} />
//           </div>
//         </CardContent>
//       </Card>

//       {/* Top Services */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 col-span-3">
//         <Card>
//           <CardContent>
//             <img
//               src="hair-style.jpg"
//               alt="Hair & Style"
//               className="w-full rounded-md"
//             />
//             <p className="mt-4">Hair & Style</p>
//             <p>Price: $75.00</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent>
//             <img
//               src="nails.jpg"
//               alt="Nails"
//               className="w-full rounded-md"
//             />
//             <p className="mt-4">Nails</p>
//             <p>Price: $75.00</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent>
//             <img
//               src="fitness.jpg"
//               alt="Fitness"
//               className="w-full rounded-md"
//             />
//             <p className="mt-4">Fitness</p>
//             <p>Price: $75.00</p>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Appointments & Team */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 col-span-3">
//         <Card>
//           <CardHeader>
//             <CardTitle>Upcoming Appointments</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="grid grid-cols-7 gap-2 text-center">
//               {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
//                 (day, idx) => (
//                   <div
//                     key={idx}
//                     className={`p-2 rounded-md ${
//                       day === "Thu"
//                         ? "bg-indigo-600 text-white"
//                         : "bg-gray-100 text-gray-700"
//                     }`}
//                   >
//                     {day}
//                   </div>
//                 )
//               )}
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Top Team Members</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="flex space-x-4">
//               <Avatar src="john.jpg" alt="John Doe" />
//               <Avatar src="hourglass.jpg" alt="Hourglass" />
//               <Avatar src="layers.jpg" alt="Layers" />
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Activity</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ul>
//               {Array(4)
//                 .fill("Nail extension")
//                 .map((activity, idx) => (
//                   <li key={idx} className="flex justify-between py-1">
//                     <p>{activity}</p>
//                     <p>12:00 - 12:45</p>
//                   </li>
//                 ))}
//             </ul>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
