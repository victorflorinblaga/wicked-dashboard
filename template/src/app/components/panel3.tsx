import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ScrollArea } from "@/components/ui/scroll-area";

const HighlightedText = () => {
  return (
    <div className="w-full h-full p-4">
      <ScrollArea className="h-[300px] w-full rounded-md border p-4">
        <p>
          In today's fast-paced world, the importance of clear communication cannot be 
          overstated. It plays an essential role in conveying ideas, thoughts, and emotions. 
          Engaging in meaningful conversations requires both parties to be attentive and 
          open-minded. Moreover, understanding different perspectives fosters empathy and 
          strengthens relationships. Thus, it is crucial to highlight these key elements of 
          effective communication. Here are some{" "}
          <HoverCard>
            <HoverCardTrigger className="font-bold text-blue-500 hover:underline cursor-pointer">different</HoverCardTrigger>
            <HoverCardContent>various, distinct, diverse</HoverCardContent>
          </HoverCard>{" "}
          words that encapsulate the essence of this subject. Some are{" "}
          <span className="bg-yellow-200 font-semibold hover:bg-yellow-300 transition duration-300">important</span> while others are{" "}
          <span className="text-red-500 hover:text-red-700 transition duration-300">noteworthy</span>. Equally significant is the ability to listen actively, as this skill ensures 
          that conversations are not just about speaking but also understanding. Through practice 
          and patience, anyone can develop these skills, which ultimately lead to richer dialogues 
          and stronger connections.
        </p>
      </ScrollArea>
    </div>
  );
};

export default HighlightedText;