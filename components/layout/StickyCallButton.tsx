import { site } from '@/data/site';
import { PhoneLink } from '../PhoneLink';

// Phones only (hidden from md / 768px up).
export function StickyCallButton() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-700 bg-slate p-2 md:hidden">
      <PhoneLink
        location="sticky-mobile"
        className="block rounded-md bg-amber px-4 py-3 text-center font-semibold text-slate-900"
      >
        Call {site.phone.display}
      </PhoneLink>
    </div>
  );
}
