import Image from 'next/image'

const Logo = () => {
  return (
    <>
      <Image
        src="/assets/logo-light.png"
        alt=""
        width="125"
        height="125"
        className="hidden dark:hidden xs:block w-12 h-12 ml-2 lg:w-32 lg:h-32 lg:ml-0"
      />
      <Image
        src="/assets/logo-dark.png"
        alt=""
        width="125"
        height="125"
        className="hidden dark:block dark:xs:block w-12 h-12 ml-2 lg:w-32 lg:h-32 lg:ml-0"
      />
    </>
  )
}

export default Logo
