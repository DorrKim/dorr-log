import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'

import { getAllPostMetaData } from 'src/utils/lib'

const Home: NextPage = ({ featuredPostMetaDatas }) => {
  return (
    <div>
      <ul className="grid grid-cols-3 gap-4 ">
        {featuredPostMetaDatas.map(({ slug, title, description }) => (
          <li key={title}>
            <div className="h-40   overflow-hidden rounded-2xl bg-white drop-shadow">
              <Link href={`/posts/${slug}`}>
                <header>{title}</header>
              </Link>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const metaDatas = await getAllPostMetaData()

  const featuredPostMetaDatas = metaDatas.filter(({ featured }) => featured)

  return {
    props: {
      featuredPostMetaDatas,
    },
  }
}
