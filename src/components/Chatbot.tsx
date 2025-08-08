"use client";

import { useEffect } from 'react';

export default function Chatbot() {
  useEffect(() => {
    const loadBotpressScripts = () => {
      // First script
      const script1 = document.createElement('script');
      script1.src = 'https://cdn.botpress.cloud/webchat/v3.2/inject.js';
      script1.defer = true;
      
      // Second script
      const script2 = document.createElement('script');
      script2.src = 'https://files.bpcontent.cloud/2025/08/08/14/20250808142043-OTQFFOVW.js';
      script2.defer = true;

      // Ensure proper loading order
      script1.onload = () => {
        document.head.appendChild(script2);
      };

      script2.onload = () => {
        // Wait for Botpress to initialize then ensure button is clickable
        setTimeout(() => {
          const botpressContainer = document.querySelector('#bp-widget') || 
                                   document.querySelector('[data-testid="webchat-container"]') ||
                                   document.querySelector('.bp-webchat-container');
          
          if (botpressContainer) {
            // Ensure the container has proper z-index
            (botpressContainer as HTMLElement).style.zIndex = '9999';
            (botpressContainer as HTMLElement).style.pointerEvents = 'auto';
          }

          // Find and ensure button is clickable
          const botpressButton = document.querySelector('[data-testid="webchat-button"]') || 
                                 document.querySelector('.bp-webchat-button') ||
                                 document.querySelector('#bp-webchat-button') ||
                                 document.querySelector('iframe[title*="chat"]') ||
                                 document.querySelector('[role="button"]');
          
          if (botpressButton) {
            (botpressButton as HTMLElement).style.pointerEvents = 'auto';
            (botpressButton as HTMLElement).style.zIndex = '10000';
            console.log('Botpress button found and made clickable');
          }
        }, 2000);
      };

      document.head.appendChild(script1);

      return () => {
        try {
          if (document.head.contains(script1)) {
            document.head.removeChild(script1);
          }
          if (document.head.contains(script2)) {
            document.head.removeChild(script2);
          }
        } catch (error) {
          console.log('Script cleanup error:', error);
        }
      };
    };

    const cleanup = loadBotpressScripts();
    return cleanup;
  }, []);

  return null;
}