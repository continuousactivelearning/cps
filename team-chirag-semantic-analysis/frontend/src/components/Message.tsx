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
      <div className="flex items-start space-x-3 max-w-[85%]">
        {/* Avatar - show before content for assistant, after for user */}
        {!isUser && (
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">
            <Bot className="w-4 h-4" />
          </div>
        )}
        
        <div
          className={`relative group ${isUser 
            ? 'bg-blue-100 dark:bg-blue-900/30' 
            : 'bg-white dark:bg-gray-800'
          } rounded-2xl px-4 py-3 shadow-md border dark:border-gray-700`}
        >
          {/* Copy button */}
          <button
            onClick={handleCopy}
            className={`absolute top-2 ${isUser ? 'left-2' : 'right-2'
              } opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-black hover:bg-opacity-10 ${isUser
                ? 'text-blue-600 hover:text-blue-800'
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
        <div className="prose prose-sm max-w-none dark:prose-invert">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              // Headings
              h1: ({ children }) => <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 border-b pb-2">{children}</h1>,
              h2: ({ children }) => <h2 className="text-xl font-bold mb-3 mt-6 text-gray-900 dark:text-gray-100">{children}</h2>,
              h3: ({ children }) => <h3 className="text-lg font-semibold mb-2 mt-4 text-gray-800 dark:text-gray-200">{children}</h3>,
              h4: ({ children }) => <h4 className="text-base font-semibold mb-2 mt-3 text-gray-800 dark:text-gray-200">{children}</h4>,
              
              // Paragraphs
              p: ({ children }) => <p className="mb-3 text-gray-700 dark:text-gray-300 leading-relaxed">{children}</p>,
              
              // Lists
              ul: ({ children }) => <ul className="list-disc pl-6 mb-3 space-y-1">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal pl-6 mb-3 space-y-1">{children}</ol>,
              li: ({ children }) => <li className="text-gray-700 dark:text-gray-300">{children}</li>,
              
              // Code blocks and inline code
              code: (props) => {
                const { className, children } = props;
                const match = /language-(\w+)/.exec(className || '');
                const language = match ? match[1] : '';
                const isInline = !language && !className?.includes('language-');
                
                if (isInline) {
                  return (
                    <code 
                      className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-1.5 py-0.5 rounded text-sm font-mono"
                    >
                      {children}
                    </code>
                  );
                }
                
                return (
                  <div className="my-4">
                    {language && (
                      <div className="bg-gray-200 dark:bg-gray-700 px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 rounded-t border-b">
                        {language}
                      </div>
                    )}
                    <pre className={`bg-gray-100 dark:bg-gray-800 p-4 rounded${language ? '-b' : ''} overflow-x-auto text-sm`}>
                      <code className="text-gray-800 dark:text-gray-200 font-mono">
                        {children}
                      </code>
                    </pre>
                  </div>
                );
              },
              
              // Block quotes
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-blue-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400 bg-blue-50 dark:bg-blue-900/20 py-2">
                  {children}
                </blockquote>
              ),
              
              // Strong and emphasis
              strong: ({ children }) => <strong className="font-bold text-gray-900 dark:text-gray-100">{children}</strong>,
              em: ({ children }) => <em className="italic text-gray-800 dark:text-gray-200">{children}</em>,
              
              // Links
              a: ({ href, children }) => (
                <a 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline"
                >
                  {children}
                </a>
              ),
              
              // Tables
              table: ({ children }) => (
                <div className="overflow-x-auto my-4">
                  <table className="min-w-full border border-gray-300 dark:border-gray-600">
                    {children}
                  </table>
                </div>
              ),
              th: ({ children }) => (
                <th className="border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-3 py-2 text-left font-semibold text-gray-900 dark:text-gray-100">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-300">
                  {children}
                </td>
              ),
            }}
          >
            {message.content}
          </ReactMarkdown>
        </div>

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

        {/* Avatar - show after content for user */}
        {isUser && (
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
            <User className="w-4 h-4" />
          </div>
        )}
      </div>
    </div>
  );
};
