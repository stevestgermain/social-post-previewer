import React from 'react';
import { PostData } from '../../types';
import { Heart, MessageCircle, Send, MoreHorizontal, Music2, Camera } from 'lucide-react';

export const ReelsMockup: React.FC<{ data: PostData }> = ({ data }) => {
  return (
    <div className="relative bg-black text-white rounded-xl overflow-hidden font-sans shadow-sm aspect-[9/16] w-full max-w-[320px] mx-auto border border-gray-800">
      {/* Background Image */}
      {data.image ? (
        <img 
          src={data.image} 
          alt="Reel content" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
      ) : (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center text-gray-700">
          <span className="text-xs">No Video/Image</span>
        </div>
      )}
      
      {/* Top UI */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
         <span className="font-bold text-lg drop-shadow-md">Reels</span>
         <Camera className="w-6 h-6 drop-shadow-md" />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 pointer-events-none" />

      {/* Right Sidebar Actions */}
      <div className="absolute right-3 bottom-4 flex flex-col items-center gap-6 z-20">
        <div className="flex flex-col items-center gap-1">
          <Heart className="w-7 h-7 text-white stroke-2 drop-shadow-md" />
          <span className="text-[12px] font-medium drop-shadow-md">{data.likes}</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <MessageCircle className="w-7 h-7 text-white stroke-2 drop-shadow-md -rotate-90" />
          <span className="text-[12px] font-medium drop-shadow-md">{data.comments}</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Send className="w-7 h-7 text-white stroke-2 drop-shadow-md rotate-12" />
        </div>

        <div className="flex flex-col items-center gap-1">
          <MoreHorizontal className="w-6 h-6 text-white drop-shadow-md" />
        </div>

        {/* Audio Cover Mini */}
        <div className="mt-2 w-8 h-8 rounded-lg border-2 border-white overflow-hidden bg-gray-800">
           <img src={data.avatar} alt="Audio" className="w-full h-full object-cover opacity-80" />
        </div>
      </div>

      {/* Bottom Text Area */}
      <div className="absolute bottom-4 left-4 right-16 z-20 flex flex-col gap-3">
        
        {/* User Info */}
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
              <img src={data.avatar} alt="Avatar" className="w-full h-full object-cover" />
           </div>
           <span className="font-semibold text-sm drop-shadow-md">{data.handle}</span>
           <button className="px-2 py-0.5 rounded border border-white/40 text-[10px] font-semibold backdrop-blur-sm">Follow</button>
        </div>

        {/* Caption */}
        <div className="text-sm leading-tight drop-shadow-md line-clamp-2 opacity-95 pr-2">
          {data.caption || "Watch this amazing reel! 📸✨ #instagram #reels"}
        </div>

        {/* Audio Track */}
        <div className="flex items-center gap-2 mt-1 opacity-90">
           <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-2 py-1 rounded-full">
             <Music2 className="w-3 h-3" />
             <div className="text-[10px] font-medium overflow-hidden whitespace-nowrap max-w-[120px]">
               <span className="inline-block">Original Audio - {data.username}</span>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};