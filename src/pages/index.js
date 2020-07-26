/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-unresolved */
import Link from 'next/link'
import Head from 'next/head'
import getAllPostPreviews from '@/getAllPostPreviews'
import twitterCard from '@/img/twitter-card.jpg'
import Signup from '@/components/Signup'

const posts = getAllPostPreviews()

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@laurosilvacom" />
        <meta name="twitter:creator" content="@laurosilvacom" />
        <meta name="twitter:title" content="Lauro Silva" />
        <meta
          name="twitter:description"
          content="News content from Lauro Silva."
        />
        <meta
          name="twitter:image"
          content={`https://laurosilva.com${twitterCard}`}
        />
        <meta property="og:url" content="https://laurosilva.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Lauro Silva" />
        <meta
          property="og:description"
          content="News content from Lauro Silva."
        />
        <meta
          property="og:image"
          content={`https://laurosilva.com${twitterCard}`}
        />
        <title>Lauro Silva</title>
      </Head>
      <ul className="divide-y divide-gray-100 bg-white shadow p-4 rounded-lg">
        {posts.map(({link, module: {default: Component, meta}}) => (
          <li key={`blog${link}`} className="py-12">
            <article className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              <div className="mb-2 md:mb-0  md:w-4/5">
                <Link
                  className="episode-thumbnail flex justify-center items-center"
                  href={`blog${link}`}
                >
                  <img
                    className="rounded-md img-responsive cursor-pointer"
                    src={meta.image}
                  ></img>
                </Link>
              </div>

              <div className="space-y-5 xl:col-span-1">
                <div className="space-y-6">
                  <h2 className="text-2xl leading-8 font-bold tracking-tight">
                    <Link href={`blog${link}`}>
                      <a className="text-gray-900">{meta.title}</a>
                    </Link>
                  </h2>
                  <div className="prose max-w-none text-gray-500">
                    <Component />
                  </div>
                </div>
                <div className="text-base leading-6 font-medium">
                  <Link href={`blog${link}`}>
                    <a
                      className="text-indigo-500 hover:text-indigo-600"
                      aria-label={`Read "${meta.title}"`}
                    >
                      Read more &rarr;
                    </a>
                  </Link>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
      <Signup />
    </div>
  )
}
