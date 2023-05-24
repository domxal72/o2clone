This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



<!-- 
soubory s fontama asi vymazat kdyz je importuju pres next
ty scripty v assetech zkusit naimportovat odtamtud nebo pres NPM nebo ze CDN?
zkusit udelat nejakej placeholder (skeleton) pro nahravani
na ten slide hover nepotrebuju dva titly dole, proste udelam ten puvodni na hover asi 
na ty ruzny swipery bude idealni pouzit podle BEMu ty modifikatory na velikost slidu
pouzivat SCSS moduly misto BEM a wrapperu?
header udealat state modifikatory podle url stranky
footer
ruzny modaly
zakomponovat potom state management
na scroll musi reagovat jak header tak timeline takze ten scrollState dat do Contextu abych to mel pristupny vsude 
z-indexy dat do variables, at v nich mam prehled
pridat na channelList padding na scroll?
udelat context pro modal
 -->
