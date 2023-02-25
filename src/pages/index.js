import Header from "@/components/Header";
import TopCards from "@/components/TopCards";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-100 min-h-screen">
        <div className="w-[95%] mx-auto">
          <Header />
          <TopCards />
        </div>
      </main>
    </>
  );
}
