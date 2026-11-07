"use client";

import { useEffect, useRef } from "react";
import { Paper, type PaperHandle } from "paperlab";

const MENU_BODY = ["Workshops", "Production", "Films", "About"].join("\n");

type MenuPaperBallProps = {
  /** 1 = crumpled ball, 0 = flat sheet */
  progress: number;
  className?: string;
};

export function MenuPaperBall({
  progress,
  className = "",
}: MenuPaperBallProps) {
  const paperRef = useRef<PaperHandle>(null);

  useEffect(() => {
    paperRef.current?.set("progress", progress);
  }, [progress]);

  return (
    <Paper
      ref={paperRef}
      className={className}
      preset="crumpled-note"
      sheet={{ width: 1.05, height: 1.35, thickness: 0.18 }}
      stock="printer"
      content={{
        type: "card",
        title: "Menu",
        body: MENU_BODY,
        note: "Hire us",
        ruled: true,
        rule: true,
        font: "Georgia, 'Times New Roman', serif",
        size: 36,
        color: "#2c2c28",
        align: "left",
        padding: 0.1,
      }}
      behavior={{
        type: "crumple",
        progress,
        coarseness: 0.42,
        ball: 0.82,
        seed: 3,
      }}
      surface={{ grain: 0.45, aging: 0.12 }}
      scene={{
        lighting: "studio",
        light: { exposure: 1.15, ambient: 0.55, studio: 0.45 },
        floor: { enabled: false },
      }}
      physics="none"
      reducedMotion={false}
    />
  );
}
