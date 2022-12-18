import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Largecard from "../components/Largecard";

export default function Home() {
  const links = [
    {
      id: 1,
      image: "https://links.papareact.com/5j2",
      location: "London",
      distance: "45-minute drive",
    },
    {
      id: 2,
      image: "https://links.papareact.com/1to",
      location: "Manchester",
      distance: "4.5-hour drive",
    },
    {
      id: 3,
      image: "https://links.papareact.com/40m",
      location: "Liverpool",
      distance: "4.5-hour drive",
    },
    {
      id: 4,
      image: "https://links.papareact.com/msp",
      location: "York",
      distance: "4-hour drive",
    },
    {
      id: 5,
      image: "https://links.papareact.com/2k3",
      location: "Cardiff",
      distance: "45-minute drive",
    },
    {
      id: 6,
      image: "https://links.papareact.com/ynx",
      location: "Birkenhead",
      distance: "4.5-hour drive",
    },
    {
      id: 7,
      image: "https://links.papareact.com/kji",
      location: "Newquay",
      distance: "6-hour drive",
    },
    {
      id: 8,
      image: "https://links.papareact.com/41m",
      location: "Hove",
      distance: "2-hour drive",
    },
  ];
  const cards = [
    {
      id:1,
      img:"https://links.papareact.com/2io",
      title:"Outdoor getaways"
    },
    { 
      id:2,
      img:"https://links.papareact.com/q7j",
      title:"Unique stays"
    },
    {
      id:3,
      img:"https://links.papareact.com/s03",
      title:"Entire homes"
    },
    {
      id:4,
      img:"https://links.papareact.com/8ix",
      title:"Pet allowed"
    }
  ];
  return (
    <div>
      <Head>
        <title>AirBnB 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">

        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5 text-red-500">
            Explore Nearby
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4">
            {links.map(({ id, image, location, distance }) => (
              <div
                key={id}
                className="flex items-center m-2 mt-5  space-x-4 rounded-xl cursor-pointer hover:bg-gray-800 hover:scale-105 transition transform duration-200 ease-out"
              >
                <div className="relative h-16 w-16">
                  <Image
                    src={image}
                    alt="destination"
                    layout="fill"
                    className="rounded-lg"
                  ></Image>
                </div>
                <div>
                  <h2>{location}</h2>
                  <h3 className="text-gray-300">{distance}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8 text-red-500">Live Anywhere</h2>

          <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cards.map(({id,img,title})=>
            (
              <div 
              key={id}
              className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out '>
                <div className="relative h-80 w-80">
                    <Image src={img} alt="destination"
                    layout="fill"
                    className="rounded-xl " />
                </div>
                <h3 className="text-2xl mt-3">{title}</h3>
              </div>
            ))}
          </div>

        </section>
        
        <Largecard/>
        
      </main>
    </div>
  );
}
