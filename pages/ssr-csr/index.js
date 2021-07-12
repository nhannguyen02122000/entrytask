import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import AutoSizer from "react-virtualized-auto-sizer";
import SpeakerCard from '../../components/SpeakerCard';
import Link from 'next/link'
import {FixedSizeGrid as Grid} from 'react-window'

export async function getServerSideProps () {
  const respond = await fetch('https://randomuser.me/api/?results=1000');
  const data = await respond.json();

  return {
    props: {data: data.results}
  }
}

const SSRCSR = (props) => {
  const [isComponentMounted, setIsComponentMounted] = useState(false);
  useEffect(() => setIsComponentMounted(true), []);

  if(!isComponentMounted) {
    return <div>
      <Head>
        <title>SSRCSR_SV_RW</title>
      </Head>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>{JSON.stringify(props.data[0])}t</h1>
    </div>
  }

  if (!props.data) {
    return <h1>No data</h1>
  }

  return (
    <>
    <Head>
      <title>SSRCSR</title>
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
                  ele = {props.data[columnIndex*3+rowIndex]}
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
  
export default SSRCSR;