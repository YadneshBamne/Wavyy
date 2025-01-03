import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navbar } from "../Components/Navbar";
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from "@/components/ui/table";
import { Calendar, Delete, Pen, Trash2 } from "lucide-react";
import { useState } from "react";
import { Drawer,  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle, } from "@/components/ui/drawer";

export function ManageTeam() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle drawer visibility
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const teamMembers = [
    { name: 'John Doe', phone: '7329892389', email: 'john@gmail.com', date: 'Jan 4, 2024', access: 'Admin' },
    { name: 'Circooles', phone: '1234235346', email: 'john@gmail.com', date: 'Jan 4, 2024', access: 'Admin' },
    { name: 'Command+R', phone: '1776983421', email: 'john@gmail.com', date: 'Jan 2, 2024', access: 'Admin' },
    { name: 'Hourglass', phone: '4904576891', email: 'john@gmail.com', date: 'Jan 6, 2024', access: 'Admin' },
    { name: 'Layers', phone: '8754638290', email: 'john@gmail.com', date: 'Jan 8, 2024', access: 'Admin' },
    { name: 'Quotient', phone: '4254679845', email: 'john@gmail.com', date: 'Jan 6, 2024', access: 'Super Admin' },
    { name: 'Sisyphus', phone: '8009090900', email: 'john@gmail.com', date: 'Jan 4, 2024', access: 'Admin' },
  ];

  return (
    <div>
      <Navbar />
      <div className="p-8"> 
        <div className="flex items-center mb-4 justify-between p-8">
          <div className="flex flex-col mb-7">
            <span className="text-black font-bold text-3xl">Manage team</span>
            <span className="text-gray-500 font-thin text-xl">view and manage your team members</span>
          </div>
          <div className="space-x-4">
            <Button onClick={toggleDrawer} variant="secondary" className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-2 rounded-lg">
              Invite member
            </Button>
          </div>
        </div>

        <div className="w-full bg-white shadow-xl rounded-lg">
          <div className="flex items-center mb-4 space-x-4 p-5">
            <Input
              type="text"
              placeholder="Search"
              className="flex-grow p-5 border rounded-lg"
            />
          </div>
          <Table className="w-full bg-white shadow-xl rounded-lg">
            <TableHeader>
              <TableRow>
                <TableHead className='text-black'>Team member</TableHead>
                <TableHead className='text-black'>Phone number</TableHead>
                <TableHead className='text-black'>Email address</TableHead>
                <TableHead className='text-black'>Date of joining</TableHead>
                <TableHead className='text-black'>Access type</TableHead>
                <TableHead className='text-black'>Actions</TableHead>
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
                  <TableCell>{member.date}</TableCell>
                  <TableCell>{member.access}</TableCell>
                  <TableCell className="flex space-x-2">
                                        {/* Add action buttons here */}
                                        <button className="text-black"><Pen className="w-4 h-4" /></button>
                                        <button className="text-black"><Calendar className="w-4 h-4"/></button>
                                        <button className="text-black"><Trash2 className="w-4 h-4"/></button>
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
                <Button className="bg-purple-600" onClick={toggleDrawer}>Submit</Button>
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
