'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CodeExampleProps {
  title: string;
  language: string;
  code: string;
}

export default function CodeExample({
  title,
  language,
  code,
}: CodeExampleProps) {
  const [copied, setCopied] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useState(() => {
    setIsHydrated(true);
  });

  const handleCopy = () => {
    if (!isHydrated) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-deep-navy rounded-xl overflow-hidden border border-border">
      <div className="flex items-center justify-between px-6 py-3 bg-secondary border-b border-border">
        <div className="flex items-center space-x-3">
          <Icon name="CodeBracketIcon" size={20} variant="outline" className="text-primary" />
          <span className="text-sm font-code font-medium text-foreground">
            {title}
          </span>
          <span className="text-xs text-muted-foreground px-2 py-1 bg-muted rounded">
            {language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          disabled={!isHydrated}
          className="flex items-center space-x-2 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors duration-300 disabled:opacity-50"
        >
          <Icon
            name={copied ? 'CheckIcon' : 'ClipboardDocumentIcon'}
            size={16}
            variant="outline"
            className="text-primary"
          />
          <span className="text-xs font-medium text-primary">
            {copied ? 'Copied!' : 'Copy'}
          </span>
        </button>
      </div>
      <div className="p-6 overflow-x-auto">
        <pre className="text-sm font-code text-gray-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}