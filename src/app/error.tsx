"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <button onClick={reset} className="underline mt-4">
        Try again
      </button>
    </div>
  );
}
