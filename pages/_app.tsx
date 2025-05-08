import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function App() {
  const searchParams = useSearchParams();
  const w = searchParams.get("w");
  const h = searchParams.get("h");
  const q = searchParams.get("q");
  const src = searchParams.get("src");
  const objectFit = searchParams.get("objectFit");

  return (
    <Image
      src={src ? decodeURIComponent(src) : ""}
      alt="Compressed image"
      width={w ? parseInt(w) : 0}
      height={h ? parseInt(h) : 0}
      quality={q ? parseInt(q) : 0}
      objectFit={objectFit ? (objectFit as any) : "cover"}
    />
  );
}
