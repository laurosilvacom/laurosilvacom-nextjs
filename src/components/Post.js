/* eslint-disable react/display-name */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import Head from 'next/head'
import PageTitle from '@/components/PageTitle'
import tinytime from 'tinytime'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {MDXProvider} from '@mdx-js/react'

const mdxComponents = {
  pre: ({className, ...props}) => (
    <pre
      className={`${className} rounded-md bg-gray-800 py-3 px-4 overflow-x-auto`}
      {...props}
    />
  ),
  'pre.code': ({className, ...props}) => (
    <code className={`${className} text-gray-200`} {...props} />
  ),
}

const postDateTemplate = tinytime('{dddd}, {MMMM} {DD}, {YYYY}')

export default function Post({meta, children}) {
  const router = useRouter()
  const twitterShare = `https://twitter.com/intent/tweet?url=${`https://laurosilva.com${router.pathname}&text=${meta.discussion}`}`

  return (
    <article>
      <Head>
        <title>{meta.title} – Lauro Silva</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@laurosilvacom" />
        <meta name="twitter:creator" content="@laurosilvacom" />
        <meta name="twitter:title" content={`${meta.title} – Lauro Silva`} />
        <meta name="twitter:description" content={meta.description} />
        <meta
          name="twitter:image"
          content={`https://laurosilva.com${meta.image}`}
        />
        <meta
          property="og:url"
          content={`https://laurosilva.com${router.pathname}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${meta.title} – Lauro Silva`} />
        <meta property="og:description" content={meta.description} />
        <meta
          property="og:image"
          content={`https://laurosilva.com${meta.image}`}
        />
      </Head>
      <header className="pt-6 xl:pb-20">
        <div className="space-y-1 text-center">
          <dl className="space-y-10">
            <div>
              <dt className="sr-only">Published on</dt>
              <dd className="text-base leading-6 font-medium text-gray-500">
                <time dateTime={meta.date}>
                  {postDateTemplate.render(new Date(meta.date))}
                </time>
              </dd>
            </div>
          </dl>
          <div>
            <PageTitle>{meta.title}</PageTitle>
          </div>
        </div>
      </header>
      <div
        className="divide-y xl:divide-y-0 divide-gray-200 xl:grid xl:grid-cols-4 xl:col-gap-6 pb-16 xl:pb-20"
        style={{gridTemplateRows: 'auto 1fr'}}
      >
        <dl className="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200">
          <dt className="sr-only">Authors</dt>
          <dd>
            <ul className="flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8">
              {meta.authors.map(author => (
                <li
                  key={author.twitter}
                  className="flex items-center space-x-2"
                >
                  <img
                    src={author.avatar}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <dl className="text-sm font-medium leading-5 whitespace-no-wrap">
                    <dt className="sr-only">Name</dt>
                    <dd className="text-gray-900">{author.name}</dd>
                    <dt className="sr-only">Twitter</dt>
                    <dd>
                      <a
                        href={`https://twitter.com/${author.twitter}`}
                        className="text-indigo-500 hover:text-indigo-600"
                      >
                        {author.twitter}
                      </a>
                    </dd>
                  </dl>
                </li>
              ))}
            </ul>
          </dd>
        </dl>
        <div className="divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2 bg-white shadow p-6 sm:rounded-lg">
          <div className="prose mx-auto pt-10 pb-8">
            <MDXProvider components={mdxComponents}>{children}</MDXProvider>
            <hr></hr>
            {meta.discussion && (
              <div>
                <p>
                  Want to talk about this post?{' '}
                  <a
                    href={twitterShare}
                    className="font-medium text-indigo-500 hover:text-indigo-600"
                  >
                    Discuss this on Twitter &rarr;
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
        <footer className="text-sm font-medium leading-5 divide-y divide-gray-200 xl:col-start-1 xl:row-start-2">
          <div className="pt-8">
            <Link href="/">
              <a className="text-indigo-500 hover:text-indigo-600">
                &larr; Back to the blog
              </a>
            </Link>
          </div>
        </footer>
      </div>
    </article>
  )
}
