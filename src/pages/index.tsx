import { Head } from "minista-plugin-ssg/client";
import { Image } from "minista-plugin-image/client";

export default function () {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/src/assets/style.css" />
        <script type="module" src="/src/assets/script.ts" />
      </Head>
      <h1>Playground</h1>
      <div>
        <Image src="/src/assets/image.png" width={800} />
      </div>
    </>
  );
}
