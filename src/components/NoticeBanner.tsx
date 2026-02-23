const NoticeBanner = () => {
  return (
    <div className="w-full bg-destructive border-b border-destructive/80">
      <div className="container mx-auto px-4 py-1">
        <p className="text-center text-xs font-semibold text-destructive-foreground tracking-wide">
          Disclaimer: Independent service portal; not a government entity. MDAC is mandatory for all travelers.
        </p>
      </div>
    </div>);

};

export default NoticeBanner;