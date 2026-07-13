import Reveal from "./reveal";

export default function Section({
  id,
  number,
  title,
  subtitle,
  children,
}: {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative z-1 mx-auto w-[min(1180px,calc(100%-2rem))] scroll-mt-20 py-16 sm:py-28 max-[480px]:w-[min(1180px,calc(100%-1.25rem))]">
      <Reveal className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[0.72rem] font-bold leading-none tracking-[0.16em] text-[#FFD369] uppercase">{number} / {id}</p>
          <h2 className="mt-3 text-[2rem] leading-tight font-semibold tracking-[-0.03em] text-[#EEEEEE] sm:text-5xl">{title}</h2>
        </div>
        {subtitle && <p className="max-w-xl text-sm leading-7 text-[#EEEEEE]/55 sm:text-right">{subtitle}</p>}
      </Reveal>
      {children}
    </section>
  );
}
