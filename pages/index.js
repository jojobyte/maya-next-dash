import { useState, useEffect } from 'react';
import Link from 'next/link'

import ClientComponent from '@/components/client'

export default function Home() {
  const [location, setLocation] = useState(null)

  useEffect(() => {
    (async () => {
      setLocation(window.location)
    })()
  }, [])

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <ClientComponent />
      <Link href='/api/dash'>{location?.origin}/api/dash</Link>
    </main>
  )
}
