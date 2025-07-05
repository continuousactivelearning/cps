import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
  className?: string;
  variant?: 'default' | 'explanation' | 'compact';
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ 
  content, 
  className = '', 
  variant = 'default' 
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'explanation':
        return 'text-sm text-gray-700 leading-relaxed bg-white p-4 rounded-md border border-blue-100 max-h-80 overflow-y-auto shadow-inner';
      case 'compact':
        return 'text-xs text-gray-600 leading-normal bg-gray-50 p-2 rounded border border-gray-200';
      default:
        return 'text-sm text-gray-700 leading-relaxed';
    }
  };

  const getComponentVariants = () => {
    if (variant === 'explanation') {
      return {
        h1: ({ children }: any) => (
          <h1 className="text-lg font-bold text-blue-900 mb-3 pb-2 border-b border-blue-200">
            {children}
          </h1>
        ),
        h2: ({ children }: any) => (
          <h2 className="text-base font-semibold text-blue-800 mb-2 pb-1 border-b border-blue-100">
            {children}
          </h2>
        ),
        h3: ({ children }: any) => (
          <h3 className="text-sm font-semibold text-blue-700 mb-2">{children}</h3>
        ),
        h4: ({ children }: any) => (
          <h4 className="text-sm font-medium text-blue-600 mb-1">{children}</h4>
        ),
        p: ({ children }: any) => (
          <p className="mb-3 text-gray-700 leading-relaxed last:mb-0">{children}</p>
        ),
        ul: ({ children }: any) => (
          <ul className="list-disc pl-5 mb-3 space-y-1">{children}</ul>
        ),
        ol: ({ children }: any) => (
          <ol className="list-decimal pl-5 mb-3 space-y-1">{children}</ol>
        ),
        li: ({ children }: any) => (
          <li className="text-gray-700 leading-relaxed">{children}</li>
        ),
        code: ({ children, className }: any) => {
          const isInline = !className;
          return isInline ? (
            <code className="bg-blue-50 text-blue-800 px-1.5 py-0.5 rounded text-xs font-mono border border-blue-200">
              {children}
            </code>
          ) : (
            <code className={className}>{children}</code>
          );
        },
        pre: ({ children }: any) => (
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-md overflow-x-auto text-xs font-mono mb-3 border border-gray-700">
            {children}
          </pre>
        ),
        blockquote: ({ children }: any) => (
          <blockquote className="border-l-4 border-blue-300 pl-4 py-2 my-3 bg-blue-25 italic text-blue-800">
            {children}
          </blockquote>
        ),
        strong: ({ children }: any) => (
          <strong className="font-semibold text-blue-900">{children}</strong>
        ),
        em: ({ children }: any) => (
          <em className="italic text-blue-700">{children}</em>
        ),
        a: ({ href, children }: any) => (
          <a 
            href={href} 
            className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            {children}
          </a>
        ),
        table: ({ children }: any) => (
          <div className="overflow-x-auto mb-3">
            <table className="min-w-full border border-gray-300 rounded-md overflow-hidden">
              {children}
            </table>
          </div>
        ),
        th: ({ children }: any) => (
          <th className="bg-blue-50 border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 text-xs">
            {children}
          </th>
        ),
        td: ({ children }: any) => (
          <td className="border border-gray-300 px-3 py-2 text-gray-700 text-xs">
            {children}
          </td>
        ),
      };
    }

    // Default/compact components
    return {
      h1: ({ children }: any) => (
        <h1 className="text-base font-bold text-gray-900 mb-2">{children}</h1>
      ),
      h2: ({ children }: any) => (
        <h2 className="text-sm font-semibold text-gray-800 mb-2">{children}</h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-sm font-medium text-gray-700 mb-1">{children}</h3>
      ),
      p: ({ children }: any) => (
        <p className="mb-2 text-gray-700 leading-relaxed last:mb-0">{children}</p>
      ),
      ul: ({ children }: any) => (
        <ul className="list-disc pl-4 mb-2 space-y-1">{children}</ul>
      ),
      ol: ({ children }: any) => (
        <ol className="list-decimal pl-4 mb-2 space-y-1">{children}</ol>
      ),
      li: ({ children }: any) => (
        <li className="text-gray-700">{children}</li>
      ),
      code: ({ children, className }: any) => {
        const isInline = !className;
        return isInline ? (
          <code className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-xs font-mono">
            {children}
          </code>
        ) : (
          <code className={className}>{children}</code>
        );
      },
      pre: ({ children }: any) => (
        <pre className="bg-gray-800 text-gray-100 p-2 rounded text-xs font-mono mb-2 overflow-x-auto">
          {children}
        </pre>
      ),
      strong: ({ children }: any) => (
        <strong className="font-semibold text-gray-900">{children}</strong>
      ),
      em: ({ children }: any) => (
        <em className="italic text-gray-600">{children}</em>
      ),
      a: ({ href, children }: any) => (
        <a 
          href={href} 
          className="text-blue-600 hover:text-blue-800 underline"
          target="_blank" 
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
    };
  };

  return (
    <div className={`${getVariantClasses()} ${className} markdown-content`}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={getComponentVariants()}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
