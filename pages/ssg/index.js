import Head from 'next/head'
import {FixedSizeGrid as Grid} from 'react-window'
import AutoSizer from "react-virtualized-auto-sizer";
import SpeakerCard from '../../components/SpeakerCard';
import Image from 'next/image'

const GUTTER_SIZE = 10;

export async function getStaticProps () {
  const respond = await fetch('https://randomuser.me/api/?results=1000');
  const data = await respond.json();

  return {
    props: {data: data.results}
  }
}

const Cell = ({style, ele }) => (
  <div style={{...style}} className="bg-white border-2 border-gray-50">
    <div className="relative w-full h-60">
      <Image
        src={ele.picture.large}
        layout="fill"
      />
    </div>
    <h2>Name: {ele.name.first}</h2>
    <h3>Phone: {ele.phone}</h3>
  </div>
);

const SSG = (props) => {
  const data = props.data;

  console.log(data[0],"data")
  return (
    <>
      <Head>
        <title>SSG</title>
      </Head>
      <div className="w-screen h-screen">
        <AutoSizer>
          {({ height, width }) => (
            <Grid
              className="m-auto"
              columnCount={3}
              rowCount={1000}
              columnWidth={300+GUTTER_SIZE}
              rowHeight={300}
              height={height}
              width={width}
            >
              {({columnIndex, rowIndex, style}) => {
                return (
                  <Cell
                    ele = {data[columnIndex*3+rowIndex]}
                    style = {style}
                    GUTTER_SIZE = {GUTTER_SIZE}
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
