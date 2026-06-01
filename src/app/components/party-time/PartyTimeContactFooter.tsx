import { Heart, MessageCircle, Smartphone } from 'lucide-react';
import { HOST_PHONE, HOST_PHONE_LINK } from './constants';

type PartyTimeContactFooterProps = {
  minimal?: boolean;
};

export function PartyTimeContactFooter({ minimal = false }: PartyTimeContactFooterProps) {
  return (
    <footer className="py-12 px-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        {!minimal ? (
          <>
            <MessageCircle className="w-10 h-10 mx-auto mb-4 text-amber-300" />
            <h2 className="text-2xl mb-2">Questions? Need a Ride? Lost?</h2>
            <p className="text-slate-300 mb-6">
              Text or call Jordie — I&apos;ve got you covered.
            </p>
            <a
              href={HOST_PHONE_LINK}
              className="inline-flex items-center gap-2 text-xl font-medium text-white bg-white/10 hover:bg-white/20 px-8 py-3 rounded-full transition-colors mb-4"
            >
              <Smartphone className="w-5 h-5" />
              {HOST_PHONE}
            </a>
            <p className="text-slate-400 text-sm italic">
              Responses may be delayed if I&apos;m already at the beach 🌊
            </p>
            <div className="flex items-center justify-center gap-2 mt-8 pt-8 border-t border-slate-600">
              <Heart className="w-5 h-5 text-pink-400" />
              <p className="text-slate-300">Myrtle Beach Girls Getaway 2026</p>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 text-pink-400" />
            <p className="text-slate-300">Myrtle Beach Girls Getaway 2026</p>
          </div>
        )}
      </div>
    </footer>
  );
}
