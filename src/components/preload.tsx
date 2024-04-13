import Image from "next/image";

const PreLoad = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Image
        src="/loader-image.png"
        alt="Carregando..."
        height={0}
        width={0}
        sizes="100vw"
        className="loader animate-spin w-24 h-auto drop-shadow-xl"
      />
    </div>
  );
};

export default PreLoad;
