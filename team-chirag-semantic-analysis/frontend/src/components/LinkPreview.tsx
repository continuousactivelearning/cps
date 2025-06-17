import React from 'react';
import { ExternalLink, AlertCircle } from 'lucide-react';
import type { LinkPreview as LinkPreviewType } from '../types/chat';
import { getYouTubeVideoId } from '../utils/linkUtils';

interface LinkPreviewProps {
  preview: LinkPreviewType;
}

export const LinkPreview: React.FC<LinkPreviewProps> = ({ preview }) => {
  if (preview.loading) {
    return (
      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 bg-gray-50 dark:bg-gray-800 animate-pulse">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded" />
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded flex-1" />
        </div>
        <div className="w-full h-24 bg-gray-300 dark:bg-gray-600 rounded mb-2" />
        <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded mb-1" />
        <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-3/4" />
      </div>
    );
  }

  if (preview.error) {
    return (
      <a
        href={preview.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline transition-colors"
      >
        <AlertCircle className="w-4 h-4 text-red-500" />
        <span className="truncate">{preview.url}</span>
        <ExternalLink className="w-4 h-4 flex-shrink-0" />
      </a>
    );
  }

  const isYouTube = preview.badge === 'YouTube';
  const videoId = isYouTube ? getYouTubeVideoId(preview.url) : null;

  return (
    <a
      href={preview.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative block border rounded-lg overflow-hidden transition-colors group ${
        isYouTube
          ? 'border-red-500'
          : preview.badge === 'DSA'
          ? 'border-blue-500'
          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
      }`}
    >
      {/* Badge */}
      {preview.badge && (
        <div
          className={`absolute top-2 left-2 px-2 py-0.5 text-xs font-bold text-white rounded ${
            isYouTube ? 'bg-red-600' : 'bg-blue-600'
          }`}
        >
          {preview.badge}
        </div>
      )}

      {/* Media (YouTube embed or image) */}
      <div className="aspect-video w-full overflow-hidden bg-black">
        {isYouTube && videoId ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={preview.title || 'YouTube video'}
            className="w-full h-full"
            allowFullScreen
          />
        ) : preview.image ? (
          <img
            src={preview.image}
            alt={preview.title || 'Link preview'}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            loading="lazy"
          />
        ) : null}
      </div>

      {/* Meta info */}
      <div className="p-3">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-lg">{preview.favicon || '🌐'}</span>
          <span className="text-sm text-gray-600 dark:text-gray-400 truncate">
            {preview.domain}
          </span>
          <ExternalLink className="w-4 h-4 text-gray-400 ml-auto flex-shrink-0" />
        </div>
        {preview.title && (
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 line-clamp-2 mb-1">
            {preview.title}
          </h3>
        )}
        {preview.description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {preview.description}
          </p>
        )}
      </div>
    </a>
  );
};
