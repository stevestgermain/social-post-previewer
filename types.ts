import React from 'react';

export type Platform = 'twitter' | 'instagram' | 'linkedin' | 'facebook' | 'tiktok' | 'reels' | 'threads';

export interface PostData {
  image: string | null;
  caption: string;
  avatar: string;
  username: string;
  handle: string;
  likes: string;
  comments: string;
}

export interface PlatformConfig {
  id: Platform;
  label: string;
  icon: React.ComponentType<any>;
}