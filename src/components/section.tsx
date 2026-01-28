export default function section({
  id,
  title,
  dot = false,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  dot?: boolean;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-end gap-3">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
        {dot && <span className="mb-2 h-3 w-3 rounded-full bg-sky-400" />}
      </div>
      {subtitle && <p className="mt-3 text-white/70 max-w-2xl">{subtitle}</p>}
      <div className="mt-10">{children}</div>
    </section>
  );
}
