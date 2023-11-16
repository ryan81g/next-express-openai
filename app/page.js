'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link'

function Home() {

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch data from the Express API client-side
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      }
      );
  }, []);

  //Will need to do something until your data appears

  if (isLoading) return <p>loading...</p>
  if (!data) return <p>No Data now</p>
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className='text-3xl'>Client Side Rendering with Next.js</h1>
        <hr />
        <br />
        <p>Server Data from OpenAI using model: {data.model}</p>
        <p>Response from Bot: {data.choices[0].message.content}</p>
      </div>
      <div>
      <Link href="/server-side">Server Side</Link>
      </div>
    </main>
  )
}

export default Home;
