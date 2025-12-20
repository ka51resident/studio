"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

export function PrivacyPolicyModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">Privacy Policy</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Privacy</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-base text-muted-foreground py-4">
            <p>
                We do not collect, track, sell, or monetize your personal data.
            </p>
            <p>
                You may use this website without creating an account and without being subject to analytics, advertising trackers, or behavioral profiling.
            </p>
            <p>
                The only personal information we collect is information you voluntarily provide if you contact us or request additional details. That information is used solely to respond to your request, remains with us, and is not shared with third parties.
            </p>
            <p>
                At a time when personal data is often required for basic services, our focus is simply on providing a high quality service without unnecessary data collection.
            </p>
            <p>
                If you contact us, you may request deletion of your information at any time, and we will comply promptly.
            </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
