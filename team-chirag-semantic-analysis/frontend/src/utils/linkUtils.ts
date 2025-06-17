import type { LinkPreview } from '../types/chat';

// URL regex pattern to detect URLs in text
export const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;

// Extract URLs from text
export const extractUrls = (text: string): string[] => {
  const matches = text.match(URL_REGEX);
  return matches ? [...new Set(matches)] : [];
};

// Simple cache for link previews
const linkPreviewCache = new Map<string, LinkPreview>();

// Get YouTube video ID from URL
export const getYouTubeVideoId = (url: string): string | null => {
  try {
    const parsedUrl = new URL(url);
    if (parsedUrl.hostname.includes('youtube.com')) {
      return parsedUrl.searchParams.get('v');
    } else if (parsedUrl.hostname === 'youtu.be') {
      return parsedUrl.pathname.slice(1);
    }
  } catch {
    return null;
  }
  return null;
};

// Get YouTube thumbnail from URL
export const getYouTubeThumbnail = (url: string): string | null => {
  const videoId = getYouTubeVideoId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;
};

// Fetch preview (mock or backend)
export const fetchLinkPreview = async (url: string): Promise<LinkPreview> => {
  // Check cache
  if (linkPreviewCache.has(url)) {
    return linkPreviewCache.get(url)!;
  }

  const domain = new URL(url).hostname.replace('www.', '');

  // Handle YouTube links locally
  const videoId = getYouTubeVideoId(url);
  if (videoId) {
    const thumbnail = getYouTubeThumbnail(url);
    const preview: LinkPreview = {
      url,
      domain,
      title: 'YouTube Video',
      description: '',
      image: thumbnail ?? '',
      favicon: '🎥',
      badge: 'YouTube',
      loading: false,
      error: false
    };
    linkPreviewCache.set(url, preview);
    return preview;
  }

  // Fallback to backend for other URLs
  try {
    const response = await fetch(`/api/link-preview?url=${encodeURIComponent(url)}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch preview for ${url}`);
    }

    const data = await response.json();

    const preview: LinkPreview = {
      url,
      domain,
      title: data.title || '',
      description: data.description || '',
      image: data.image || '',
      favicon: data.favicon || '🌐',
      badge: data.badge || undefined,
      loading: false,
      error: false
    };

    linkPreviewCache.set(url, preview);
    return preview;
  } catch (error) {
    const errorPreview: LinkPreview = {
      url,
      domain,
      loading: false,
      error: true
    };

    linkPreviewCache.set(url, errorPreview);
    return errorPreview;
  }
};

// Copy text to clipboard
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      return successful;
    } catch {
      document.body.removeChild(textArea);
      return false;
    }
  }
};
