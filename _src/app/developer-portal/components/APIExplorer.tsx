'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface APIEndpoint {
  method: string;
  endpoint: string;
  description: string;
  parameters: { name: string; type: string; required: boolean }[];
  response: string;
}

interface APIExplorerProps {
  endpoints: APIEndpoint[];
}

export default function APIExplorer({ endpoints }: APIExplorerProps) {
  const [selectedEndpoint, setSelectedEndpoint] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);

  useState(() => {
    setIsHydrated(true);
  });

  const currentEndpoint = endpoints[selectedEndpoint];

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET':
        return 'bg-success/10 text-success';
      case 'POST':
        return 'bg-primary/10 text-primary';
      case 'PUT':
        return 'bg-warning/10 text-warning';
      case 'DELETE':
        return 'bg-destructive/10 text-destructive';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="bg-secondary px-6 py-4 border-b border-border">
        <h3 className="text-lg font-headline font-bold text-foreground flex items-center space-x-2">
          <Icon name="CommandLineIcon" size={24} variant="outline" className="text-primary" />
          <span>API Explorer</span>
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border">
        <div className="lg:col-span-1 p-4 space-y-2 max-h-96 overflow-y-auto">
          {endpoints.map((endpoint, index) => (
            <button
              key={index}
              onClick={() => isHydrated && setSelectedEndpoint(index)}
              disabled={!isHydrated}
              className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                selectedEndpoint === index
                  ? 'bg-primary/10 border border-primary' :'bg-muted hover:bg-muted/80 border border-transparent'
              }`}
            >
              <div className="flex items-center space-x-2 mb-1">
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded ${getMethodColor(
                    endpoint.method
                  )}`}
                >
                  {endpoint.method}
                </span>
              </div>
              <p className="text-sm font-code text-foreground truncate">
                {endpoint.endpoint}
              </p>
            </button>
          ))}
        </div>
        <div className="lg:col-span-2 p-6">
          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-3">
              <span
                className={`text-sm font-bold px-3 py-1 rounded ${getMethodColor(
                  currentEndpoint.method
                )}`}
              >
                {currentEndpoint.method}
              </span>
              <code className="text-sm font-code text-foreground bg-muted px-3 py-1 rounded">
                {currentEndpoint.endpoint}
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              {currentEndpoint.description}
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-sm font-headline font-bold text-foreground mb-3">
              Parameters
            </h4>
            <div className="space-y-2">
              {currentEndpoint.parameters.map((param, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-muted rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <code className="text-sm font-code text-foreground">
                      {param.name}
                    </code>
                    <span className="text-xs text-muted-foreground px-2 py-0.5 bg-background rounded">
                      {param.type}
                    </span>
                  </div>
                  {param.required && (
                    <span className="text-xs text-destructive font-medium">
                      Required
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-headline font-bold text-foreground mb-3">
              Response Example
            </h4>
            <div className="bg-deep-navy rounded-lg p-4 overflow-x-auto">
              <pre className="text-xs font-code text-gray-300">
                <code>{currentEndpoint.response}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}