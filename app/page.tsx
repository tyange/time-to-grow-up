import Portfolio from '@/app/components/portfolio'

export default async function Home() {
  const response = await fetch('https://tyange.com/api/cms/portfolio', {
    cache: 'no-store',
  })
  const data = await response.json()
  return (
    <div className="w-full h-full flex justify-center items-center">
      <article className="prose lg:prose-md p-5">
        <Portfolio content={data.content} />
      </article>
    </div>
  )
}
