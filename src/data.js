import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Sites',
      links: [
        {
          text: 'OrderTrack',
          href: 'https://orders.icepcp.com',
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
};
  
export const footerData = {
  links: [
    {},
    {},
    {},
    {
      title: 'Sites',
      links: [
        { text: 'OrderTrack', href: 'https://orders.icepcp.com/' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Blog', href: getPermalink('/blog') },
  ],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/icepcp' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
