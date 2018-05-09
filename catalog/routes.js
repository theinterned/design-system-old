import { pageLoader } from 'catalog';

export default [
  {
    path: '/',
    title: 'Welcome',
    content: pageLoader(() => import('../README.md'))
  },
  {
    title: 'Getting Started',
    pages: [
      {
        path: '/getting_started/designer',
        title: 'Designer',
        content: pageLoader(() => import('./getting_started/designer.md'))
      },
      {
        path: '/getting_started/developer',
        title: 'Developer',
        content: pageLoader(() => import('./getting_started/developer.md'))
      }
    ]
  },
  {
    title: 'Foundation',
    pages: [
      {
        path: '/foundation/principles',
        title: 'Design Principles',
        content: pageLoader(() => import('./foundation/principles.md'))
      },
      {
        path: '/foundation/personas',
        title: 'Our Users',
        content: pageLoader(() => import('./foundation/personas.md'))
      }
    ]
  },
  {
    title: 'Guidelines',
    pages: [
      {
        path: '/guidlines/language',
        title: 'Language',
        content: pageLoader(() => import('./guidlines/language.md'))
      },
      {
        path: '/guidlines/colour',
        title: 'Colour',
        content: pageLoader(() => import('./guidlines/colour.md'))
      },
      {
        path: '/guidlines/typography',
        title: 'Typography',
        content: pageLoader(() => import('./guidlines/typography.md'))
      },
      {
        path: '/guidlines/iconography',
        title: 'Iconography',
        content: pageLoader(() => import('./guidlines/iconography.md'))
      },
      {
        path: '/guidlines/grid',
        title: 'Grid',
        content: pageLoader(() => import('./guidlines/grid.md'))
      },
      {
        path: '/guidlines/depth',
        title: 'Depth',
        content: pageLoader(() => import('./guidlines/depth.md'))
      },
      {
        path: '/guidlines/motion',
        title: 'Motion',
        content: pageLoader(() => import('./guidlines/motion.md'))
      },
      {
        path: '/guidlines/accessibility',
        title: 'Accessibility',
        content: pageLoader(() => import('./guidlines/accessibility.md'))
      }
    ]
  },
  {
    title: 'Components',
    pages: [
      {
        path: '/components/tokens',
        title: 'Design Tokens',
        content: pageLoader(() => import('./components/tokens.md'))
      },
      {
        path: '/components/button',
        title: 'Button',
        content: pageLoader(() => import('./components/button.md'))
      }
    ]
  }
];
