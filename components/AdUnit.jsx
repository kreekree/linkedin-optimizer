'use client';

export function AdUnit({ slot, format = 'auto' }) {
  return (
    <div className="w-full flex flex-col items-center justify-center my-6 bg-gray-50 border border-dashed border-gray-200 rounded-xl py-4 min-h-[90px]">
      {/* AdSense unit — replace ca-pub-XXXXXXXXXXXXXXXX and slot with real values */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
      <span className="text-xs text-gray-400 mt-1">Advertisement</span>
    </div>
  );
}
