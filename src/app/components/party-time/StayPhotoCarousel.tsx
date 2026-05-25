import { useCallback, useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/app/components/ui/carousel';
import { cn } from '@/app/components/ui/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const RENTAL_PHOTOS = [
  {
    src: '/NorthBeach_4951SaltCreek_1.png',
    alt: 'Beach villa exterior with palm trees and double porch',
    caption: 'Beach villa exterior',
  },
  {
    src: '/NorthBeach_4951SaltCreek_2.png',
    alt: 'Spacious living room with curved sectional and beach views',
    caption: 'Living room & beach views',
  },
  {
    src: '/NorthBeach_4951SaltCreek_3.png',
    alt: 'Fully equipped kitchen with granite countertops',
    caption: 'Full kitchen',
  },
  {
    src: '/NorthBeach_4951SaltCreek_4.png',
    alt: 'Cozy bedroom with mermaid wall art and natural wood furniture',
    caption: 'Bedroom',
  },
] as const;

export function StayPhotoCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api],
  );

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());

    onSelect();
    api.on('select', onSelect);
    api.on('reInit', onSelect);

    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api]);

  return (
    <div className="space-y-3">
      <Carousel
        setApi={setApi}
        opts={{ align: 'start', loop: true }}
        className="w-full"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-lg bg-slate-100">
          <CarouselContent className="-ml-0">
            {RENTAL_PHOTOS.map((photo, index) => (
              <CarouselItem key={photo.src} className="pl-0 basis-full">
                <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    draggable={false}
                  />
                  <p className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-4 pt-10 pb-3 text-sm text-white">
                    {photo.caption}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-white/90 text-slate-800 shadow-md active:scale-95 transition-transform touch-manipulation"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={() => api?.scrollNext()}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-white/90 text-slate-800 shadow-md active:scale-95 transition-transform touch-manipulation"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <span className="absolute top-3 right-3 z-10 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white tabular-nums">
            {current + 1} / {RENTAL_PHOTOS.length}
          </span>
        </div>
      </Carousel>

      <div
        className="flex justify-center gap-2"
        role="tablist"
        aria-label="Rental photo slides"
      >
        {RENTAL_PHOTOS.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            role="tab"
            aria-selected={current === index}
            aria-label={`View photo ${index + 1}: ${photo.caption}`}
            onClick={() => scrollTo(index)}
            className={cn(
              'h-2.5 rounded-full transition-all touch-manipulation',
              current === index
                ? 'w-8 bg-gradient-to-r from-orange-500 to-teal-500'
                : 'w-2.5 bg-slate-300 hover:bg-slate-400',
            )}
          />
        ))}
      </div>

      <p className="text-center text-sm text-slate-500">
        Swipe or tap arrows to browse the villa
      </p>
    </div>
  );
}
