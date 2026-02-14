"use client";

import React, { useEffect, useState } from "react";

function addMonthSafe(date: Date, months: number) {
  const d = new Date(date.getTime());
  const day = d.getDate();
  d.setDate(1);
  d.setMonth(d.getMonth() + months);
  const daysInMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  d.setDate(Math.min(day, daysInMonth));
  return d;
}

function getRemaining(target: Date, now: Date) {
  if (now >= target) return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0, totalMs: 0 };

  // compute full months
  let temp = new Date(now.getTime());
  let months = 0;
  while (true) {
    const next = addMonthSafe(temp, 1);
    if (next <= target) {
      months++;
      temp = next;
    } else break;
  }

  const remainderMs = target.getTime() - temp.getTime();
  const days = Math.floor(remainderMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainderMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainderMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainderMs % (1000 * 60)) / 1000);

  return { months, days, hours, minutes, seconds, totalMs: remainderMs };
}

export default function CountdownOverlay() {
  const [remaining, setRemaining] = useState<{
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    totalMs: number;
  } | null>(null);

  const [visible, setVisible] = useState(true);
  const [targetDateStr, setTargetDateStr] = useState("");

  useEffect(() => {
    // Next target date calculation happens only on client
    const target = nextTargetDate();
    setTargetDateStr(target.toLocaleString(undefined, { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" }));

    const update = () => {
      const now = new Date();
      const rem = getRemaining(target, now);
      setRemaining(rem);
      if (rem.totalMs <= 0) setVisible(false);
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  const r = remaining || { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };

  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">Falta poco para darte tu sorpresa</h1>
        <p className="mb-6 text-slate-300">Volveremos a las {targetDateStr || "..."} — mientras tanto, paciencia 🤍</p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center *:last:col-span-2 md:*:last:col-span-auto">
          <TimeBox value={r.months} label="Meses" />
          <TimeBox value={r.days} label="Días" />
          <TimeBox value={r.hours} label="Horas" />
          <TimeBox value={r.minutes} label="Minutos" />
          <TimeBox value={r.seconds} label="Segundos" />
        </div>

        <div className="mt-8 text-sm text-slate-400">La página estará disponible automáticamente cuando llegue la fecha.</div>
      </div>
    </div>
  );
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-white/6 backdrop-blur-sm rounded-lg p-4">
      <div className="text-2xl md:text-3xl font-mono font-bold">{String(value).padStart(2, "0")}</div>
      <div className="text-xs mt-1 text-slate-300">{label}</div>
    </div>
  );
}

function nextTargetDate() {
  const now = new Date();
  const year = now.getFullYear();
  const candidate = new Date(year, 4, 19, 0, 0, 0); // May 19, 00:00 local
  if (now < candidate) return candidate;
  return new Date(year + 1, 4, 19, 0, 0, 0);
}
