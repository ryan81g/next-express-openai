This is a [Next.js](https://nextjs.org/) project that uses express as a custom server. The server file is located at the root as `server.js`. 

## Getting Started

First, install dependencies:

```bash
npm install 
```

Add your OpenAI API key to the `.env` file at root. 

Next run 

```bash
npm run dev-server 
```
This will start the express server and the next app. 

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

There are two versions usage of the api from the custom server, a server-side rendered component that lives at [http://localhost:3000/server-side](http://localhost:3000/server-side) and the homepage that uses a client-side component. 

You can learn more about data fetching here: [Next Data Fetching Documentation](https://nextjs.org/docs/app/building-your-application/data-fetching)

Within the `server` directory, you can update the service code that interacts with openai.



You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Express Guide](https://expressjs.com/en/guide/routing.html) - learn how to use express js.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


