import Head from 'next/head'
import Button from "@material-tailwind/react/Button";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <section className="py-7">
        <div className="flex flex-wrap flex-col items-center gap-6">
          <h2 className="text-3xl font-sans font-light text-gray-700">Choose Mode</h2>
          <div className="flex flex-col items-center gap-5 md:flex-row w-3/12 md:w-9/12">
            <Link href="/ssg" passHref>
              <Button
                color="green"
                buttonType="filled"
                size="regular"
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="light"
                className="w-full"
              >
                SSG
              </Button>
            </Link>
            <Link href="/csr" passHref>
              <Button
                color="teal"
                buttonType="filled"
                size="regular"
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="light"
                className="w-full"
              >
                CSR
              </Button>
            </Link>
            <Link href="/ssg-csr" passHref>
              <Button
                color="cyan"
                buttonType="filled"
                size="regular"
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="light"
                className="w-full"
              >
                SSG-CSR
              </Button>
            </Link>
            <Link href="/ssr-csr" passHref>
              <Button
                color="lightBlue"
                buttonType="filled"
                size="regular"
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="light"
                className="w-full"
              >
                SSR-CSR
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
