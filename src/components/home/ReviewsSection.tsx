import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import { REVIEWS } from '@/lib/constants';

const StarIcon = () => (
  <svg className="w-4 h-4 text-copper-400 fill-copper-400" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const QuoteIcon = () => (
  <svg className="w-8 h-8 text-copper-700" fill="currentColor" viewBox="0 0 32 32">
    <path d="M10 8C6.134 8 3 11.134 3 15v9h9v-9H6c0-2.206 1.794-4 4-4V8zm14 0c-3.866 0-7 3.134-7 7v9h9v-9h-6c0-2.206 1.794-4 4-4V8z" />
  </svg>
);

export default function ReviewsSection() {
  return (
    <SectionWrapper className="bg-dark-300/50">
      <SectionHeader
        label="Customer Reviews"
        title="What Our Clients"
        highlight="Say About Us"
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REVIEWS.map((review) => (
          <div
            key={review.name}
            className="card-dark rounded-2xl p-6 hover:border-copper-700 hover:shadow-copper transition-all duration-300 flex flex-col"
          >
            <div className="mb-4">
              <QuoteIcon />
            </div>
            <p className="text-white/60 text-sm leading-relaxed flex-1 mb-6">
              &ldquo;{review.review}&rdquo;
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-copper-900/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-copper-gradient flex items-center justify-center font-bold text-white text-sm shadow-copper">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{review.name}</p>
                  <p className="text-white/30 text-xs">Verified Customer</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
