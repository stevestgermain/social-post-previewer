import React, { useState, useRef } from 'react';
import { 
  Share2, 
  Image as ImageIcon, 
  Type, 
  Twitter, 
  Instagram, 
  Linkedin,
  Facebook,
  Music2, 
  UploadCloud,
  X,
  User,
  Film,
  AtSign,
  Download,
  Loader2
} from 'lucide-react';
import { Card } from './components/ui/Card';
import { SectionHeader } from './components/ui/SectionHeader';
import { Button } from './components/ui/Button';
import { TwitterMockup } from './components/mockups/TwitterMockup';
import { InstagramMockup } from './components/mockups/InstagramMockup';
import { LinkedInMockup } from './components/mockups/LinkedInMockup';
import { FacebookMockup } from './components/mockups/FacebookMockup';
import { TikTokMockup } from './components/mockups/TikTokMockup';
import { ReelsMockup } from './components/mockups/ReelsMockup';
import { ThreadsMockup } from './components/mockups/ThreadsMockup';
import { Platform, PostData } from './types';

// Default Data
const DEFAULT_AVATAR = "https://picsum.photos/100/100";
const INITIAL_POST_DATA: PostData = {
  image: null,
  caption: "Excited to share this new update! 🚀 #design #development",
  avatar: DEFAULT_AVATAR,
  username: "Sarah Creator",
  handle: "sarah_creates",
  likes: "1,245",
  comments: "86",
};

const App: React.FC = () => {
  const [platform, setPlatform] = useState<Platform>('instagram');
  const [postData, setPostData] = useState<PostData>(INITIAL_POST_DATA);
  const [isDownloading, setIsDownloading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPostData(prev => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPostData(prev => ({ ...prev, avatar: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setPostData(prev => ({ ...prev, image: null }));
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleCaptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostData(prev => ({ ...prev, caption: e.target.value }));
  };

  const handleDownload = async () => {
    if (!mockupRef.current) return;
    setIsDownloading(true);
    
    try {
      // Dynamic import to avoid type issues in this environment
      const html2canvas = (await import('html2canvas')).default;
      
      const canvas = await html2canvas(mockupRef.current, {
        useCORS: true, // Needed for external images like picsum
        scale: 2, // Higher resolution
        backgroundColor: null, // Transparent background
        logging: false,
      });

      const link = document.createElement('a');
      link.download = `social-post-previewer-${platform}-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const renderMockup = () => {
    switch (platform) {
      case 'twitter': return <TwitterMockup data={postData} />;
      case 'instagram': return <InstagramMockup data={postData} />;
      case 'linkedin': return <LinkedInMockup data={postData} />;
      case 'facebook': return <FacebookMockup data={postData} />;
      case 'tiktok': return <TikTokMockup data={postData} />;
      case 'reels': return <ReelsMockup data={postData} />;
      case 'threads': return <ThreadsMockup data={postData} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] pt-5 pb-12 px-4 flex justify-center items-start">
      <div className="w-full max-w-[460px] mx-auto flex flex-col">
        
        {/* Header - The "Tilted Sticker" */}
        <header className="mb-6 relative z-10 flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-blue-600 rounded-2xl shadow-lg shadow-blue-600/10 mb-4 text-white transform -rotate-6 flex items-center justify-center hover:scale-105 duration-300 transition-transform cursor-default">
            <Share2 className="w-7 h-7" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
            Social Mockup Tool
          </h1>
          <p className="text-[13px] text-gray-500 max-w-[420px] font-normal leading-relaxed">
            Mock up your social media posts instantly. Upload an image, write your copy, and see how it looks across platforms before you publish.
          </p>
        </header>

        {/* Main Toolbox Card */}
        <Card className="flex flex-col gap-6">
          
          {/* Section: Identity */}
          <div>
            <SectionHeader title="Identity" icon={User} />
            <div className="flex gap-4 items-center">
              {/* Avatar Upload */}
              <div 
                className={`relative group w-16 h-16 shrink-0 rounded-full border-2 border-dashed transition-all duration-200 cursor-pointer overflow-hidden flex items-center justify-center
                  ${postData.avatar !== DEFAULT_AVATAR 
                    ? 'border-blue-200 bg-blue-50/30' 
                    : 'border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-gray-300'
                  }`}
                onClick={() => avatarInputRef.current?.click()}
              >
                {postData.avatar && postData.avatar !== DEFAULT_AVATAR ? (
                  <>
                    <img src={postData.avatar} alt="Avatar" className="w-full h-full object-cover" />
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setPostData(prev => ({ ...prev, avatar: DEFAULT_AVATAR }));
                        if (avatarInputRef.current) avatarInputRef.current.value = '';
                      }}
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center text-gray-400 group-hover:text-blue-500 transition-colors">
                    <User className="w-5 h-5" />
                  </div>
                )}
                <input 
                  type="file" 
                  ref={avatarInputRef} 
                  className="hidden" 
                  accept="image/*"
                  onChange={handleAvatarUpload}
                />
              </div>

              {/* Identity Inputs */}
              <div className="flex-1 space-y-2">
                 <input 
                   type="text" 
                   value={postData.username}
                   onChange={e => setPostData(prev => ({...prev, username: e.target.value}))}
                   className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-sm font-semibold text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/20 transition-all"
                   placeholder="Name"
                 />
                 <input 
                   type="text" 
                   value={postData.handle}
                   onChange={e => setPostData(prev => ({...prev, handle: e.target.value}))}
                   className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-500 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/20 transition-all"
                   placeholder="@handle"
                 />
              </div>
            </div>
          </div>

          {/* Section: Inputs */}
          <div>
            <SectionHeader title="Content Assets" icon={ImageIcon} />
            
            {/* Image Upload Area */}
            <div className="space-y-3">
              <div 
                className={`relative group rounded-2xl border-2 border-dashed transition-all duration-200 
                  ${postData.image 
                    ? 'border-blue-200 bg-blue-50/30' 
                    : 'border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-gray-300'
                  }`}
              >
                {!postData.image ? (
                  <div 
                    className="flex flex-col items-center justify-center p-8 cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-3 text-blue-600">
                      <UploadCloud className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-1">Upload Visual</span>
                    <span className="text-[10px] text-gray-400 font-medium">PNG, JPG up to 5MB</span>
                  </div>
                ) : (
                  <div className="relative p-2">
                     <div className="relative rounded-xl overflow-hidden shadow-sm aspect-video bg-gray-100">
                        <img src={postData.image} alt="Preview" className="w-full h-full object-cover" />
                        <button 
                          onClick={clearImage}
                          className="absolute top-2 right-2 p-1.5 bg-white/90 backdrop-blur rounded-lg text-gray-500 hover:text-red-500 transition-colors shadow-sm"
                        >
                          <X className="w-4 h-4" />
                        </button>
                     </div>
                  </div>
                )}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>

              {/* Text Input */}
              <div className="relative">
                 <div className="absolute top-3 left-3 text-gray-400">
                   <Type className="w-4 h-4" />
                 </div>
                 <textarea
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 text-gray-900 text-sm placeholder:text-gray-400 p-3 pl-9 min-h-[100px] focus:bg-white focus:ring-1 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 outline-none resize-none"
                  placeholder="Write your post caption here..."
                  value={postData.caption}
                  onChange={handleCaptionChange}
                 />
              </div>
            </div>
          </div>

          {/* Section: Platform Selection */}
          <div>
            <SectionHeader title="Platform Context" icon={Share2} />
            <div className="flex flex-wrap gap-2">
               <Button 
                 active={platform === 'instagram'} 
                 onClick={() => setPlatform('instagram')}
                 className="flex items-center gap-1.5"
               >
                 <Instagram className="w-3 h-3" />
                 <span>Instagram</span>
               </Button>
               <Button 
                 active={platform === 'reels'} 
                 onClick={() => setPlatform('reels')}
                 className="flex items-center gap-1.5"
               >
                 <Film className="w-3 h-3" />
                 <span>Reels</span>
               </Button>
               <Button 
                 active={platform === 'tiktok'} 
                 onClick={() => setPlatform('tiktok')}
                 className="flex items-center gap-1.5"
               >
                 <Music2 className="w-3 h-3" />
                 <span>TikTok</span>
               </Button>
               <Button 
                 active={platform === 'twitter'} 
                 onClick={() => setPlatform('twitter')}
                 className="flex items-center gap-1.5"
               >
                 <Twitter className="w-3 h-3" />
                 <span>Twitter</span>
               </Button>
               <Button 
                 active={platform === 'threads'} 
                 onClick={() => setPlatform('threads')}
                 className="flex items-center gap-1.5"
               >
                 <AtSign className="w-3 h-3" />
                 <span>Threads</span>
               </Button>
               <Button 
                 active={platform === 'linkedin'} 
                 onClick={() => setPlatform('linkedin')}
                 className="flex items-center gap-1.5"
               >
                 <Linkedin className="w-3 h-3" />
                 <span>LinkedIn</span>
               </Button>
               <Button 
                 active={platform === 'facebook'} 
                 onClick={() => setPlatform('facebook')}
                 className="flex items-center gap-1.5"
               >
                 <Facebook className="w-3 h-3" />
                 <span>Facebook</span>
               </Button>
            </div>
          </div>

          {/* Section: Live Preview */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="flex items-center justify-between mb-3">
               <SectionHeader title="Live Preview" />
               <button 
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="flex items-center gap-1.5 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wide hover:bg-gray-800 disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-sm active:scale-95"
               >
                 {isDownloading ? (
                   <Loader2 className="w-3.5 h-3.5 animate-spin" />
                 ) : (
                   <Download className="w-3.5 h-3.5" />
                 )}
                 <span>{isDownloading ? 'Saving...' : 'Download PNG'}</span>
               </button>
             </div>
             
             {/* Preview Container - Grey background to make white cards pop */}
             <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200/60 shadow-inner overflow-hidden">
               {/* Wrapper for capture - ensure no margins interfere */}
               <div className="flex justify-center w-full">
                 <div ref={mockupRef} className="w-full relative">
                    {renderMockup()}
                 </div>
               </div>
             </div>
          </div>

        </Card>

      </div>
    </div>
  );
};

export default App;
