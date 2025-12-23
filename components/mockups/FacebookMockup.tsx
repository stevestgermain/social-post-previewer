import React from 'react';
import { PostData } from '../../types';
import { Globe, MoreHorizontal, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

export const FacebookMockup: React.FC<{ data: PostData }> = ({ data }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl font-sans text-[15px] shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-3 pb-2 flex items-start justify-between">
        <div className="flex gap-2">
          <img src={data.avatar} alt="Avatar" className="w-10 h-10 rounded-full object-cover border border-gray-200" />
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900 leading-tight hover:underline cursor-pointer">
              {data.username}
            </span>
            <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
              <span className="hover:underline cursor-pointer">2h</span>
              <span>·</span>
              <Globe className="w-3 h-3" />
            </div>
          </div>
        </div>
        <div className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
          <MoreHorizontal className="w-5 h-5 text-gray-600" />
        </div>
      </div>

      {/* Content */}
      <div className="px-3 pb-2 text-gray-900 whitespace-pre-wrap leading-normal">
        {data.caption || "Say something about this..."}
      </div>

      {/* Image */}
      {data.image && (
        <div className="w-full bg-gray-100">
           <img src={data.image} alt="Post content" className="w-full h-auto object-cover max-h-[500px]" />
        </div>
      )}

      {/* Stats/Actions Container */}
      <div className="px-3">
        {/* Stats Row */}
        <div className="py-2.5 flex items-center justify-between text-gray-500 text-sm border-b border-gray-200/60">
          <div className="flex items-center gap-1.5">
            <div className="w-4.5 h-4.5 rounded-full bg-blue-500 flex items-center justify-center">
              <ThumbsUp className="w-2.5 h-2.5 text-white fill-current" />
            </div>
            <span className="hover:underline cursor-pointer">{data.likes}</span>
          </div>
          <div className="flex gap-3">
             <span className="hover:underline cursor-pointer">{data.comments} comments</span>
             <span className="hover:underline cursor-pointer">4 shares</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="py-1 flex items-center gap-1">
          <button className="flex-1 flex items-center justify-center gap-2 py-1.5 rounded hover:bg-gray-100 transition-colors text-gray-600 font-semibold text-[15px]">
            <ThumbsUp className="w-5 h-5" />
            <span>Like</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-1.5 rounded hover:bg-gray-100 transition-colors text-gray-600 font-semibold text-[15px]">
            <MessageCircle className="w-5 h-5" />
            <span>Comment</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-1.5 rounded hover:bg-gray-100 transition-colors text-gray-600 font-semibold text-[15px]">
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};