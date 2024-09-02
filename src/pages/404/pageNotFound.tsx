// https://codepen.io/ZonFire99/full/EaYmGV

import useCountdown from '@/hooks/useCountdown.ts'
import {FunctionComponent} from 'react'

const PageNotFound: FunctionComponent = () => {
  const countdown = useCountdown(5)

  return (
    <div className="w-screen h-screen bg-black absolute left-0 top-0 -z-10">
      <video
        className="h-screen w-screen absolute left-0 top-0"
        // src={}
        autoPlay={true}
        loop={true}
      />
      <div className="text-blue-100 absolute left-2 top-16">Redirecting to home in {countdown} seconds</div>
    </div>
  )
}

export default PageNotFound
