'use client';

import React, { useEffect } from 'react';

export const InstagramEmbed = ({ reelUrl = 'https://www.instagram.com/reel/DYhKoRWANZO/' }) => {
  useEffect(() => {
    // Process Instagram script when component mounts
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, [reelUrl]);

  return (
    /* Outer crop frame: height restricted to 460px with relative overflow hidden */
    <div className="relative w-full h-[460px] sm:h-[500px] rounded-2xl overflow-hidden bg-black shadow-lg border border-[#F5DCE2]">
      
      {/* Inner wrapper shifted up to hide Instagram user header & pulled up to hide bottom captions */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-[55px] w-[105%] min-w-[326px] max-w-[500px]">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={reelUrl}
          data-instgrm-version="14"
          style={{
            background: '#000',
            border: '0',
            borderRadius: '0px',
            margin: '0 auto',
            padding: '0',
            width: '100%',
          }}
        >
          <div style={{ padding: '16px' }}>
            <a
              href={reelUrl}
              style={{
                background: '#000',
                lineHeight: '0',
                padding: '0 0',
                textAlign: 'center',
                textDecoration: 'none',
                width: '100%',
              }}
              target="_blank"
              rel="noreferrer"
            >
              <div className="py-20 text-center text-xs text-stone-400 font-sans">
                Loading Reel...
              </div>
            </a>
          </div>
        </blockquote>
      </div>

    </div>
  );
};