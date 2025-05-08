// pages/index.tsx
import Image from "next/image";

type Props = {
  src: string;
  width: number;
  height: number;
  quality: number;
  objectFit: string;
};

export default function Home({
  src,
  width,
  height,
  quality,
  objectFit,
}: Props) {
  if (!src || !width || !height) {
    return <p>Missing or invalid parameters</p>;
  }

  return (
    <Image
      src={decodeURIComponent(src)}
      alt="Compressed image"
      width={width}
      height={height}
      quality={quality}
      style={{ objectFit: objectFit as any }}
    />
  );
}

export async function getServerSideProps(context: any) {
  const { query } = context;

  const src = query.src || "";
  const width = parseInt(query.w || "0");
  const height = parseInt(query.h || "0");
  const quality = parseInt(query.q || "75");
  const objectFit = query.objectFit || "cover";

  return {
    props: {
      src,
      width,
      height,
      quality,
      objectFit,
    },
  };
}
