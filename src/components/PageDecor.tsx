const PageDecor = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="mx-auto h-full max-w-6xl border-x border-foreground/5" />
    </div>
  );
};

export default PageDecor;
