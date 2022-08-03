import '../styles/globals.css'
import '../styles/index.css'
import '../styles/lib.css'
import type { AppProps } from 'next/app'
import { NavigationItem, NavigationMenu } from '../lib/NavigationMenu';

export const config = {
  icon: {
    PNG: "/img.png"
  },
  title: "Forms",
  description: "Create custom in-app modals and send submissions to a channel using webhooks."
}

function MyApp({ Component, pageProps }: AppProps) {
  const items: NavigationItem[] = [

  ];

  return (
    <>
      <NavigationMenu
        items={items}
        icon={config.icon.PNG}
        title={config.title}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
