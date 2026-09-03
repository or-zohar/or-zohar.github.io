// ===== SITE CONFIGURATION =====
// Update these values with your own details.

export const siteConfig = {
  name: 'Or Zohar Weizman',
  tagline: 'Photography and Graphic Design',
  title: 'Or Zohar Weizman — Photography and Graphic Design',
  description: 'Photography and graphic design portfolio.',
  url: 'https://or-zohar.github.io',

  // Navigation, grouped to match the header layout (work links, then page links)
  nav: {
    work: [
      { label: 'PHOTOGRAPHY', href: '/photo-projects' },
      { label: 'DESIGN', href: '/design-projects' },
    ],
    pages: [
      { label: 'ABOUT', href: '/about' },
      { label: 'CONTACT', href: '/contact' },
    ],
  },

  // Social links (add or remove as needed)
  social: [
    { label: 'Email', href: 'mailto:oriweizman71@gmail.com' },
    { label: 'Instagram', href: 'https://www.instagram.com/or_zohar/' },
  ],
};
