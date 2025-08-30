// app/components/ComingSoon.tsx
"use client";
import React from "react";

interface ComingSoonProps {
  title: string;
  description: string;
  emoji?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ title, description, emoji }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center space-y-4 -translate-y-16">
        <p className="text-gray-600 text-3xl">
          {emoji ? `${emoji} ${title} graphs are on the way...` : `${title} graphs are on the way...`}
        </p>
        <p className="text-gray-400 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default ComingSoon;
