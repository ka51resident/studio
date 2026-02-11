"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import ImageWithLoader from "./ui/image-with-loader";

type CertificateModalProps = {
  title: string;
  imageSrc: string;
};

export function CertificateModal({ title, imageSrc }: CertificateModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-sm text-muted-foreground hover:text-primary transition-colors text-left">
          {title}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-md w-full">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription>
            Official Certificate for {title}.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <ImageWithLoader
            src={imageSrc}
            alt={`${title} Certificate`}
            width={827}
            height={1169}
            className="object-contain w-full h-auto rounded-lg border"
            wrapperClassName="w-full"
            sizes="(max-width: 768px) 90vw, 50vw"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
