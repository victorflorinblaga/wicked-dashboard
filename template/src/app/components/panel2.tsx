import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Leaderboard = () => {
  const leaders = [
    { name: 'Eduard', sales: 220, avatar: 'https://github.com/shadcn.png' },
    { name: 'Marge', sales: 200, avatar: 'https://github.com/shadcn.png' },
    { name: 'Karen', sales: 180, avatar: 'https://github.com/shadcn.png' },
    { name: 'Max', sales: 170, avatar: 'https://github.com/shadcn.png' },
    { name: 'Ben', sales: 150, avatar: 'https://github.com/shadcn.png' },
    { name: 'Homer', sales: 50, avatar: 'https://github.com/shadcn.png' },
  ];

  leaders.sort((a, b) => b.sales - a.sales);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>
      <ul className="w-full max-w-md bg-white shadow rounded-lg">
        {leaders.map((leader, index) => (
          <li key={index} className={`flex items-center justify-between p-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
            <div className="flex items-center">
              <Avatar>
                <AvatarImage src={leader.avatar} />
                <AvatarFallback>{leader.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="font-semibold ml-2">{leader.name}</span>
            </div>
            <span className="text-gray-600">{leader.sales} sales</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;