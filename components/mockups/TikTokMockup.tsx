import React from 'react';
import { PostData } from '../../types';
import { Heart, MessageCircle, Share2, Bookmark, Music, Plus } from 'lucide-react';

export const TikTokMockup: React.FC<{ data: PostData }> = ({ data }) => {
  return (
    <div className="relative bg-black text-white rounded-xl overflow-hidden font-sans shadow-sm aspect-[9/16] w-full max-w-[320px] mx-auto border border-gray-800">
      {/* Background Image */}
      {data.image ? (
        <img 
          src={data.image} 
          alt="Post content" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
      ) : (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center text-gray-700">
          <span className="text-xs">No Video/Image</span>
        </div>
      )}
      
      {/* Overlay Gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none" />

      {/* Right Sidebar Actions */}
      <div className="absolute right-2 bottom-16 flex flex-col items-center gap-5 z-20">
        {/* Profile */}
        <div className="relative mb-2">
          <div className="w-10 h-10 rounded-full border border-white/50 p-[1px] overflow-hidden bg-black">
             <img src={data.avatar} alt="Avatar" className="w-full h-full rounded-full object-cover" />
          </div>
          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-white">
            <Plus className="w-3 h-3" strokeWidth={4} />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center gap-1">
          <Heart className="w-8 h-8 text-white fill-white/90 drop-shadow-md" />
          <span className="text-[11px] font-semibold drop-shadow-md">{data.likes}</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <MessageCircle className="w-8 h-8 text-white fill-white/90 drop-shadow-md" />
          <span className="text-[11px] font-semibold drop-shadow-md">{data.comments}</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Bookmark className="w-8 h-8 text-white fill-white/90 drop-shadow-md" />
          <span className="text-[11px] font-semibold drop-shadow-md">Save</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Share2 className="w-8 h-8 text-white fill-white/90 drop-shadow-md" />
          <span className="text-[11px] font-semibold drop-shadow-md">Share</span>
        </div>

        {/* Spinning Disc */}
        <div className="mt-4 w-10 h-10 rounded-full bg-gray-900 border-[3px] border-gray-800 flex items-center justify-center overflow-hidden animate-[spin_4s_linear_infinite]">
           <div className="w-6 h-6 rounded-full bg-gray-700" />
        </div>
      </div>

      {/* Bottom Text Area */}
      <div className="absolute bottom-4 left-3 right-16 z-20 flex flex-col gap-2">
        <div className="font-bold text-shadow-sm text-[15px] drop-shadow-md">@{data.handle}</div>
        <div className="text-sm leading-tight drop-shadow-md line-clamp-3 opacity-90">
          {data.caption || "Create something amazing today... #viral #trending"}
        </div>
        <div className="flex items-center gap-2 mt-1 opacity-90">
           <Music className="w-3 h-3" />
           <div className="text-xs font-medium overflow-hidden whitespace-nowrap">
             <span className="inline-block animate-marquee">Original Sound - {data.username} • Original Sound - {data.username}</span>
           </div>
        </div>
      </div>
    </div>
  );
};