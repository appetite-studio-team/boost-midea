import PricingCard from './PricingCard';

export default function ContentPricingSection() {
  const plans = [
    {
      title: 'BEGINNER',
      price: 'AED 2999',
      features: ['15 Videos', '6 Poster'],
      description:
        'Posting content on Instagram, TikTok, Youtube & Facebook. Engage with the audience through comments, messages & mentions',
    },
    {
      title: 'POLISHED',
      price: 'AED 4999',
      features: ['25 Videos', '12 Posters'],
      description:
        'Posting content on Instagram, TikTok, Youtube & Facebook. Engage with the audience through comments, messages & mentions',
    },
    {
      title: 'PREMIUM-BESPOKE',
      price: 'FLEXIBLE',
      features: [
        'Ad Poster Design',
        'Ad Video Production',
        'Strategy Development',
        'Audience Filtration',
        'Google Ads Management',
        'Facebook Ads Management',
        'Reporting',
      ],
      description: 'Service cost is 45% of the total budget allocated for lead generation.',
    },
  ];

  return (
    <section className="bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h3 className="text-center text-white">Our Packages</h3>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              description={plan.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
