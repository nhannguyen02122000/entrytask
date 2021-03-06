import Head from 'next/head'
import {FixedSizeGrid as Grid} from 'react-window'
import AutoSizer from "react-virtualized-auto-sizer";
import SpeakerCard from '../../components/SpeakerCard';
import Link from 'next/link'

export async function getStaticProps () {
  const respond = await fetch('https://randomuser.me/api/?results=1000');
  const data = await respond.json();

  return {
    props: {data: data.results}
  }
}

const SSG = (props) => {
  const data = props.data;
  return (
    <>
      <Head>
        <title>SSG</title>
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
                    ele = {data[columnIndex*3+rowIndex]}
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

export default SSG;
