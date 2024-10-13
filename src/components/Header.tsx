'use client'

import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="/videos/header-background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Welcome to ShopKaro
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-white mb-8 drop-shadow-lg">
          Discover amazing deals on trendy products
        </p>
        <Link href="/products" passHref>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Shop Now
          </button>
        </Link>
      </div>
    </header>
  )
}