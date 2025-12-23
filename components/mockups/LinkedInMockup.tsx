import React from 'react';
import { PostData } from '../../types';
import { Globe, MoreHorizontal, ThumbsUp, MessageSquare, Repeat, Send, Heart } from 'lucide-react';

export const LinkedInMockup: React.FC<{ data: PostData }> = ({ data }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl font-sans text-sm shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-3 pb-2 flex gap-2">
        <img src={data.avatar} alt="Avatar" className="w-10 h-10 rounded object-cover" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-sm text-gray-900 truncate block">{data.username}</span>
            <MoreHorizontal className="w-4 h-4 text-gray-500" />
          </div>
          <div className="text-xs text-gray-500 truncate">Product Designer @ Tech Corp • Building cool stuff</div>
          <div className="flex items-center gap-1 text-[10px] text-gray-500">
            <span>2h • </span>
            <Globe className="w-3 h-3" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-3 pb-2 text-sm text-gray-900 whitespace-pre-wrap leading-normal">
        {data.caption || "Share your thoughts here..."}
      </div>

      {/* Image */}
      {data.image && (
        <div className="w-full">
           <img src={data.image} alt="Post content" className="w-full h-auto object-cover max-h-[400px]" />
        </div>
      )}

      {/* Stats */}
      <div className="px-3 py-2 flex items-center justify-between text-xs text-gray-500 border-b border-gray-100">
        <div className="flex items-center gap-1">
          <div className="flex -space-x-1">
             <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center z-10">
               <ThumbsUp className="w-2 h-2 text-blue-600 fill-current" />
             </div>
             <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center">
               <Heart className="w-2 h-2 text-red-500 fill-current" />
             </div>
          </div>
          <span className="ml-1">{data.likes}</span>
        </div>
        <span>{data.comments} comments • 2 reposts</span>
      </div>

      {/* Actions */}
      <div className="px-2 py-1 flex items-center justify-between">
        <button className="flex items-center gap-1.5 px-3 py-2.5 hover:bg-gray-100 rounded text-gray-500 font-semibold text-xs transition-colors">
          <ThumbsUp className="w-4 h-4" />
          <span>Like</span>
        </button>
        <button className="flex items-center gap-1.5 px-3 py-2.5 hover:bg-gray-100 rounded text-gray-500 font-semibold text-xs transition-colors">
          <MessageSquare className="w-4 h-4" />
          <span>Comment</span>
        </button>
        <button className="flex items-center gap-1.5 px-3 py-2.5 hover:bg-gray-100 rounded text-gray-500 font-semibold text-xs transition-colors">
          <Repeat className="w-4 h-4" />
          <span>Repost</span>
        </button>
        <button className="flex items-center gap-1.5 px-3 py-2.5 hover:bg-gray-100 rounded text-gray-500 font-semibold text-xs transition-colors">
          <Send className="w-4 h-4" />
          <span>Send</span>
        </button>
      </div>
    </div>
  );
};