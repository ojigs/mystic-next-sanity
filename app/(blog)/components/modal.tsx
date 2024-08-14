"use client";

import { type ElementRef, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { FaXmark } from "react-icons/fa6";

export function Modal({
  children,
  slug,
  previousIndex,
  nextIndex,
}: {
  children: React.ReactNode;
  slug?: string;
  previousIndex?: number;
  nextIndex?: number;
}) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          router.push(`/portfolio/${slug}/image/${previousIndex}`, {
            scroll: false,
          });
          break;
        case "ArrowRight":
          router.push(`/portfolio/${slug}/image/${nextIndex}`, {
            scroll: false,
          });
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router, slug, previousIndex, nextIndex]);

  return createPortal(
    <div className="fixed inset-0 h-screen bg-secondary backdrop-blur-md bg-opacity-50 flex items-center justify-center z-50">
      <dialog
        ref={dialogRef}
        className="bg-primary-50 rounded-lg max-w-4xl w-full modal"
        onClose={onDismiss}
      >
        <div className="absolute top-0 right-3 flex items-start">
          <button
            onClick={onDismiss}
            className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-accent/75 hover:text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {/* <div className="absolute top-0 right-3 flex items-center gap-2 p-3 text-white">
          <button
            onClick={onDismiss}
            className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
          >
            <FaXmark className="h-5 w-5" />
          </button>
        </div> */}
        {children}
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  );
}
