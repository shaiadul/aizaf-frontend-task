"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [error, setError] = useState(false);

  return (
    <div className="relative h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
      {!error ? (
        <Image
          src={src}
          alt={alt}
          fill
          onError={() => setError(true)}
          className="object-cover transition-transform duration-500
                     group-hover:scale-110"
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-gray-400 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 mb-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5h18M3 19h18M5 5v14M19 5v14M8 9h8M8 13h5"
            />
          </svg>
          <span>No Image Available</span>
        </div>
      )}
    </div>
  );
}
