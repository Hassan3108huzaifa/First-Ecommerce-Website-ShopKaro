'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const categories = [
    {
        name: 'Men\'s Fashion',
        image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        link: '/category/mens-fashion',
    },
    {
        name: 'Women\'s Fashion',
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        link: '/category/womens-fashion',
    },
    {
        name: 'Electronics',
        image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        link: '/category/electronics',
    },
    {
        name: 'Home & Living',
        image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80',
        link: '/category/home-living',
    },
    {
        name: 'Beauty',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
        link: '/category/beauty',
    },
    {
        name: 'Sports & Outdoors',
        image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80',
        link: '/category/sports-outdoors',
    },
]

export default function Categories() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
                        Explore Our Collections
                    </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.name}
                            className="md:col-span-1"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={category.link} className="block group relative overflow-hidden rounded-lg shadow-lg">
                                <div className="relative aspect-[1/1]"> {/* All images will have the same aspect ratio */}
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-20" />
                                    <div className="absolute inset-0 flex items-center justify-center p-4">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white text-center drop-shadow-lg transform transition-transform duration-300 group-hover:scale-105">
                                            {category.name}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
