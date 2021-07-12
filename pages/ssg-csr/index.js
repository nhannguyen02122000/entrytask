import Head from 'next/head'
import useSWR from 'swr'
import AutoSizer from "react-virtualized-auto-sizer";
import SpeakerCard from '../../components/SpeakerCard';
import Link from 'next/link'
import {FixedSizeGrid as Grid} from 'react-window'


const SSGCSR = () => {
  const {data, error} = useSWR('https://randomuser.me/api/?results=1000');

  if (!data) {
    return (<>
        <Head>
          <title>SSGCSR_SV_RW</title>
        </Head>
        <h1>SSG nè, do data fetch từ client</h1>;
      </>
    )
  }

  return (
    <>
    <Head>
      <title>SSGCSR</title>
    </Head>
    <Link href="/">
      <a>Home</a>
    </Link>
    <div className="w-screen h-screen">
      <AutoSizer>
        {({ height, width }) => (
          <Grid
            className="m-auto"
            columnCount={3}
            rowCount={1000}
            columnWidth={300}
            rowHeight={300}
            height={height}
            width={width}
          >
            {({columnIndex, rowIndex, style}) => {
              return (
                <SpeakerCard
                  ele = {data.results[columnIndex*3+rowIndex]}
                  style = {style}
                />
              )
            }}
          </Grid>
        )}
      </AutoSizer>
      </div>
    </>
  )
}

export default SSGCSR;