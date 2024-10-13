'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import productsData, { Product } from '../../products/products'
import ProductCard from '@/components/ProductCard'
import { motion } from 'framer-motion'

const CategoryPage: React.FC = () => {
  const params = useParams()
  const [products, setProducts] = useState<Product[]>([])
  const [categoryName, setCategoryName] = useState('')

  useEffect(() => {
    const slug = params.slug as string
    const categoryData = productsData[slug]

    if (categoryData) {
      setProducts(categoryData.products)
      setCategoryName(categoryData.name)
    } else {
      setProducts([])
      setCategoryName('Category Not Found')
    }
  }, [params.slug])

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
          {categoryName}
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.length > 0 ? (
          products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <ProductCard product={product} />
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">No products found in this category.</p>
        )}
      </div>
    </div>
  )
}

export default CategoryPage