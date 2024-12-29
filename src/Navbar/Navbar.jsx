import { Button } from "@/components/ui/button";
export function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-white shadow-md p-4">
      <div className="flex space-x-8">
        <span className="text-xl font-semibold">WAVVE</span>
        <div className="flex space-x-4">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Calendar</Button>
          <Button variant="ghost">Sales</Button>
          <Button variant="ghost">Bookings</Button>
          <Button variant="ghost">My Team</Button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm">Akash Verma</span>
        <div className="flex items-center space-x-2">
          {/* <UserCircleIcon className="w-8 h-8 text-gray-500" />
          <Cog6ToothIcon className="w-6 h-6 text-gray-500" /> */}
        </div>
      </div>
    </nav>
  );
}
