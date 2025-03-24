"use client"

import { ReactNode, useEffect } from "react";

type GlowCardProps = {
  children: ReactNode;
  identifier: string;
};

const GlowCard = ({ children, identifier }: GlowCardProps) => {
  useEffect(() => {
    const CONTAINER = document.querySelector(
      `.glow-container-${identifier}`
    ) as HTMLElement | null;
    const CARDS = document.querySelectorAll(
      `.glow-card-${identifier}`
    ) as NodeListOf<HTMLElement>;

    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const UPDATE = (event: MouseEvent) => {
      CARDS.forEach((CARD) => {
        if (!CARD) return;

        const CARD_BOUNDS = CARD.getBoundingClientRect();

        if (
          event.x > CARD_BOUNDS.left - CONFIG.proximity &&
          event.x < CARD_BOUNDS.right + CONFIG.proximity &&
          event.y > CARD_BOUNDS.top - CONFIG.proximity &&
          event.y < CARD_BOUNDS.bottom + CONFIG.proximity
        ) {
          CARD.style.setProperty("--active", "1");
        } else {
          CARD.style.setProperty("--active", CONFIG.opacity.toString());
        }

        const CARD_CENTER = [
          CARD_BOUNDS ? event.x - CARD_BOUNDS.left : 0,
          CARD_BOUNDS ? event.y - CARD_BOUNDS.top : 0
        ];

        if (!(CARD_CENTER && CARD_CENTER[1] !== undefined)) {
          // Handle the case where CARD_CENTER or CARD_CENTER[1] is undefined
          console.error('CARD_CENTER or CARD_CENTER[1] is undefined');
        }

        let ANGLE =
          (Math.atan2(event.y - (CARD_CENTER[1] ?? 0), event.x - (CARD_CENTER[0] ?? 0)) *
            180) /
          Math.PI;

        ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;
        CARD.style.setProperty("--start", (ANGLE + 90).toString());
      });
    };

    document.body.addEventListener("pointermove", UPDATE);

    const RESTYLE = () => {
      if (!CONTAINER) return;
      CONTAINER.style.setProperty("--gap", CONFIG.gap.toString());
      CONTAINER.style.setProperty("--blur", CONFIG.blur.toString());
      CONTAINER.style.setProperty("--spread", CONFIG.spread.toString());
      CONTAINER.style.setProperty(
        "--direction",
        CONFIG.vertical ? "column" : "row"
      );
    };

    RESTYLE();

    return () => {
      document.body.removeEventListener("pointermove", UPDATE);
    };
  }, [identifier]);

  return (
    <div className={`glow-container-${identifier} glow-container`}>
      <article
        className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}
      >
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;
