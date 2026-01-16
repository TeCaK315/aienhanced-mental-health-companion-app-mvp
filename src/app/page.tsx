export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">AI-Enhanced Mental Health Companion</h1>
        <p className="mb-8">Personalized support for your mental well-being.</p>
        <button className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-500">Get Started</button>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">The Problem</h2>
        <p>Many people struggle to find effective mental health solutions that they can trust.</p>
        <h2 className="text-2xl font-semibold">Our Solution</h2>
        <p>We're using AI to provide personalized approaches to mental health support.</p>
      </section>
    </main>
  );
}