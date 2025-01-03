import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Navbar } from "../Components/Navbar";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

export function Services() {
  // State to control drawer visibility
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle drawer visibility
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <Navbar />
      <div className="p-8 bg-white">
        <div className="flex items-center mb-4 justify-between py-8">
          <div className="flex flex-col mb-7">
            <span className="text-black font-bold text-3xl">Service Menu</span>
            <span className="text-gray-500 font-thin text-xl">
              View and manage the services offered by your business
            </span>
          </div>
          <div className="space-x-4">
            <Button
              variant="secondary"
              className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-2 px-10 rounded-lg"
              onClick={toggleDrawer} // Toggle the drawer when clicked
            >
              Add
            </Button>
          </div>
        </div>

        <div className="flex flex-row space-x-4 outline outline-1 outline-gray-200 rounded-md px-2">
          <div className="bg-white rounded-md w-full flex items-center space-x-4 p-2">
            <Input
              type="text"
              placeholder="Search"
              className="flex-grow p-1 rounded-md"
            />
            <Input
              type="date"
              placeholder="Month to date"
              className="flex-grow p-1 rounded-md"
            />
            <Input
              type="text"
              placeholder="Filters"
              className="flex-grow p-1 rounded-md"
            />
          </div>
        </div>

        <div className="flex mt-10">
          {/* Sidebar */}
          <div className="w-1/4 p-4 bg-gray-100">
            {/* Categories Section */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Categories</h2>
              <ul className="space-y-2">
                {["All Categories", "Nails", "Hair", "Face", "Spa"].map(
                  (category, index) => (
                    <li key={index}>
                      <Button
                        variant={index === 1 ? "solid" : "ghost"}
                        className="w-full justify-between"
                      >
                        {category}{" "}
                        <span className="bg-gray-300 px-2 py-1 rounded-full">
                          {5}
                        </span>
                      </Button>
                    </li>
                  )
                )}
              </ul>
              <Button variant="link" className="mt-2">
                Add Categories
              </Button>
            </div>

            {/* Packages Section */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Packages</h2>
              <ul className="space-y-2">
                {["Diwali", "Holi", "Bridal"].map((packageName, index) => (
                  <li key={index}>
                    <Button variant="ghost" className="w-full justify-between">
                      {packageName}{" "}
                      <span className="bg-gray-300 px-2 py-1 rounded-full">
                        {5}
                      </span>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-3/4 p-4">
            <h1 className="text-xl font-bold mb-4">Nails</h1>
            <div className="space-y-4">
              {[...Array(6)].map((_, index) => (
                <Card key={index} className="flex justify-between items-center p-4">
                  <div>
                    <h3 className="font-medium">Nail Extension</h3>
                    <p className="text-sm text-gray-500">1h 15 mins</p>
                  </div>
                  <p className="text-lg font-semibold">₹1000</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Drawer that opens on button click */}
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerContent className="flex bg-black justify-center items-center min-h-screen border-none">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>
                  This action cannot be undone.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button onClick={toggleDrawer}>Submit</Button>
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
  );
}
