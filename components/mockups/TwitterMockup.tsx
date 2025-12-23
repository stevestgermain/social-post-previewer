import React from 'react';
import { PostData } from '../../types';
import { MessageCircle, Repeat2, Heart, Share, MoreHorizontal, BadgeCheck } from 'lucide-react';

export const TwitterMockup: React.FC<{ data: PostData }> = ({ data }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4 font-sans text-[15px] shadow-sm">
      <div className="flex gap-3">
        <img src={data.avatar} alt="Avatar" className="w-10 h-10 rounded-full object-cover shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 truncate">
              <span className="font-bold text-gray-900 truncate">{data.username}</span>
              <BadgeCheck className="w-4 h-4 text-blue-500 fill-current" />
              <span className="text-gray-500 truncate ml-0.5">@{data.handle}</span>
              <span className="text-gray-500 mx-1">·</span>
              <span className="text-gray-500">2h</span>
            </div>
            <MoreHorizontal className="w-4 h-4 text-gray-400 shrink-0" />
          </div>
          
          <div className="mt-1 text-gray-900 whitespace-pre-wrap leading-normal">
            {data.caption || "Your post caption will appear here..."}
          </div>

          {data.image && (
            <div className="mt-3 rounded-2xl overflow-hidden border border-gray-100">
              <img src={data.image} alt="Post content" className="w-full h-auto object-cover max-h-[300px]" />
            </div>
          )}

          <div className="flex items-center justify-between mt-3 max-w-[85%] text-gray-500">
            <button className="group flex items-center gap-2 hover:text-blue-500 transition-colors">
              <div className="p-1.5 rounded-full group-hover:bg-blue-50">
                <MessageCircle className="w-4 h-4" />
              </div>
              <span className="text-xs">{data.comments}</span>
            </button>
            <button className="group flex items-center gap-2 hover:text-green-500 transition-colors">
              <div className="p-1.5 rounded-full group-hover:bg-green-50">
                <Repeat2 className="w-4 h-4" />
              </div>
              <span className="text-xs">12</span>
            </button>
            <button className="group flex items-center gap-2 hover:text-pink-500 transition-colors">
              <div className="p-1.5 rounded-full group-hover:bg-pink-50">
                <Heart className="w-4 h-4" />
              </div>
              <span className="text-xs">{data.likes}</span>
            </button>
            <button className="group flex items-center gap-2 hover:text-blue-500 transition-colors">
              <div className="p-1.5 rounded-full group-hover:bg-blue-50">
                <Share className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};