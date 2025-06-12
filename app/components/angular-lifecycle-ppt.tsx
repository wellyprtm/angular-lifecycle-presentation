"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Code2, Eye } from "lucide-react"

// Simple slide template
const SlideTemplate = ({
  slide,
  currentSlide,
  totalSlides,
}: {
  slide: any
  currentSlide: number
  totalSlides: number
}) => (
  <div className="w-full h-screen bg-white flex flex-col">
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="text-3xl">{slide.icon}</div>
        <h1 className="text-2xl font-bold">{slide.title}</h1>
      </div>
      <div className="text-sm bg-white/20 px-3 py-1 rounded-full">
        {currentSlide} / {totalSlides}
      </div>
    </div>
    <div className="flex-1 p-8 overflow-auto">
      <div className="max-w-6xl mx-auto">{slide.content}</div>
    </div>
    <div className="bg-gray-100 p-4 text-center text-sm text-gray-600 border-t">
      Angular Lifecycle Hooks - Presentation
    </div>
  </div>
)

export default function AngularLifecyclePPT() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [isAutoPlay, setIsAutoPlay] = useState(false)

  const slides = [
    {
      id: 1,
      title: "Angular Lifecycle",
      icon: <Code2 />,
      content: (
        <div className="flex items-center justify-center h-full">
          <div className="text-center space-y-8">
            <div className="text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Angular Lifecycle
            </div>
            <div className="text-2xl text-gray-600 font-light">Understanding Component Lifecycle Hooks</div>
            <div className="flex justify-center space-x-4 text-4xl">
              <span>⚡</span>
              <span>🔄</span>
              <span>🚀</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Test Slide",
      icon: <Eye />,
      content: (
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">This is a test slide</h2>
          <p className="text-xl">If you can see this, the presentation is working!</p>
        </div>
      ),
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < slides.length ? prev + 1 : 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 1 ? prev - 1 : slides.length))
  }

  const currentSlideData = slides.find((slide) => slide.id === currentSlide)

  return (
    <div className="relative w-full h-screen bg-gray-100 overflow-hidden">
      {currentSlideData && (
        <div className="w-full h-full">
          <SlideTemplate slide={currentSlideData} currentSlide={currentSlide} totalSlides={slides.length} />
        </div>
      )}

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border">
        <Button variant="outline" size="sm" onClick={prevSlide} className="w-10 h-10 p-0">
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button variant="outline" size="sm" onClick={nextSlide} className="w-10 h-10 p-0">
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
