"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Modern slide template with v0-style design
const SlideTemplate = ({
  slide,
  currentSlide,
  totalSlides,
}: {
  slide: any
  currentSlide: number
  totalSlides: number
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.05 }}
    transition={{ duration: 0.3 }}
    className="w-full h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col"
  >
    {/* Modern Header */}
    <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            {slide.icon}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">{slide.title}</h1>
            <p className="text-sm text-slate-500">Angular Lifecycle Hooks</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded-full font-medium">
            {currentSlide} of {totalSlides}
          </div>
          <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
              style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>

    {/* Content Area with bottom margin for navigation */}
    <div className="flex-1 p-8 overflow-auto pb-48">
      <div className="max-w-7xl mx-auto h-full flex items-start justify-center mb-40">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="w-full pt-8 pb-24"
        >
          {slide.content}
        </motion.div>
      </div>
    </div>
  </motion.div>
)

// Modern card component
const ModernCard = ({ children, className = "", delay = 0 }: any) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay, duration: 0.4 }}
    className={`bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
)

// Hook item with modern styling
const HookItem = ({ emoji, hook, desc, index, color }: any) => {
  const colors = {
    red: "from-red-500 to-pink-500",
    orange: "from-orange-500 to-red-500",
    yellow: "from-yellow-500 to-orange-500",
    green: "from-green-500 to-emerald-500",
    blue: "from-blue-500 to-cyan-500",
    indigo: "from-indigo-500 to-blue-500",
    purple: "from-purple-500 to-indigo-500",
    pink: "from-pink-500 to-purple-500",
  }

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group"
    >
      <ModernCard className="p-6 hover:scale-[1.02] cursor-pointer">
        <div className="flex items-center gap-4">
          <div
            className={`w-16 h-16 bg-gradient-to-br ${colors[color]} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}
          >
            {emoji}
          </div>
          <div className="flex-1">
            <code className="text-lg font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-lg">{hook}</code>
            <p className="text-slate-600 mt-2 leading-relaxed">{desc}</p>
          </div>
          <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-sm font-bold text-slate-600">
            {index + 1}
          </div>
        </div>
      </ModernCard>
    </motion.div>
  )
}

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [isAutoPlay, setIsAutoPlay] = useState(false)

  const slides = [
    {
      id: 1,
      title: "Angular Lifecycle",
      icon: "🚀",
      content: (
        <div className="text-center space-y-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-8xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Angular Lifecycle
            </h1>
            <p className="text-3xl text-slate-600 font-light max-w-4xl mx-auto leading-relaxed">
              Understanding Component Lifecycle Hooks
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center space-x-8 text-6xl"
          >
            <motion.span whileHover={{ scale: 1.2, rotate: 10 }} className="cursor-pointer">
              ⚡
            </motion.span>
            <motion.span whileHover={{ scale: 1.2, rotate: -10 }} className="cursor-pointer">
              🔄
            </motion.span>
            <motion.span whileHover={{ scale: 1.2, rotate: 10 }} className="cursor-pointer">
              🎯
            </motion.span>
          </motion.div>

          <ModernCard className="p-8 max-w-2xl mx-auto" delay={0.6}>
            <p className="text-xl text-slate-700 leading-relaxed">
              <strong className="text-blue-600">Lifecycle Angular</strong> adalah urutan kejadian mulai dari saat
              komponen dibuat, ditampilkan di layar, diperbarui karena perubahan data, hingga akhirnya dihancurkan.
            </p>
          </ModernCard>
        </div>
      ),
    },
    {
      id: 2,
      title: "Urutan Lifecycle Hooks",
      icon: "🔄",
      content: (
        <div className="space-y-8 mt-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-slate-800 mb-4">Urutan Lifecycle Hooks</h2>
            <p className="text-xl text-slate-600">Delapan tahap utama dalam siklus hidup komponen Angular</p>
          </div>

          <div className="grid gap-4 max-w-5xl mx-auto">
            {[
              ["🔧", "constructor()", "Inisialisasi class", "red"],
              ["🌀", "ngOnChanges()", "@Input berubah", "orange"],
              ["🚀", "ngOnInit()", "Inisialisasi data", "yellow"],
              ["📥", "ngAfterContentInit()", "Content projection siap", "green"],
              ["👁️", "ngAfterContentChecked()", "Content dicek ulang", "blue"],
              ["👀", "ngAfterViewInit()", "View sudah dirender", "indigo"],
              ["👁️", "ngAfterViewChecked()", "View dicek ulang", "purple"],
              ["🧹", "ngOnDestroy()", "Bersihkan sebelum hancur", "pink"],
            ].map(([emoji, hook, desc, color], i) => (
              <HookItem key={i} emoji={emoji} hook={hook} desc={desc} index={i} color={color} />
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Tabel Detail Lifecycle Hooks",
      icon: "📊",
      content: (
        <div className="space-y-8 mt-8">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold text-slate-800 mb-4">Detail Lifecycle Hooks</h2>
            <p className="text-xl text-slate-600">Kapan dipanggil dan fungsi utamanya</p>
          </div>

          <ModernCard className="overflow-hidden max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <th className="p-6 text-left font-bold text-lg">Hook</th>
                    <th className="p-6 text-left font-bold text-lg">Kapan Dipanggil</th>
                    <th className="p-6 text-left font-bold text-lg">Fungsi Umum</th>
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
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className={`${i % 2 === 0 ? "bg-slate-50" : "bg-white"} hover:bg-blue-50 transition-colors`}
                    >
                      <td className="p-6">
                        <code className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-lg font-mono font-bold">
                          {hook}
                        </code>
                      </td>
                      <td className="p-6 text-slate-700 font-medium">{when}</td>
                      <td className="p-6 text-slate-600">{use}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ModernCard>
        </div>
      ),
    },
    {
      id: 4,
      title: "Flow ngOnInit & ngAfterViewInit",
      icon: "🔀",
      content: (
        <div className="space-y-8 max-w-6xl mx-auto mt-8">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold text-slate-800 mb-4">Flow Execution</h2>
            <p className="text-xl text-slate-600">Urutan eksekusi dari contoh struktur HTML</p>
          </div>

          <ModernCard className="p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Contoh Struktur HTML</h3>
            <div className="bg-slate-900 text-green-400 p-6 rounded-xl font-mono text-sm overflow-auto shadow-inner">
              <pre>{`<div class="sg-content">
  <sg-table>
    <sg-form>
      <sg-text-input />
    </sg-form>
  </sg-table>
</div>`}</pre>
            </div>
          </ModernCard>

          <div className="grid md:grid-cols-2 gap-8">
            {/* ngOnInit Flow */}
            <ModernCard className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
              <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                ngOnInit() Flow
              </h3>
              <div className="space-y-4">
                {[
                  {
                    component: "sg-form",
                    desc: "Inisialisasi FormGroup, default values",
                    detail:
                      "Komponen form di-inisialisasi terlebih dahulu. Biasanya berisi pembuatan FormGroup, set default value, dll.",
                  },
                  {
                    component: "sg-table",
                    desc: "Konfigurasi header, persiapan data",
                    detail:
                      "Setelah sg-form, komponen sg-table mulai inisialisasi. Misalnya konfigurasi header, persiapan pemanggilan data jika queryOnInit = true.",
                  },
                  {
                    component: "Parent Component",
                    desc: "Logika level atas, @ViewChild references",
                    detail:
                      "Terakhir, komponen induk (product.component.ts) menjalankan ngOnInit() untuk menyiapkan logika di level atas, atau menyimpan referensi child via @ViewChild.",
                  },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="bg-white/60 p-4 rounded-xl border border-blue-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-blue-800 mb-1">{step.component}</h4>
                        <p className="text-blue-700 text-sm mb-2">{step.desc}</p>
                        <p className="text-blue-600 text-xs leading-relaxed">{step.detail}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ModernCard>

            {/* ngAfterViewInit Flow */}
            <ModernCard className="p-8 bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
              <h3 className="text-2xl font-bold text-purple-800 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                ngAfterViewInit() Flow
              </h3>
              <div className="space-y-4">
                {[
                  {
                    component: "sg-form",
                    desc: "Akses DOM elements, @ViewChild form",
                    detail:
                      "Setelah view semua elemen form dirender (input, date, dsb), Angular memanggil hook ini. Di sini kita bisa akses DOM atau @ViewChild.",
                  },
                  {
                    component: "sg-table",
                    desc: "Akses ViewChild table elements",
                    detail:
                      "Setelah semua content sg-table (termasuk sg-form di dalamnya) dirender, maka hook ini akan dipanggil. Cocok untuk mengakses elemen ViewChild di table.",
                  },
                  {
                    component: "Parent Component",
                    desc: "Semua child sudah siap secara visual",
                    detail:
                      "Terakhir, parent component menjalankan hook ini. Saat ini semua anak sudah siap secara visual (DOM), termasuk sg-table dan sg-form.",
                  },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 + 0.3 }}
                    className="bg-white/60 p-4 rounded-xl border border-purple-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-purple-800 mb-1">{step.component}</h4>
                        <p className="text-purple-700 text-sm mb-2">{step.desc}</p>
                        <p className="text-purple-600 text-xs leading-relaxed">{step.detail}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ModernCard>
          </div>

          <ModernCard className="p-6 border-l-4 border-yellow-400 bg-gradient-to-r from-yellow-50 to-orange-50">
            <p className="text-yellow-800 font-medium">
              <strong>⚠️ Catatan:</strong> Jika ada proses async di{" "}
              <code className="bg-yellow-200 px-2 py-1 rounded">ngOnInit()</code>, Angular tetap lanjut ke{" "}
              <code className="bg-yellow-200 px-2 py-1 rounded">ngAfterViewInit()</code>. Urutan hooks bersifat{" "}
              <strong>sync</strong>, tapi isi di dalam hook bisa <strong>async</strong>.
            </p>
          </ModernCard>
        </div>
      ),
    },
    {
      id: 5,
      title: "Perbedaan Content vs View Init",
      icon: "⚖️",
      content: (
        <div className="space-y-8 max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold text-slate-800 mb-4">Content vs View Init</h2>
            <p className="text-xl text-slate-600">Memahami perbedaan kedua lifecycle hook ini</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <ModernCard className="p-8 h-full bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg">
                    C
                  </div>
                  <h3 className="text-3xl font-bold text-green-800">ngAfterContentInit</h3>
                </div>
                <p className="text-green-700 text-lg leading-relaxed mb-4">
                  Dipanggil setelah Angular memproses content dari luar yang masuk melalui{" "}
                  <code className="bg-green-200 text-green-800 px-2 py-1 rounded font-mono">&lt;ng-content&gt;</code>.
                </p>
                <div className="bg-green-200 p-4 rounded-xl">
                  <p className="text-green-800 font-bold">📝 Content Projection</p>
                  <p className="text-green-700 text-sm mt-1">Untuk konten yang diproyeksikan dari parent</p>
                </div>
              </ModernCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ModernCard className="p-8 h-full bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg">
                    V
                  </div>
                  <h3 className="text-3xl font-bold text-purple-800">ngAfterViewInit</h3>
                </div>
                <p className="text-purple-700 text-lg leading-relaxed mb-4">
                  Dipanggil setelah Angular selesai merender template dan{" "}
                  <code className="bg-purple-200 text-purple-800 px-2 py-1 rounded font-mono">@ViewChild</code> siap.
                </p>
                <div className="bg-purple-200 p-4 rounded-xl">
                  <p className="text-purple-800 font-bold">🎯 DOM Access</p>
                  <p className="text-purple-700 text-sm mt-1">Untuk akses dan manipulasi DOM elements</p>
                </div>
              </ModernCard>
            </motion.div>
          </div>

          <ModernCard className="p-6 border-l-4 border-blue-400 bg-gradient-to-r from-blue-50 to-cyan-50">
            <p className="text-blue-800 text-lg font-medium">
              💡 <strong>Tips:</strong> Jika tidak menggunakan{" "}
              <code className="bg-blue-200 px-2 py-1 rounded">&lt;ng-content&gt;</code>, maka{" "}
              <code className="bg-blue-200 px-2 py-1 rounded">ngAfterContentInit</code> tetap dipanggil tapi isinya
              tidak berguna.
            </p>
          </ModernCard>
        </div>
      ),
    },
    {
      id: 6,
      title: "Hook yang Sering Digunakan",
      icon: "⭐",
      content: (
        <div className="space-y-8 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold text-slate-800 mb-4">Most Used Hooks</h2>
            <p className="text-xl text-slate-600">Tiga lifecycle hook yang paling sering digunakan</p>
          </div>

          <div className="space-y-6">
            {[
              {
                hook: "ngOnInit",
                desc: "Mengambil data dari API, inisialisasi FormGroup.",
                icon: "🚀",
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-50 to-emerald-50",
                usage: "Paling sering digunakan untuk setup awal",
              },
              {
                hook: "ngAfterViewInit",
                desc: "Akses elemen via ViewChild atau manipulasi DOM.",
                icon: "👀",
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50",
                usage: "Untuk interaksi dengan DOM elements",
              },
              {
                hook: "ngOnDestroy",
                desc: "Unsubscribe observables, clear interval, cleanup.",
                icon: "🧹",
                color: "from-red-500 to-pink-500",
                bgColor: "from-red-50 to-pink-50",
                usage: "Mencegah memory leaks",
              },
            ].map(({ hook, desc, icon, color, bgColor, usage }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
              >
                <ModernCard className={`p-8 bg-gradient-to-r ${bgColor} hover:scale-[1.02] cursor-pointer`}>
                  <div className="flex items-start gap-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}
                    >
                      {icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-slate-800 mb-3">{hook}</h3>
                      <p className="text-slate-700 text-lg mb-4 leading-relaxed">{desc}</p>
                      <div className="bg-white/60 px-4 py-2 rounded-lg inline-block">
                        <p className="text-slate-600 font-medium text-sm">{usage}</p>
                      </div>
                    </div>
                  </div>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 7,
      title: "Async dalam Lifecycle",
      icon: "⚡",
      content: (
        <div className="space-y-8 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold text-slate-800 mb-4">Async Operations</h2>
            <p className="text-xl text-slate-600">Memahami perilaku async dalam lifecycle hooks</p>
          </div>

          <ModernCard className="p-8 border-l-4 border-orange-400 bg-gradient-to-r from-orange-50 to-yellow-50">
            <h3 className="text-3xl font-bold text-orange-800 mb-4">⚡ Konsep Penting</h3>
            <p className="text-xl text-orange-700 leading-relaxed">
              <strong>Urutan lifecycle hook adalah sinkron (sync),</strong> tapi isi fungsinya bisa bersifat async.
            </p>
          </ModernCard>

          <div className="grid md:grid-cols-2 gap-8">
            <ModernCard className="p-8">
              <h4 className="text-2xl font-bold text-slate-800 mb-6">📝 Contoh Kode</h4>
              <div className="bg-slate-900 text-green-400 p-6 rounded-xl font-mono text-sm overflow-auto shadow-inner">
                <pre>{`async ngOnInit() {
  const data = await this.http
    .get('api/products')
    .toPromise();
  
  this.formGroup.patchValue(data);
}`}</pre>
              </div>
            </ModernCard>

            <ModernCard className="p-8 bg-gradient-to-br from-red-50 to-pink-50 border-red-200">
              <h4 className="text-2xl font-bold text-red-800 mb-6">⚠️ Yang Terjadi</h4>
              <div className="space-y-4">
                {[
                  "ngOnInit() dipanggil",
                  "HTTP request dimulai",
                  "ngAfterViewInit() langsung dipanggil",
                  "HTTP response diterima (async)",
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </div>
                    <span className="text-red-700 font-medium">{step}</span>
                  </motion.div>
                ))}
              </div>
            </ModernCard>
          </div>

          <ModernCard className="p-6 border-l-4 border-blue-400 bg-gradient-to-r from-blue-50 to-cyan-50">
            <p className="text-blue-800 text-lg font-medium">
              💡 <strong>Kesimpulan:</strong> Angular tidak menunggu proses async selesai sebelum melanjutkan ke
              lifecycle hook berikutnya.
            </p>
          </ModernCard>
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
      const interval = setInterval(nextSlide, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlay])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") nextSlide()
      else if (e.key === "ArrowLeft") prevSlide()
      else if (e.key === "Home") goToSlide(1)
      else if (e.key === "End") goToSlide(slides.length)
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [])

  const currentSlideData = slides.find((slide) => slide.id === currentSlide)

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-slate-100 to-blue-100 overflow-hidden">
      {/* Main Slide with AnimatePresence for smooth transitions */}
      <AnimatePresence mode="wait">
        {currentSlideData && (
          <SlideTemplate
            key={currentSlide}
            slide={currentSlideData}
            currentSlide={currentSlide}
            totalSlides={slides.length}
          />
        )}
      </AnimatePresence>

      {/* Fixed Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-slate-200 shadow-2xl z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-between"
          >
            {/* Left: Previous Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold shadow-lg hover:shadow-xl transition-all"
            >
              <span className="text-lg">←</span>
              <span className="hidden sm:block">Previous</span>
            </motion.button>

            {/* Center: Slide Indicators */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                {slides.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => goToSlide(index + 1)}
                    className={`transition-all duration-300 rounded-full ${
                      currentSlide === index + 1
                        ? "w-10 h-4 bg-gradient-to-r from-blue-500 to-purple-600"
                        : "w-4 h-4 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

              {/* Slide Counter */}
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full">
                <span className="text-sm font-medium text-slate-600">
                  {currentSlide} / {slides.length}
                </span>
              </div>
            </div>

            {/* Right: Control Buttons */}
            <div className="flex items-center gap-3">
              {/* Auto-play Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold shadow-lg transition-all ${
                  isAutoPlay
                    ? "bg-gradient-to-r from-red-500 to-pink-600 text-white"
                    : "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                }`}
                title={isAutoPlay ? "Pause Auto-play" : "Start Auto-play"}
              >
                {isAutoPlay ? "⏸" : "▶"}
              </motion.button>

              {/* Reset Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goToSlide(1)}
                className="w-12 h-12 rounded-xl bg-gradient-to-r from-slate-500 to-slate-600 text-white flex items-center justify-center font-bold shadow-lg hover:shadow-xl transition-all"
                title="Go to First Slide"
              >
                ↺
              </motion.button>

              {/* Next Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextSlide}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold shadow-lg hover:shadow-xl transition-all"
              >
                <span className="hidden sm:block">Next</span>
                <span className="text-lg">→</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide Thumbnails - Adjusted position */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 space-y-3 hidden lg:block"
      >
        {slides.map((slide) => (
          <motion.button
            key={slide.id}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => goToSlide(slide.id)}
            className={`block w-20 h-16 rounded-xl border-2 transition-all shadow-lg ${
              currentSlide === slide.id
                ? "border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 shadow-blue-200"
                : "border-slate-300 bg-white/80 hover:border-slate-400 hover:shadow-xl"
            }`}
          >
            <div className="text-2xl mb-1">{slide.icon}</div>
            <div className="text-xs font-bold text-slate-600">{slide.id}</div>
          </motion.button>
        ))}
      </motion.div>

      {/* Instructions - Adjusted position */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute top-6 right-6 bg-black/70 text-white px-4 py-2 rounded-xl text-sm backdrop-blur-sm"
      >
        Use ← → keys or navigation bar to navigate
      </motion.div>
    </div>
  )
}
