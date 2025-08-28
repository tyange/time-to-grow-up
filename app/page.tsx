import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const FirstSection = dynamic(() => import('./components/first-section'), {
  loading: () => (
    <div className="relative h-96 flex justify-center items-center">
      Loading...
    </div>
  ),
})

export default function Home() {
  return (
    <div>
      <p>this is init</p>
      <p>이제 새로운 time-to-grow-up</p>
      <Suspense fallback={<div>Loading...</div>}>
        <FirstSection />
      </Suspense>
    </div>
  )
}
