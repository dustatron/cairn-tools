export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-cente w-full">
      <div className="inline-block text-center justify-center w-full">
        {children}
      </div>
    </section>
  );
}
