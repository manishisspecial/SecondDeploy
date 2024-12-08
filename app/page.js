import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-2 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="p-5 border border-2 border-indigo-600 text-2xl flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-yellow-600 font-bold">Welcome to My React Page!</h1>
        <h2 className="text-teal-600 font-medium">A Special Thanks to you Sir</h2>
        <Image
          className="dark:invert shadow-2xl"
          src="/new.jpg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <p className="text-green-600">
          Dear Sir,
        </p>
        <p className="text-violet-600">
          Thank you for inspiring me to learn and grow. This is my first React
          project, and I dedicate it to you!
        </p>
      <footer className="font-black">
        Built with ❤️ using React
      </footer>
      </main>
    </div>
  );
}
