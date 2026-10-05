---
title: "Cashboard"
description: "Monthly expense tracker for recurring payments and installments."
date: "Aug 2026"
order: 0
technologies: ["TypeScript", "React", "Hono", "Cloudflare D1", "Cloudflare"]
URL: "https://cashboard.cc/"
video: "/media/cashboard-demo.mp4"
videoWebm: "/media/cashboard-demo.webm"
videoPoster: "/media/cashboard-demo-poster.webp"
---

Cashboard is a web app for tracking monthly recurring expenses, built to replace the spreadsheet I was previously using.

Expenses are organized in a kanban-style board, with support for recurring payments, grouped expenses, and credit-card installments.

Each month works as a snapshot of your expenses at that point in time. Creating a new month carries recurring expenses forward, while previous months remain unchanged, so editing or removing an expense never rewrites your history.

Installments are tracked automatically across months, including their current installment number, and are removed from future months once completed.
