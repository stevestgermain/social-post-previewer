import React from 'react';
import { PostData } from '../../types';
import { MoreHorizontal, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

export const InstagramMockup: React.FC<{ data: PostData }> = ({ data }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden font-sans text-sm shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600">
            <div className="p-[2px] bg-white rounded-full">
              <img src={data.avatar} alt="Avatar" className="w-7 h-7 rounded-full object-cover" />
            </div>
          </div>
          <span className="font-semibold text-xs text-gray-900">{data.handle}</span>
        </div>
        <MoreHorizontal className="w-4 h-4 text-gray-600" />
      </div>

      {/* Image */}
      <div className="bg-gray-100 aspect-square w-full flex items-center justify-center overflow-hidden">
        {data.image ? (
          <img src={data.image} alt="Post content" className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-400 text-xs">No Image Selected</span>
        )}
      </div>

      {/* Actions */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-4">
            <Heart className="w-6 h-6 text-gray-900" />
            <MessageCircle className="w-6 h-6 text-gray-900 -rotate-90" />
            <Send className="w-6 h-6 text-gray-900" />
          </div>
          <Bookmark className="w-6 h-6 text-gray-900" />
        </div>
        
        <div className="font-semibold text-xs text-gray-900 mb-1">{data.likes} likes</div>
        
        <div className="text-xs text-gray-900 leading-normal">
          <span className="font-semibold mr-1">{data.handle}</span>
          {data.caption || "Write your caption to see it here..."}
        </div>
        
        <div className="text-[10px] text-gray-400 mt-1 uppercase">2 hours ago</div>
      </div>
    </div>
  );
};