/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-unresolved */
import tinytime from 'tinytime'
import Link from 'next/link'
import Head from 'next/head'
import getAllPostPreviews from '@/getAllPostPreviews'
import twitterCard from '@/img/twitter-card.jpg'

const posts = getAllPostPreviews()

const postDateTemplate = tinytime('{MMMM} {DD}, {YYYY}')

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
      <ul className="divide-y divide-gray-100 bg-white shadow p-4 sm:rounded-lg">
        {posts.map(({link, module: {default: Component, meta}}) => (
          <li key={link} className="py-12">
            <article className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              <div className="mb-2 md:mb-0  md:w-4/5">
                <a
                  className="episode-thumbnail flex justify-center items-center"
                  href="/episodes/simplecov-code-coverage-and-railsbytes?autoplay=1"
                >
                  <img
                    className="rounded-md img-responsive"
                    src={meta.image}
                  ></img>
                </a>
              </div>

              <div className="space-y-5 xl:col-span-1">
                <div className="space-y-6">
                  <h2 className="text-2xl leading-8 font-bold tracking-tight">
                    <Link href={link}>
                      <a className="text-gray-900">{meta.title}</a>
                    </Link>
                  </h2>
                  <div className="prose max-w-none text-gray-500">
                    <Component />
                  </div>
                </div>
                <div className="text-base leading-6 font-medium">
                  <Link href={link}>
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
      <div className="max-w-screen-xl mx-auto lg:py-16 m-10">
        <div className="px-6 py-6 bg-indigo-700 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
          <div className="xl:w-0 xl:flex-1">
            <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9">
              Join the Newsletter
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
              I'm pretty into React, JavaScript, and tooling. My weekly emails
              reflect this preference. Get an update when something new comes
              out by signing up!
            </p>
          </div>
          <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8 text-white">
            <div data-element="fields">
              <ul
                className="text-red-500"
                data-element="errors"
                data-group="alert"
              ></ul>
              <div className="text-white sm:flex">
                <input
                  aria-label="Email address"
                  type="email"
                  name="email_address"
                  required=""
                  className="appearance-none w-full px-5 py-3 border border-transparent text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400 transition duration-150 ease-in-out">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm leading-5 text-indigo-200">
              You can always unsubscribe!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
