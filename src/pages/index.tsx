import Head from "next/head";
import { ExampleContainer } from "containers/Example";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <ExampleContainer />
      </body>
    </div>
  );
}
