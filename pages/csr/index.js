import Head from 'next/head'
import useSWR from 'swr'
import React, { useEffect, useState } from 'react'
import {FixedSizeGrid as Grid} from 'react-window'
import AutoSizer from "react-virtualized-auto-sizer";
import SpeakerCard from '../../components/SpeakerCard'
import Link from 'next/link'

const CSR = () => {
  const [isComponentMounted, setIsComponentMounted] = useState(false);
  const {data, error} = useSWR('https://randomuser.me/api/?results=1000');

  useEffect(() => setIsComponentMounted(true), []);

  if (!isComponentMounted) {
    return (
      <>
        <h1>SSR pre-render phần này ở server</h1>
      </>
    )
  }

  if (!data) {
    return(<h1>Fetching data</h1>)
  }

  return (
    <>
    <Head>
      <title>CSR</title>
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
  
export default CSR;