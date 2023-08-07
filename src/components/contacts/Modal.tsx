"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ReactNode, useCallback, useRef } from "react";

const Modal = ({ children }: { children: ReactNode }) => {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleCloseClick = useCallback(() => {
    router.push("/contacts");
  }, [router]);

  const handleOutsideClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlay.current && handleCloseClick) {
        handleCloseClick();
      }
    },
    [handleCloseClick, overlay]
  );

  return (
    <div ref={overlay} className="modal" onClick={handleOutsideClick}>
      <button
        type="button"
        onClick={handleCloseClick}
        className="absolute top-4 right-8"
      >
        <Image src="/close.svg" width={17} height={17} alt="close" />
      </button>
      <div ref={wrapper} className="modal_wrapper">
        {children}
      </div>
    </div>
  );
};

export default Modal;
