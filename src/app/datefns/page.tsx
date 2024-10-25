"use client";
import { addDays, compareAsc, format } from "date-fns";
import React from "react";

export default function page() {
  const dates = [
    new Date(1968, 2, 23),
    new Date(1997, 6, 22),
    new Date(1826, 4, 27),
    new Date(2023, 3, 17),
  ];
  dates.sort(compareAsc);
  const addedDates = dates.map((date) => addDays(date, 10));
  return (
    <main>
      <h1>date-fns</h1>
      <section>
        {dates.map((date, idx) => (
          <p key={idx}>{String(date)}</p>
        ))}
        {dates.map((date, idx) => (
          <p key={idx}>{format(String(date), "yyyy-MM-dd")}</p>
        ))}
        {addedDates.map((date, idx) => (
          <p key={idx}>{format(String(date), "yyyy-MM-dd")}</p>
        ))}
        <p></p>
      </section>
    </main>
  );
}
