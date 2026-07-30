type SectionTitleProps = {
  title: string;
  text?: string;
};

export default function SectionTitle({ title, text }: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-sm uppercase tracking-[0.28em] text-fuchsia-300/80">
        Vexora Studio
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );
}
