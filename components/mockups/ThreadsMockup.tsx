import React from 'react';
import { PostData } from '../../types';
import { Heart, MessageCircle, Repeat, Send, MoreHorizontal, CheckCircle2 } from 'lucide-react';

export const ThreadsMockup: React.FC<{ data: PostData }> = ({ data }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4 font-sans text-[15px] shadow-sm">
      <div className="flex gap-3">
        {/* Left Column: Avatar + Thread Line */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <img src={data.avatar} alt="Avatar" className="w-9 h-9 rounded-full object-cover border border-gray-100" />
            <div className="absolute -bottom-1 -right-1 bg-black text-white p-[2px] rounded border border-white">
              <span className="flex items-center justify-center w-3 h-3 text-[8px] font-bold">+</span>
            </div>
          </div>
          <div className="w-0.5 flex-1 bg-gray-100 mt-3 mb-2 rounded-full min-h-[40px]" />
          <div className="w-4 h-4 rounded-full relative">
             <img src={data.avatar} alt="Reply Avatar" className="w-full h-full rounded-full opacity-40" />
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="flex-1 min-w-0 pb-2">
          {/* Header */}
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1">
              <span className="font-semibold text-gray-900 text-[14px]">{data.handle}</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-500 text-white" />
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <span className="text-sm">2h</span>
              <MoreHorizontal className="w-5 h-5" />
            </div>
          </div>

          {/* Caption */}
          <div className="text-gray-900 whitespace-pre-wrap leading-relaxed text-[15px] mb-3">
            {data.caption || "Start a thread..."}
          </div>

          {/* Image */}
          {data.image && (
            <div className="mb-3 rounded-lg overflow-hidden border border-gray-100">
              <img src={data.image} alt="Post content" className="w-full h-auto object-cover max-h-[400px]" />
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-4 mt-2">
            <button className="group">
               <Heart className="w-[22px] h-[22px] text-gray-900 stroke-[1.5]" />
            </button>
            <button className="group">
               <MessageCircle className="w-[22px] h-[22px] text-gray-900 stroke-[1.5] -scale-x-100" />
            </button>
            <button className="group">
               <Repeat className="w-[22px] h-[22px] text-gray-900 stroke-[1.5]" />
            </button>
            <button className="group">
               <Send className="w-[22px] h-[22px] text-gray-900 stroke-[1.5] -rotate-45 translate-x-1 -translate-y-1" />
            </button>
          </div>
          
          <div className="mt-3 text-gray-400 text-sm">
             {data.likes} likes
          </div>
        </div>
      </div>
    </div>
  );
};