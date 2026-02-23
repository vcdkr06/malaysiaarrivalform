import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const SiteMovedModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show modal on component mount if user hasn't seen it before
    const hasSeenModal = localStorage.getItem("hasSeenSiteMovedModal");
    if (!hasSeenModal) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("hasSeenSiteMovedModal", "true");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Important Notice</DialogTitle>
          <DialogDescription className="text-base pt-4">
            Our site has moved to <span className="font-semibold text-foreground">earrivalform.com</span>
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end pt-4">
          <Button onClick={handleClose}>
            Got it
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SiteMovedModal;
