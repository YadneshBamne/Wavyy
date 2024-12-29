import { Navbar } from './Navbar/Navbar';
import { ManageTeam } from './Navbar/teamM/manageteam';

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-8">
        <ManageTeam />
      </main>
    </div>
  );
}
