export default function Dummy() {
  return (
    <div className="min-h-screen flex items-center justify-center px-5 bg-[radial-gradient(circle_at_top,#2a2a2a,#111)]">
      <div className="w-full max-w-130 rounded-[22px] border border-[#3a3a3a] bg-[#242424] px-8 py-11 text-center text-[#e0e0e0]">
        
        <div className="mb-5 text-6xl">🚀</div>

        <h1 className="mb-3.5 text-3xl font-bold text-white">
          This Feature is Under Development
        </h1>

        <p className="mb-7 text-base leading-relaxed text-[#aaa]">
          This project is currently being developed and configured for live
          access. Please check back soon.
        </p>

        <a
          href="/"
          className="inline-block rounded-xl bg-[#ffbf00] px-6 py-3 font-bold text-[#111] no-underline transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffd34d]"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}