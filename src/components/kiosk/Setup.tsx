
import { FeatureType } from '../service/types';

export const features: FeatureType[] = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-green-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M2 3h20v5H2zM4 8v10h16V8zM10 12h4M4 3v5M20 3v5M2 8h20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 11a1 1 0 100-2 1 1 0 000 2zM7 15a1 1 0 100-2 1 1 0 000 2z"
          fill="currentColor"
        />
      </svg>
    ),
    title: 'Handle Your Peak Hours',
    description:
      'Restaurant, Caffee, Grocery Shop, Fashion boutiques, Shoe Shop your line of business can be anything Just tell us we will make it easy!',
    imageUrl: '/assets/img/kiosk0.jpg',
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-green-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M8 6v12M12 10v8M16 4v16" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8" cy="4" r="2" fill="currentColor" />
        <circle cx="12" cy="8" r="2" fill="currentColor" />
        <circle cx="16" cy="2" r="2" fill="currentColor" />
      </svg>
    ),
    title: 'Affordable and Cost-Effective',
    description:
      "You don't have to hire cashier to collect money and taking order just monitor the digital operation automatic end to end Order Processing!",
    imageUrl: '/assets/img/kiosk2.jpg',
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-green-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M6 8h12M6 12h8M6 16h4" strokeLinecap="round" />
        <circle cx="19" cy="16" r="3" />
        <path d="M17 16h4M19 14v4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Easy Menu Setup',
    description:
      'You just have to do signup fill your business line rest everything we will help to finish from our end! Yes you heard it right!!!',
    imageUrl: '/assets/img/kiosk3.jpg',
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-green-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="4" y="8" width="16" height="12" rx="2" />
        <path d="M12 12h4M12 16h2" strokeLinecap="round" />
        <circle cx="8" cy="12" r="1" fill="currentColor" />
        <path d="M4 8V6a2 2 0 012-2h12a2 2 0 012 2v2" />
        <path d="M10 8V6M14 8V6" strokeLinecap="round" />
      </svg>
    ),
    title: 'Digital Payment & stunning look',
    description:
      'Just have entire business progress and summary in one signle dashboard to see how your business is happening everyday!!!',
    imageUrl: '/assets/img/kiosk4.jpg',
  },
];