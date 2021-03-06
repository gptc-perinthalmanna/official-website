import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BsEyeFill } from "react-icons/bs";
import { GiTargetPoster } from "react-icons/gi";
import useSWR from "swr";
import ImagePost from "../components/custom/ImagePost";
import Container from "../components/layout/Container";
import Content from "../components/layout/Content";
import Footer from "../components/layout/Footer";
import LogoBanner from "../components/layout/LogoBanner";
import NavBar from "../components/layout/NavBar";
import TopBanner from "../components/layout/TopBanner";
import NewsTicker from "../components/NewsTicker";
import EventCarousel from "../components/ui/EventCarousal";
import HeroCarousel from "../components/ui/HeroCarousal";
import LogoCarousal from "../components/ui/Logo Carousal";
import { fetcher } from "../server/calls";
import { EventType, ImageType } from "../server/db";
import { getImage } from "../server/files";
import { getOther } from "../server/other";

const _mou = [
  {
    url: "https://i.ibb.co/HGzKjRh/6521bae5a866.png",
    alt: "Softbuy Logo",
  },
  {
    url: "https://i.ibb.co/7NVM1J2/9ab2c68fd614.png",
    alt: "ICTA Kerala Logo",
  },
  {
    url: "https://i.ibb.co/yq9WLjv/85ed7eb5ac65.png",
    alt: "Coronus steel Logo",
  },
  {
    url: "https://i.ibb.co/WKG4T9k/27ec7d588449.png",
    alt: "Universal Implements Logo",
  },
];

const Home: NextPage<{ heroImgs: ImageType[] }> = ({ heroImgs }) => {
  const event = useSWR<EventType>("api/events/highlighted", fetcher);
  return (
    <div>
      <Head>
        <title>Govt Polytechnic College, Perinthalmanna</title>
        <meta
          name="description"
          content="Government Polytechnic College Perinthalmanna"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBanner />
      <LogoBanner />
      <NavBar />
      <div className="w-full h-90">
        <HeroCarousel images={heroImgs} />
      </div>
      <NewsTicker />

      <div className="container mx-auto my-3">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/4">
            <h1 className="my-3 text-2xl font-bold text-gray-700">
              Welcome to Govt Polytechnic College Perinthalmanna
            </h1>
            <div className="flex">
              <div
                className="relative w-2/4 min-h-full bg-center bg-no-repeat bg-cover 2xl:w-2/5"
                style={{
                  backgroundImage:
                    "url('https://i.ibb.co/cTmmnYV/main1-scaled.jpg')",
                }}
              >
                <a className="absolute px-3 py-2 text-xs transition-all duration-200 bg-gray-800 cursor-pointer bottom-2 left-2 text-gray-50 hover:bg-gray-700">
                  Virtual Tour
                </a>
              </div>
              <div className="flex-grow w-2/4 p-3 bg-gray-200 2xl:w-3/5">
                <h2 className="text-xl font-semibold ">About our College</h2>
                <p className="">
                  Govt Polytechnic College Perinthalmanna is one of the leading
                  institutions of its kind in Kerala. Academically and otherwise
                  its position in the state is unchallenged. Activities focusing
                  on the result enhancement and the overall development of the
                  students to make them excel in their respective fields are
                  remarkable. The college has a rich tradition to look back. The
                  present is praiseworthy, so the future has to be envisioned in
                  the light of the glorious past and the meritorious present
                </p>
                <div className="pt-4 text-sm text-gray-500 cursor-pointer hover:text-gray-600">
                  - Know More
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mt-3 h-60 lg:h-auto lg:mt-0 lg:w-1/4 lg:pl-2">
            <h1 className="my-3 text-2xl font-bold text-gray-700">Events</h1>

            <div className="flex h-full">
              {event.data && (
                <ImagePost
                  fullHeight
                  image={event.data?.image}
                  date={event.data?.date}
                  title={event.data?.title}
                  subtitle={event.data?.subtitle}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Misson and Vision */}

      <div
        className="container mx-auto bg-bottom bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('https://i.ibb.co/cTmmnYV/main1-scaled.jpg')",
        }}
      >
        <div className="flex justify-center mx-auto bg-gray-900 lg:px-4 bg-opacity-80">
          <div className="w-2/3 py-16 text-center">
            <div className="w-20 mx-auto text-white">
              <BsEyeFill size={70} />
            </div>
            <h1 className="text-2xl font-bold text-white"> Vision </h1>
            <p className="text-sm text-white">
              To be a centre of excellence to mould technically competent
              engineers for industry expertise and social development.
            </p>
          </div>
          <div className="w-2/3 py-16 text-center">
            <div className="w-20 mx-auto text-white">
              <GiTargetPoster size={70} />
            </div>
            <h1 className="text-2xl font-bold text-white"> Mission </h1>
            <p className="text-sm text-white">
              Impart quality technical education and skills to develop
              engineering professionals to meet the needs of industry and
              society. Facilitate professional interactions between industry and
              engineers and to promote innovation and entrepreneurship.
              Inculcate moral values and life ethics in engineering
              professionals to serve the society.
            </p>
          </div>
        </div>
      </div>

      {/* Principals message and Placement Cell */}

      <Container>
        <div className="flex flex-col flex-wrap lg:flex-row">
          <div
            className="flex-grow-0 w-full m-2 transition-opacity duration-300 ease-in border-2 rounded-md cursor-pointer lg:w-108 hover:opacity-70 "
            style={{ backgroundColor: "#dde4ff" }}
          >
            <Link href="/college/placement-officers-desk">
              <a>
                <div className="relative w-full h-80">
                  <Image
                    src="/images/placement-cover.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Decorative"
                    objectPosition={`100% 50%`}
                  />
                </div>
              </a>
            </Link>
          </div>
          <div className="flex flex-1 w-full m-2 bg-gray-100 border-2 rounded-md ">
            <div className="p-3">
              <h3 className="mb-2 text-2xl font-bold">
                {"Principal's Message"}
              </h3>
              <p>
                The college is responsible and competent for the development of
                technical education and has tried to retain its glory by
                implementing schemes to achieve academic excellence and
                improving administrative performance. Our various programmes and
                initiatives includes formation of various academic committees,
                prompt utilization of government funds, enhancement of
                infrastructure and other facilities and various activities to
                boost the academic performance of students and staff.
              </p>
              <p className="mt-2 font-semibold text-right ">- Dr Pradeep M</p>
              <p className="text-sm text-right ">Principal</p>
            </div>
            <div className="relative hidden w-full md:block h-80">
              <Image
                src="/images/principal.jpg"
                layout="fill"
                objectFit="cover"
                alt="Principal's Image"
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Previous Events  */}

      <Container>
        <Content>
          <Content.FullWidth>
            <h1 className="my-3 text-2xl font-bold text-gray-700">
              Recent Events
            </h1>
            <EventCarousel fetchAll />
          </Content.FullWidth>
        </Content>
      </Container>

      {/* Mou Signed with  */}

      <Container>
      <Content>
        <Content.Half>
          <h1 className="my-3 text-2xl font-bold text-gray-700">
            MOU | Partners
          </h1>
          <div className="">
            <LogoCarousal images={_mou} />
            <div></div>
          </div>
        </Content.Half>
        </Content>
      </Container>

      <div className="my-3" />
      <Footer />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const _images = (await getOther("hero-images")) as { images: string[] };
  let heroImgs: ImageType[] = [];
  let unresolvedpromises: any;

  unresolvedpromises = _images.images.map(async (id) => {
    const img = await getImage(id);
    if (img) {
      heroImgs.push(img);
    }
  });
  if (unresolvedpromises) await Promise.all(unresolvedpromises);
  return {
    props: {
      heroImgs,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 600000, // In seconds
  };
}
