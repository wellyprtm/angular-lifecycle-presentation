"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Code2,
  Eye,
  Zap,
  Loader2,
  TableProperties,
  LifeBuoy,
  Play,
  Pause,
  RotateCcw,
} from "lucide-react"

interface SlideData {
  id: number
  title: string
  icon: React.ReactNode
  content: React.ReactNode
}

const SlideTemplate = ({
  slide,
  currentSlide,
  totalSlides,
}: {
  slide: SlideData
  currentSlide: number
  totalSlides: number
}) => (
  <div className="w-full h-screen bg-white flex flex-col">
    {/* Header */}
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="text-3xl">{slide.icon}</div>
        <h1 className="text-2xl font-bold">{slide.title}</h1>
      </div>
      <div className="text-sm bg-white/20 px-3 py-1 rounded-full">
        {currentSlide} / {totalSlides}
      </div>
    </div>

    {/* Content Area */}
    <div className="flex-1 p-8 overflow-auto">
      <div className="max-w-6xl mx-auto">{slide.content}</div>
    </div>

    {/* Footer */}
    <div className="bg-gray-100 p-4 text-center text-sm text-gray-600 border-t">
      Angular Lifecycle Hooks - Presentation
    </div>
  </div>
)

export default function AngularLifecyclePPT() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [isAutoPlay, setIsAutoPlay] = useState(false)

  const slides: SlideData[] = [
    {
      id: 1,
      title: "Apa Itu Lifecycle di Angular?",
      icon: <Code2 />,
      content: (
        <div className="space-y-8 text-lg">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <p className="text-xl leading-relaxed">
              <strong className="text-blue-700">Lifecycle Angular</strong> adalah urutan kejadian mulai dari saat
              komponen dibuat, ditampilkan di layar, diperbarui karena perubahan data, hingga akhirnya dihancurkan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 Tujuan Lifecycle</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Mengontrol flow data komponen</li>
                <li>• Menjalankan logika di waktu yang tepat</li>
                <li>• Mengoptimalkan performa aplikasi</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🔧 Lifecycle Hooks</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Mengambil data dari API</li>
                <li>• Akses dan manipulasi DOM</li>
                <li>• Membersihkan resource</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Urutan Lifecycle Hooks",
      icon: <Loader2 />,
      content: (
        <div className="space-y-6">
          <div className="grid gap-4">
            {[
              { emoji: "🔧", hook: "constructor()", desc: "Inisialisasi class", color: "red" },
              { emoji: "🌀", hook: "ngOnChanges()", desc: "@Input berubah", color: "orange" },
              { emoji: "🚀", hook: "ngOnInit()", desc: "Inisialisasi data", color: "yellow" },
              { emoji: "📥", hook: "ngAfterContentInit()", desc: "Content projection siap", color: "green" },
              { emoji: "👁️", hook: "ngAfterContentChecked()", desc: "Content dicek ulang", color: "blue" },
              { emoji: "👀", hook: "ngAfterViewInit()", desc: "View sudah dirender", color: "indigo" },
              { emoji: "👁️", hook: "ngAfterViewChecked()", desc: "View dicek ulang", color: "purple" },
              { emoji: "🧹", hook: "ngOnDestroy()", desc: "Bersihkan sebelum hancur", color: "pink" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`bg-${item.color}-50 border-l-4 border-${item.color}-400 p-4 rounded-r-lg flex items-center gap-4 shadow-sm`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="text-3xl">{item.emoji}</span>
                <div className="flex-1">
                  <code className={`text-${item.color}-700 font-bold text-lg`}>{item.hook}</code>
                  <p className="text-gray-600 mt-1">{item.desc}</p>
                </div>
                <div
                  className={`bg-${item.color}-100 text-${item.color}-700 px-3 py-1 rounded-full text-sm font-medium`}
                >
                  {i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Tabel Detail Lifecycle Hooks",
      icon: <TableProperties />,
      content: (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <tr>
                  <th className="p-4 text-left font-semibold">Hook</th>
                  <th className="p-4 text-left font-semibold">Kapan Dipanggil</th>
                  <th className="p-4 text-left font-semibold">Fungsi Umum</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["constructor", "Saat class dibuat", "Inisialisasi variabel, DI"],
                  ["ngOnChanges", "Saat @Input berubah", "Reaksi terhadap input"],
                  ["ngOnInit", "Setelah input siap", "Ambil data, setup FormGroup"],
                  ["ngDoCheck", "Setiap change detection", "Custom perubahan"],
                  ["ngAfterContentInit", "Setelah content projection", "Akses <ng-content>"],
                  ["ngAfterContentChecked", "Setelah content dicek ulang", "Validasi ulang"],
                  ["ngAfterViewInit", "Setelah view dirender", "Akses DOM/ViewChild"],
                  ["ngAfterViewChecked", "Setelah pengecekan view", "Optimasi update"],
                  ["ngOnDestroy", "Sebelum dihancurkan", "Unsubscribe, cleanup"],
                ].map(([hook, when, use], i) => (
                  <tr
                    key={i}
                    className={`${i % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50 transition-colors`}
                  >
                    <td className="p-4">
                      <code className="bg-blue-100 text-blue-700 px-2 py-1 rounded font-mono text-sm font-medium">
                        {hook}
                      </code>
                    </td>
                    <td className="p-4 text-gray-700">{when}</td>
                    <td className="p-4 text-gray-700">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Sample Code",
      icon: <Eye />,
      content: (
        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Contoh Struktur HTML</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-auto">
              <pre>{`<div class="sg-content">
  <sg-table
    #products
    keys="id"
    [headerConfig]="headerConfig"
    [editButtonInRow]="true"
    [deleteButtonInRow]="true"
    [queryOnInit]="true"
    title="Product"
    attr="tableProduct"
    mode="page"
    service="products"
    [addButtonInRow]="true"
    [withHistoryFilter]="true"
    >

    <sg-form #formFilter attr="formFilter" keys="id" panel="Accordion" formLabel="Filter">
      <div class="row">
        <div class="col-md-3 col-sm-3">
          <sg-text-input attr="productCode" label="Product Code"></sg-text-input>
          <sg-text-input attr="productName" label="Product Name"></sg-text-input>
          <sg-date-input attr="expiredDate" label="Expired Date" format="TIME_FORMAT"></sg-date-input>
        </div>
      </div>
    </sg-form>
    <sg-button-action [targetForm]="formFilter" action="filter" buttonId="btnProductSearch"></sg-button-action>
  </sg-table>
</div>`}</pre>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-blue-700 mb-4">📋 Urutan Eksekusi</h3>
            <ol className="space-y-3">
              {[
                "constructor() → dari dalam ke luar",
                "ngOnInit() → dari dalam ke luar",
                "ngAfterContentInit() → content projection selesai",
                "ngAfterViewInit() → sg-form terlebih dahulu",
                "ngAfterViewInit() → products setelahnya",
              ].map((step, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "Perbedaan ngAfterContentInit & ngAfterViewInit",
      icon: <Zap />,
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  C
                </div>
                <h3 className="text-2xl font-bold text-green-800">ngAfterContentInit</h3>
              </div>
              <p className="text-green-700 text-lg leading-relaxed">
                Dipanggil setelah Angular memproses content dari luar yang masuk melalui{" "}
                <code className="bg-green-200 text-green-800 px-2 py-1 rounded font-mono">&lt;ng-content&gt;</code>.
              </p>
              <div className="mt-4 bg-green-200 p-3 rounded-lg">
                <p className="text-green-800 font-medium">📝 Content Projection</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  V
                </div>
                <h3 className="text-2xl font-bold text-purple-800">ngAfterViewInit</h3>
              </div>
              <p className="text-purple-700 text-lg leading-relaxed">
                Dipanggil setelah Angular selesai merender template dan{" "}
                <code className="bg-purple-200 text-purple-800 px-2 py-1 rounded font-mono">@ViewChild</code> siap.
              </p>
              <div className="mt-4 bg-purple-200 p-3 rounded-lg">
                <p className="text-purple-800 font-medium">🎯 DOM Access</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      title: "Hook yang Sering Digunakan",
      icon: <CheckCircle />,
      content: (
        <div className="space-y-8">
          <div className="grid gap-6">
            {[
              {
                hook: "ngOnInit",
                desc: "Mengambil data dari API, inisialisasi FormGroup.",
                color: "green",
                icon: "🚀",
                usage: "Paling sering digunakan untuk setup awal",
              },
              {
                hook: "ngAfterViewInit",
                desc: "Akses elemen via ViewChild atau manipulasi DOM.",
                color: "blue",
                icon: "👀",
                usage: "Untuk interaksi dengan DOM elements",
              },
              {
                hook: "ngOnDestroy",
                desc: "Unsubscribe observables, clear interval, cleanup.",
                color: "red",
                icon: "🧹",
                usage: "Mencegah memory leaks",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`bg-gradient-to-r from-${item.color}-50 to-${item.color}-100 border border-${item.color}-200 p-6 rounded-xl shadow-lg`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold text-${item.color}-800 mb-2`}>{item.hook}</h3>
                    <p className={`text-${item.color}-700 text-lg mb-3`}>{item.desc}</p>
                    <div
                      className={`bg-${item.color}-200 text-${item.color}-800 px-3 py-1 rounded-full text-sm font-medium inline-block`}
                    >
                      {item.usage}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 7,
      title: "Async dalam Lifecycle Angular",
      icon: <LifeBuoy />,
      content: (
        <div className="space-y-8">
          <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-orange-800 mb-4">⚡ Konsep Penting</h3>
            <p className="text-xl text-orange-700 leading-relaxed">
              <strong>Urutan lifecycle hook adalah sinkron (sync),</strong> tapi isi fungsinya bisa bersifat async.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold text-gray-800 mb-4">📝 Contoh Kode</h4>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-auto">
                <pre>{`async ngOnInit() {
  const data = await this.http
    .get('api/products')
    .toPromise();
  
  this.formGroup.patchValue(data);
}`}</pre>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-red-800 mb-4">⚠️ Yang Terjadi</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="bg-red-100 text-red-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  <span className="text-red-700">ngOnInit() dipanggil</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-red-100 text-red-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  <span className="text-red-700">HTTP request dimulai</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-red-100 text-red-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  <span className="text-red-700">ngAfterViewInit() langsung dipanggil</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-red-100 text-red-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </span>
                  <span className="text-red-700">HTTP response diterima (async)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
            <p className="text-blue-800 text-lg font-medium">
              💡 <strong>Kesimpulan:</strong> Angular tidak menunggu proses async selesai sebelum melanjutkan ke
              lifecycle hook berikutnya.
            </p>
          </div>
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

  const goToSlide = (slideNumber: number) => {
    setCurrentSlide(slideNumber)
  }

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        nextSlide()
      }, 5000) // 5 seconds per slide
      return () => clearInterval(interval)
    }
  }, [isAutoPlay, currentSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        nextSlide()
      } else if (e.key === "ArrowLeft") {
        prevSlide()
      } else if (e.key === "Home") {
        goToSlide(1)
      } else if (e.key === "End") {
        goToSlide(slides.length)
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [])

  const currentSlideData = slides.find((slide) => slide.id === currentSlide)

  return (
    <div className="relative w-full h-screen bg-gray-100 overflow-hidden">
      {/* Main Slide */}
      <AnimatePresence mode="wait">
        {currentSlideData && (
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <SlideTemplate slide={currentSlideData} currentSlide={currentSlide} totalSlides={slides.length} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border">
        <Button variant="outline" size="sm" onClick={prevSlide} className="w-10 h-10 p-0">
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <div className="flex items-center gap-2">
          {slides.slice(0, slides.length).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index + 1)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index + 1 ? "bg-blue-600 w-6" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <Button variant="outline" size="sm" onClick={nextSlide} className="w-10 h-10 p-0">
          <ChevronRight className="w-4 h-4" />
        </Button>

        <div className="w-px h-6 bg-gray-300 mx-2" />

        <Button variant="outline" size="sm" onClick={() => setIsAutoPlay(!isAutoPlay)} className="w-10 h-10 p-0">
          {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </Button>

        <Button variant="outline" size="sm" onClick={() => goToSlide(1)} className="w-10 h-10 p-0">
          <RotateCcw className="w-4 h-4" />
        </Button>
      </div>

      {/* Slide Thumbnails (Optional - can be toggled) */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-2 hidden lg:block">
        {slides.slice(0, slides.length).map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(slide.id)}
            className={`block w-16 h-12 rounded border-2 transition-all ${
              currentSlide === slide.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 bg-white hover:border-gray-400"
            }`}
          >
            <div className="text-xs p-1 truncate">{slide.id}</div>
          </button>
        ))}
      </div>

      {/* Instructions */}
      <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-2 rounded text-sm">
        Use ← → keys or click controls to navigate
      </div>
    </div>
  )
}
