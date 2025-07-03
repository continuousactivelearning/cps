import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface LLMMarkdownMessageProps {
  content: string;
}

const CopyButton: React.FC<{ code: string }> = ({ code }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      className={`ml-2 px-2 py-1 text-xs rounded transition-colors duration-200 ${copied ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      onClick={handleCopy}
      title="Copy code"
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
};

const LLMMarkdownMessage: React.FC<LLMMarkdownMessageProps> = ({ content }) => {
  return (
    <div className="prose prose-invert max-w-none bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md">
      <ReactMarkdown
        components={{
          h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-4 mb-2 text-blue-700" {...props} />,
          h2: ({node, ...props}) => <h2 className="text-2xl font-semibold mt-4 mb-2 text-blue-600" {...props} />,
          h3: ({node, ...props}) => <h3 className="text-xl font-semibold mt-3 mb-1 text-blue-500" {...props} />,
          ul: ({node, ...props}) => <ul className="list-disc ml-6 my-2" {...props} />,
          ol: ({node, ...props}) => <ol className="list-decimal ml-6 my-2" {...props} />,
          li: ({node, ...props}) => <li className="mb-1" {...props} />,
          code({node, inline, className, children, ...props}) {
            const code = String(children).replace(/\n$/, '');
            if (inline) {
              return <code className="bg-gray-100 rounded px-1 py-0.5 text-pink-600" {...props}>{children}</code>;
            }
            // Extract language from className (e.g., language-python)
            const match = /language-(\w+)/.exec(className || '');
            return (
              <div className="relative group my-4">
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match ? match[1] : 'text'}
                  PreTag="div"
                  className="rounded-lg text-sm"
                  {...props}
                >
                  {code}
                </SyntaxHighlighter>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CopyButton code={code} />
                </div>
              </div>
            );
          },
          blockquote: ({node, ...props}) => (
            <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-600 my-4" {...props} />
          ),
          strong: ({node, ...props}) => <strong className="font-bold text-blue-700" {...props} />,
          em: ({node, ...props}) => <em className="italic text-blue-500" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default LLMMarkdownMessage; 