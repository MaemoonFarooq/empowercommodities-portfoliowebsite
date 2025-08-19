"use client"

import React from "react"

export function XIcon({ className = "w-4 h-4 lg:w-5 lg:h-5" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M18.244 2H21.5l-7.62 8.71L22 22h-6.437l-4.98-6.535L5.61 22H2.355l8.15-9.31L2 2h6.564l4.485 5.95L18.244 2z" />
    </svg>
  )
}
