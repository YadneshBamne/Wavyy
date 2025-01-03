import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navbar } from "../Components/Navbar";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import { Calendar, Delete, Pen, Trash2 } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useState } from "react";

export default function ClientsList() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle drawer visibility
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const teamMembers = [
    {
      name: "John Doe",
      phone: "7329892389",
      email: "john@gmail.com",
      reviews: "Good",
      services: "Manicure",
      date: "Jan 4, 2024",
    },
    {
      name: "Circooles",
      phone: "1234235346",
      email: "john@gmail.com",
      reviews: "Good",
      services: "Manicure",
      date: "Jan 4, 2024",
    },
    {
      name: "Command+R",
      phone: "1776983421",
      email: "john@gmail.com",
      reviews: "Good",
      services: "Manicure",
      date: "Jan 2, 2024",
    },
    {
      name: "Hourglass",
      phone: "4904576891",
      email: "john@gmail.com",
      reviews: "Good",
      services: "Manicure",
      date: "Jan 6, 2024",
    },
    {
      name: "Layers",
      phone: "8754638290",
      email: "john@gmail.com",
      reviews: "Good",
      services: "Manicure",
      date: "Jan 8, 2024",
    },
    {
      name: "Quotient",
      phone: "4254679845",
      email: "john@gmail.com",
      reviews: "Good",
      services: "Manicure",
      date: "Jan 6, 2024",
    },
    {
      name: "Sisyphus",
      phone: "8009090900",
      email: "john@gmail.com",
      reviews: "Good",
      services: "Manicure",
      date: "Jan 4, 2024",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="p-8">
        <div className="flex items-center mb-4 justify-between p-8">
          <div className="flex flex-col mb-7">
            <span className="text-black font-bold text-3xl">Clients List</span>
            <span className="text-gray-500 font-thin text-xl">
              view, add, edit and delete your client's details.
            </span>
          </div>
          <div className="space-x-4">
          <Link to="/bookings"> <Button className="border-purple-600" variant="outline">Back to Appointments</Button></Link>
            <Button
              onClick={toggleDrawer}
              variant="secondary"
              className="bg-purple-600 text-white hover:bg-purple-700 px-8 py-2 rounded-lg"
            >
              Add Clients
            </Button>
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-lg">
          <div className="flex space-x-4 p-7">
            <Input
              type="text"
              placeholder="Search by name, email or mobile number"
              className="flex-grow p-5 rounded-lg shadow-lg"
            />
            <Input
              type="text"
              placeholder="Filters"
              className="flex-grow p-5 rounded-lg shadow-lg"
            />
            <Button
              variant="outline"
              className="bg-purple-600 text-white hover:bg-purple-700 px-8 py-2 rounded-lg"
            >
              Export
            </Button>
          </div>

          <Table className="w-full bg-white shadow-2xl rounded-lg">
            <TableHeader>
              <TableRow>
                <TableHead className="text-black">Client Name</TableHead>
                <TableHead className="text-black">Phone number</TableHead>
                <TableHead className="text-black">Email address</TableHead>
                <TableHead className="text-black">Reviews</TableHead>
                <TableHead className="text-black">Services</TableHead>
                <TableHead className="text-black">Created at</TableHead>
                <TableHead className="text-black">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teamMembers.map((member, index) => (
                <TableRow key={index}>
                  <TableCell className="flex items-center space-x-4">
                    <span className="rounded-full bg-gray-200 w-8 h-8 bg-"></span>
                    <span>{member.name}</span>
                  </TableCell>
                  <TableCell>{member.phone}</TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>{member.reviews}</TableCell>
                  <TableCell>{member.services}</TableCell>
                  <TableCell>{member.date}</TableCell>
                  <TableCell className="flex space-x-2">
                    {/* Add action buttons here */}
                    <button className="text-black">
                      <Pen className="w-4 h-4" />
                    </button>
                    <button className="text-black">
                      <Calendar className="w-4 h-4" />
                    </button>
                    <button className="text-black">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerContent className="flex bg-black justify-center items-center border-none">
              <div className="max-w-md w-full bg-white rounded-3xl shadow-md p-6 m-10">
                <DrawerHeader>
                  <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                  <DrawerDescription>
                    This action cannot be undone.
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <Button className="bg-purple-600" onClick={toggleDrawer}>
                    Submit
                  </Button>
                  <DrawerClose>
                    <Button variant="outline" onClick={toggleDrawer}>
                      Cancel
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
}
