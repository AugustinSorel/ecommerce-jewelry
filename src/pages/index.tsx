import Head from "next/head";
import HomePageCarousel from "../components/homePageCarousel";
import ShopLatest from "../components/ShopLatest";

export default function Home() {
  return (
    <>
      <Head>
        <title>shoppe jewelry</title>
        <meta
          name="description"
          content="Buy the best jewelry ever on this site"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePageCarousel />

      <ShopLatest />
    </>
  );
}
