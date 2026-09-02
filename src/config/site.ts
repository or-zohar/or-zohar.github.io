// ===== SITE CONFIGURATION =====
// Update these values with your own details.

export const siteConfig = {
  name: 'Or Zohar Weizman',
  tagline: 'Photography and Graphic Design',
  title: 'Or Zohar Weizman — Photography and Graphic Design',
  description: 'Photography and graphic design portfolio.',
  url: 'https://or-zohar.github.io/or-zohar-weizman-portfolio',

  // Navigation, grouped to match the header layout (work links, then page links)
  nav: {
    work: [
      { label: 'Photo Projects', href: '/photo-projects' },
      { label: 'Design Projects', href: '/design-projects' },
    ],
    pages: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },

  // Social links (add or remove as needed)
  social: [
    { label: 'Email', href: 'mailto:oriweizman71@gmail.com' },
    { label: 'Instagram', href: 'https://www.instagram.com/or_zohar/' },
  ],
};
