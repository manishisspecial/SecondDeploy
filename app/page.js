import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

      <h1 style={{ color: "#4CAF50" }}>Welcome to My React Page!</h1>
      <h2 style={{ color: "#555" }}>A Special Thanks to you "Satyam Sir"</h2>
        <Image
          className="dark:invert"
          src="/new.jpg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
          style={{ borderRadius: "50%", margin: "20px 0" }}
        />
        <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#333" }}>
        Dear Sir,
        <br />
        Thank you for inspiring me to learn and grow. This is my first React project, and
        I dedicate it to you!
      </p>

      </main>
   <footer style={{ marginTop: "20px", fontSize: "14px", color: "#888" }}>
        Built with ❤️ using React
      </footer>
    </div>
  );
}
