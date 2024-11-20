import PricingCard from './PricingCard';

export default function PersonalBrandingPricingSection() {
  const plans = [
    {
      title: 'BASIC',
      price: 'AED 4999',
      features: ['Logo Creation', 'Colour Palette', 'Static Website Design'],
    },
    {
      title: 'PREMIUM',
      price: 'AED 7999',
      features: [
        'Logo Creation',
        'Logo Animation',
        'Ai Video',
        'Colour Palette',
        'Dynamic Website Design',
      ],
    },
  ];

  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h3 className="text-center text-white">Personal Branding Packages</h3>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
