import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="theme-color"
          content="rgb(245 245 245)"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="rgb(23 23 23)"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Days</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cloud.typography.com/6901556/6994032/css/fonts.css"
        />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="font-mono bg-neutral-100 dark:bg-neutral-900 text-center">
        <Component />
      </body>
    </html>
  );
}
