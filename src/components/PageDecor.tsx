const PageDecor = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -left-28 top-20 h-52 w-52 bg-primary/10 blur-[1px]"
        style={{ clipPath: "polygon(0 10%, 100% 0, 52% 100%)" }}
      />
      <div
            className="absolute -right-28 top-20 h-52 w-52 bg-primary/10 blur-[1px]"
            style={{ clipPath: "polygon(0 10%, 100% 0, 52% 100%)" }}
      />
      <div className="absolute -right-20 top-[30rem] h-36 w-36 rounded-full border border-primary/10 bg-primary/8" />
      <div
        className="absolute -left-20 top-[58rem] h-44 w-44 bg-accent/10"
        style={{ clipPath: "polygon(10% 0, 100% 18%, 70% 100%, 0 84%)" }}
      />
      <div
        className="absolute -right-24 top-[82rem] h-52 w-40 border border-accent/15 bg-background/35 backdrop-blur-sm"
        style={{ clipPath: "polygon(24% 0, 100% 0, 100% 76%, 0 100%)" }}
      />
      <div
        className="absolute -left-24 top-[112rem] h-48 w-52 bg-primary/10"
        style={{ clipPath: "polygon(0 18%, 100% 0, 58% 100%)" }}
      />
      <div className="absolute -right-16 top-[132rem] h-32 w-32 rounded-full bg-accent/10 blur-md" />
      <div
        className="absolute -right-28 bottom-24 h-56 w-56 bg-primary/10"
        style={{ clipPath: "polygon(18% 0, 100% 14%, 72% 100%, 0 86%)" }}
      />
        <div
            className="absolute -left-28 bottom-4 h-52 w-52 bg-primary/10 blur-[1px]"
            style={{ clipPath: "polygon(0 10%, 100% 0, 40% 100%)" }}
        />
    </div>
  );
};

export default PageDecor;
