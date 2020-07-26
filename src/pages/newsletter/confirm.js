/* eslint-disable no-console */
import {useRouter} from 'next/router'

function About() {
  const router = useRouter()
  const data = router.query
  const firstName = data.first_name

  return (
    <div className="max-w-screen-xl mx-auto text-center py-32 px-4 sm:px-6 lg:py-56 lg:px-8 mb-32 bg-gray-900 shadow p-4 rounded-lg">
      <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-100 sm:text-4xl sm:leading-10">
        Hey, {firstName}! 👇
      </h2>
      <p className="mt-3 text-lg leading-10 text-gray-300">
        You will need to check your inbox and confirm your subscription.
      </p>
    </div>
  )
}

export default About
