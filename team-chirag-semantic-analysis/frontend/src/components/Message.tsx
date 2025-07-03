import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Copy, Check, User, Bot } from 'lucide-react';
import type { Message as MessageType } from '../types/chat';
import { LinkPreview } from './LinkPreview';
import { copyToClipboard } from '../utils/linkUtils';
import AnalysisDetails from './AnalysisDetails';

interface MessageProps {
  message: MessageType;
  onProgressAction?: (action: string) => void;
}

export const Message: React.FC<MessageProps> = ({ message, onProgressAction }) => {
  const [copied, setCopied] = useState(false);
  const isUser = message.role === 'user';

  const handleCopy = async () => {
    const success = await copyToClipboard(message.content);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={`flex mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] ${isUser ? 'bg-blue-100' : 'bg-white'} rounded-2xl px-4 py-3 shadow-md`}
      >
        {/* Copy button */}
        <button
          onClick={handleCopy}
          className={`absolute top-2 ${isUser ? 'left-2' : 'right-2'
            } opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-black hover:bg-opacity-10 ${isUser
              ? 'text-blue-100 hover:text-white'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          title="Copy message"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          <span className="sr-only" aria-live="polite">
            {copied && 'Message copied to clipboard'}
          </span>
        </button>

        {/* Message content */}
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            p: ({ children }) => <p className="prose prose-sm max-w-none">{children}</p>,
            code: ({ children }) => <code className="bg-gray-100 px-1 py-0.5 rounded">{children}</code>,
            pre: ({ children }) => <pre className="bg-gray-100 p-2 rounded overflow-x-auto">{children}</pre>
          }}
        >
          {message.content}
        </ReactMarkdown>

        {/* Link previews */}
        {/* Link previews - horizontal scroll showing 3 at a time */}
        {message.links && message.links.length > 0 && (
          <div className="mt-3">
            <div className="overflow-x-auto">
              <div className="flex gap-3 overflow-x-auto">
                {message.links
                  .filter(link => link.title && link.domain)
                  .map((link, index) => (
                    <div
                      key={`${link.url}-${index}`}
                      className="flex-shrink-0 w-44"
                    >
                      <LinkPreview preview={link} />
                    </div>
                  ))}

              </div>
            </div>
          </div>
        )}

        {/* Analysis Details - shown only for assistant messages */}
        {message.analysis && !isUser && (
          <AnalysisDetails 
            analysis={message.analysis} 
            onProgressAction={onProgressAction}
          />
        )}
      </div>

      {/* Avatar */}
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isUser ? 'bg-blue-600 text-white' : 'bg-green-600 text-white'
          }`}
      >
        {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
      </div>
    </div>
  );
};
