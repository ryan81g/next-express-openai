import { getChatResponse } from '@/server/openai';
import Link from 'next/link'

export default async function HomePage() {
  //Call to the server module
  let serverData = await getChatResponse();
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <h1 className='text-3xl'>Server-Side Rendering with Next.js</h1>
          <hr />
          <br />
          <p>Server Data from OpenAI using model: {serverData.model}</p>
          <p>Response from Bot: {serverData.choices[0].message.content}</p>
        </div>
        <div>
          <Link href="/">Client Side</Link>
        </div>
      </main>
    );
  }
  