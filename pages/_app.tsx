import '../styles/globals.css'
import '../styles/index.css'
import '../styles/lib.css'
import '../styles/App.css';
import type { AppProps } from 'next/app'
import { NavigationItem, NavigationMenu } from '../lib/NavigationMenu';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../components/theme';

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
    <ChakraProvider theme={theme}>
      <NavigationMenu
        items={items}
        icon={config.icon.PNG}
        title={config.title}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp
