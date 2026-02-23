const NoticeBanner = () => {
  return <div className="w-full bg-destructive border-b border-destructive-foreground/20">
      <div className="container mx-auto px-3 sm:px-6 py-2">
        <p className="text-center text-xs sm:text-sm font-semibold text-destructive-foreground">⚠️ Required for all foreign travelers arriving in Malaysia.</p>
      </div>
    </div>;
};
export default NoticeBanner;
