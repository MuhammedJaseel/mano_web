'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface SetupStep {
  title: string;
  description: string;
  command?: string;
  completed: boolean;
}

interface TestnetSetupProps {
  steps: SetupStep[];
}

export default function TestnetSetup({ steps: initialSteps }: TestnetSetupProps) {
  const [steps, setSteps] = useState(initialSteps);
  const [isHydrated, setIsHydrated] = useState(false);

  useState(() => {
    setIsHydrated(true);
  });

  const toggleStep = (index: number) => {
    if (!isHydrated) return;
    const newSteps = [...steps];
    newSteps[index].completed = !newSteps[index].completed;
    setSteps(newSteps);
  };

  const copyCommand = (command: string) => {
    if (!isHydrated) return;
    navigator.clipboard.writeText(command);
  };

  return (
    <div className="bg-[#ffffff] rounded-xl border border-[#e2e8f0] overflow-hidden">
      <div className="bg-[#1e293b] px-6 py-4 border-b border-[#e2e8f0]">
        <h3 className="text-lg font-headline font-bold text-[#0fffff] flex items-center space-x-2">
          <Icon name="RocketLaunchIcon" size={24} variant="outline" className="text-[#0066ff]" />
          <span>Testnet Setup Guide</span>
        </h3>
      </div>
      <div className="p-6 space-y-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border transition-all duration-300 ${
              step.completed
                ? 'bg-[#059669]/5 border-[#059669]' :'bg-[#e2e8f0] border-[#e2e8f0]'
            }`}
          >
            <div className="flex items-start space-x-3">
              <button
                onClick={() => toggleStep(index)}
                disabled={!isHydrated}
                className="mt-1 flex-shrink-0 disabled:opacity-50"
              >
                <Icon
                  name={step.completed ? 'CheckCircleIcon' : 'CircleStackIcon'}
                  size={24}
                  variant={step.completed ? 'solid' : 'outline'}
                  className={step.completed ? 'text-[#059669]' : 'text-[#475569]'}
                />
              </button>
              <div className="flex-1">
                <h4 className="text-base font-headline font-bold text-[#0f172a] mb-1">
                  Step {index + 1}: {step.title}
                </h4>
                <p className="text-sm text-[#475569] mb-3">
                  {step.description}
                </p>
                {step.command && (
                  <div className="bg-[#0a0e1a] rounded-lg p-3 flex items-center justify-between">
                    <code className="text-sm font-code text-gray-300 flex-1">
                      {step.command}
                    </code>
                    <button
                      onClick={() => copyCommand(step.command!)}
                      disabled={!isHydrated}
                      className="ml-3 p-2 bg-[#0066ff]/10 hover:bg-[#0066ff]/20 rounded transition-colors duration-300 disabled:opacity-50"
                    >
                      <Icon
                        name="ClipboardDocumentIcon"
                        size={16}
                        variant="outline"
                        className="text-[#0066ff]"
                      />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}