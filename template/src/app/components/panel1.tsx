import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

const RandomPage = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(data:image/png;base64,...emoji_background_image...)' }}>
      <div className="absolute inset-0 backdrop-opacity-50 backdrop-blur-md flex flex-col items-center justify-center">
        <Skeleton className="w-[300px] h-[40px] mb-4 rounded-full" />
        <Badge variant="outline">Welcome to the Emoji Page!</Badge>
      </div>
    </div>
  );
};

export default RandomPage;