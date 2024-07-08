import Services from "./(sections)/services/page";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <Services />
        </div>
      </main>
    </div>
  );
}
