import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Copy, Check, User, Bot } from 'lucide-react';
import type { Message as MessageType } from '../types/chat';
import { LinkPreview } from './LinkPreview';
import { copyToClipboard } from '../utils/linkUtils';

interface MessageProps {
  message: MessageType;
}

export const Message: React.FC<MessageProps> = ({ message }) => {
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
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`flex max-w-[85%] items-start ${isUser
            ? 'flex-row-reverse space-x-reverse space-x-3'
            : 'flex-row space-x-3'
          }`}
      >
        {/* Avatar */}
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isUser ? 'bg-blue-600 text-white' : 'bg-green-600 text-white'
            }`}
        >
          {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
        </div>

        {/* Message bubble */}
        <div className={`relative group ${isUser ? 'mr-3' : 'ml-3'}`}>
          <div
            className={`rounded-2xl px-4 py-3 ${isUser
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700'
              }`}
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
            <div className="prose prose-sm max-w-none">
              {isUser ? (
                <p className="whitespace-pre-wrap m-0">{message.content}</p>
              ) : (
                <div className="prose-invert">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      p: ({ children }) => <p className="m-0 last:mb-0">{children}</p>,
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 underline"
                        >
                          {children}
                        </a>
                      ),
                      code: ({ children }) => (
                        <code className="bg-black bg-opacity-20 rounded px-1 py-0.5 text-sm">
                          {children}
                        </code>
                      ),
                      pre: ({ children }) => (
                        <pre className="bg-transparent bg-opacity-20 rounded p-3 overflow-x-auto text-sm">
                          {children}
                        </pre>
                      ),
                    }}
                  >
                    {message.content}
                  </ReactMarkdown>
                </div>
              )}
            </div>

            {/* Link previews */}
            {/* Link previews - horizontal scroll showing 3 at a time */}
            {message.links && message.links.length > 0 && (
              <div className="mt-3">
                <div className="overflow-x-auto">
                  <div className="flex gap-2 w-[calc(3*11rem)] max-w-full">
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


          </div>

          {/* Timestamp */}
          <div
            className={`text-xs text-gray-500 dark:text-gray-400 mt-1 ${isUser ? 'text-right' : 'text-left'
              }`}
          >
            {message.timestamp.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
