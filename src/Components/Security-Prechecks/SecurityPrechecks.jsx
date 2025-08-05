import { useEffect, useState, useMemo } from "react";

const blockedTokens = [
  'adalo',
  'bot',
  'buildfire',
  'capacitor',
  'cordova',
  'crawler',
  'crosswalk',
  'electron',
  'flutter',
  'gonative',
  'headless',
  'headlesschrome',
  'median',
  'phantom',
  'playwright',
  'puppeteer',
  'qtwebengine',
  'reactnativewebview',
  'scraper',
  'selenium',
  'spider',
  'web2app',
  'webviewgold',
  'wv',
];

const simpleHash = async (str) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

const EXPECTED_BYPASS_HASH = "663262d758a714c965874feda3bd5e152ded2f93e2ef87c6ba44dc2e35d55aac";

const SecurityPrechecks = ({ children }) => {
  const [failedChecks, setFailedChecks] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [bypassValidated, setBypassValidated] = useState(false);
  
  const detectionResults = useMemo(() => {
    const isLocal = location.hostname === 'localhost' ||
                    location.hostname === '127.0.0.1' ||
                    location.hostname.includes('192.168.');

    let importMetaEnv;
    try {
      importMetaEnv = import.meta.env.VITE_BYPASS_SECURITY_PRECHECKS;
    } catch (e) {
      importMetaEnv = undefined;
    }

    const envValue = window.import?.meta?.env?.VITE_BYPASS_SECURITY_PRECHECKS ?? importMetaEnv;
    const envBypass = String(envValue ?? '').toLowerCase() === 'true';

    let userAgent = '';
    try {
      const rawUserAgent = navigator.userAgent;
      if (rawUserAgent !== undefined && rawUserAgent !== null) {
        userAgent = String(rawUserAgent).toLowerCase();
      }
    } catch (e) {
      userAgent = '';
    }

    const getWhitelistedBrowser = (userAgent) => {
      if (!userAgent || typeof userAgent !== 'string') {
        return null;
      }
      
      const ua = userAgent;

      if (/chrome\/[\d.]+/.test(ua) && !/edg\/|opr\/|samsungbrowser/.test(ua)) {
        return 'Chrome';
      }
      if (/safari\/[\d.]+/.test(ua) && /applewebkit/.test(ua) && !/chrome/.test(ua)) {
        return 'Safari';
      }
      if (/edg\/[\d.]+/.test(ua)) {
        return 'Edge';
      }
      if (/samsungbrowser\/[\d.]+/.test(ua)) {
        return 'Samsung Internet';
      }
      if (/firefox\/[\d.]+/.test(ua)) {
        return 'Firefox';
      }
      if (/opr\/[\d.]+/.test(ua) || /opera\/[\d.]+/.test(ua)) {
        return 'Opera';
      }

      return null;
    };

    const hasSuspiciousUA = blockedTokens.some(token => userAgent.includes(token));
    const isIOSWV = /iphone|ipad|ipod/.test(userAgent) && !/safari/.test(userAgent);
    const isAndroidWV = /android/.test(userAgent) && 
                        /version\/[\d.]+/.test(userAgent) && 
                        /safari/i.test(userAgent);
    const isWebView = isIOSWV || isAndroidWV;
    const isRealBrowser = !!getWhitelistedBrowser(userAgent);

    return {
      isLocal,
      envBypass,
      hasSuspiciousUA,
      isWebView,
      isRealBrowser,
    };
  }, []);

  // Check bypass hash on component mount
  useEffect(() => {
    const checkBypassHash = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const bypassParam = urlParams.get('qa_bypass');
        
        if (bypassParam) {
          const hash = await simpleHash(bypassParam);
          if (hash === EXPECTED_BYPASS_HASH) {
            setBypassValidated(true);
            console.warn('Warning: Security prechecks bypassed via QA automation');
          }
        }
      } catch (e) {
        // Hash validation failed, continue with normal checks
      }
    };

    checkBypassHash();
  }, []);

  // Memoize headless checks
  const headlessChecks = useMemo(() => [
    // Check for missing features
    () => {
      try {
        return !navigator.languages || navigator.languages.length === 0;
      } catch (e) {
        return true;
      }
    },
    // Check for unusual screen properties
    () => {
      try {
        const width = screen.width;
        const height = screen.height;
        if (width === null || width === undefined || width === 0 || !width) {
          return true;
        }
        if (height === null || height === undefined || height === 0 || !height) {
          return true;
        }
        return false;
      } catch (e) {
        return true;
      }
    },
    // Check for missing plugins
    () => {
      try {
        return navigator.plugins.length === 0;
      } catch (e) {
        return true;
      }
    },
    // Check for headless indicators
    () => {
      try {
        const outerWidth = window.outerWidth;
        const outerHeight = window.outerHeight;
        if (outerWidth === null || outerWidth === undefined || outerWidth === 0 || !outerWidth) {
          return true;
        }
        if (outerHeight === null || outerHeight === undefined || outerHeight === 0 || !outerHeight) {
          return true;
        }
        return false;
      } catch (e) {
        return true;
      }
    },
    () => {
      try {
        return typeof window.chrome === 'undefined';
      } catch (e) {
        return true;
      }
    },
    () => {
      try {
        return !!navigator.webdriver;
      } catch (e) {
        return true;
      }
    },
  ], []);

  useEffect(() => {
    const runHeadlessChecks = () => {
      const count = headlessChecks.filter(check => {
        try {
          return check();
        } catch (e) {
          return true; // If a check throws an error, consider it failed
        }
      }).length;
      
      setFailedChecks(count);
      setIsLoading(false);
    };

    const timeoutId = setTimeout(runHeadlessChecks, 100);
    return () => clearTimeout(timeoutId);
  }, [headlessChecks]);

  if (isLoading) {
    return null;
  }

  // Determine if blocked
  let isBlocked = detectionResults.hasSuspiciousUA || 
                  failedChecks >= 2 || 
                  detectionResults.isWebView || 
                  !detectionResults.isRealBrowser;

  // Apply bypasses
  const shouldBypass = detectionResults.envBypass || bypassValidated || 
                      (detectionResults.isLocal && detectionResults.envBypass);

  if (shouldBypass) {
    isBlocked = false;
    if (detectionResults.isLocal) {
      console.warn('Warning: Development environment detected. Wrapper and bot screening disabled');
    } else if (bypassValidated) {
      console.warn('Warning: Security prechecks bypassed via QA automation');
    } else {
      console.warn('Warning: Security prechecks bypassed via environment variable');
    }
  } else {
    console.log('Wrapper and bot screening enabled');
  }

  if (isBlocked) {
    console.error('Blocked: suspected wrapper or in-app browser');
    return (
      <div>
        <h1>Access Denied</h1>
        <p>This website is not available in in-app browsers or unauthorized wrappers.</p>
      </div>
    );
  }

  return children;
};

export {
  blockedTokens,
  SecurityPrechecks,
};
