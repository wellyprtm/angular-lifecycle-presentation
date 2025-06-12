"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useEffect } from "react"
import { CheckCircle, Code2, Eye, Zap, Loader2, MessageSquareHeart, TableProperties, LifeBuoy } from "lucide-react"

const Slide = ({ title, icon, children }: { title: string; icon?: React.ReactNode; children: React.ReactNode }) => (
  <motion.div
    className="min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center gap-4 mb-6">
      {icon && <div className="text-4xl text-blue-600">{icon}</div>}
      <h1 className="text-4xl font-bold text-blue-800 text-center">{title}</h1>
    </div>
    <Card className="max-w-4xl bg-white/90 backdrop-blur-sm text-gray-800 shadow-xl rounded-2xl border-none">
      <CardContent className="p-8 text-lg space-y-6 leading-relaxed">{children}</CardContent>
    </Card>
  </motion.div>
)

export default function AngularLifecyclePresentation() {
  useEffect(() => {
    document.body.className = "bg-gradient-to-br from-blue-50 to-indigo-100 font-sans"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <div className="overflow-x-hidden">
      <Slide title="Apa Itu Lifecycle di Angular?" icon={<Code2 />}>
        <p>
          <strong>Lifecycle Angular</strong> adalah urutan kejadian mulai dari saat komponen dibuat, ditampilkan di
          layar, diperbarui karena perubahan data, hingga akhirnya dihancurkan.
        </p>
        <p>
          Angular menyediakan <strong>lifecycle hooks</strong> untuk memungkinkan kita menjalankan logika tertentu di
          setiap tahap tersebut, seperti mengambil data, akses DOM, hingga membersihkan resource.
        </p>
      </Slide>

      <Slide title="Urutan Lifecycle Hooks" icon={<Loader2 />}>
        <div className="space-y-4">
          {[
            ["🔧", "constructor()", "Inisialisasi class"],
            ["🌀", "ngOnChanges()", "@Input berubah"],
            ["🚀", "ngOnInit()", "Inisialisasi data"],
            ["📥", "ngAfterContentInit()", "Content projection siap"],
            ["👁️", "ngAfterContentChecked()", "Content dicek ulang"],
            ["👀", "ngAfterViewInit()", "View sudah dirender"],
            ["👁️", "ngAfterViewChecked()", "View dicek ulang"],
            ["🧹", "ngOnDestroy()", "Bersihkan sebelum hancur"],
          ].map(([emoji, hook, desc], i) => (
            <motion.div
              key={i}
              className="bg-blue-50 border border-blue-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="text-2xl mr-3">{emoji}</span>
              <strong className="text-blue-700">{hook}</strong>
              <span className="text-gray-600"> – {desc}</span>
            </motion.div>
          ))}
        </div>
      </Slide>

      <Slide title="Tabel Detail Lifecycle Hooks" icon={<TableProperties />}>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-300 rounded-xl overflow-hidden text-sm bg-white">
            <thead className="bg-blue-100">
              <tr>
                <th className="p-4 font-semibold text-blue-800">Hook</th>
                <th className="p-4 font-semibold text-blue-800">Kapan Dipanggil</th>
                <th className="p-4 font-semibold text-blue-800">Fungsi Umum</th>
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
                <tr key={i} className="border-t hover:bg-blue-25 transition-colors">
                  <td className="p-4 font-mono text-blue-600 font-medium">{hook}</td>
                  <td className="p-4">{when}</td>
                  <td className="p-4">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Slide>

      <Slide title="Flow ngOnInit & ngAfterViewInit" icon={<Eye />}>
        <p>Untuk memahami urutan eksekusi, perhatikan urutan ini dari contoh struktur HTML:</p>
        <div className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-auto text-sm font-mono">
          <pre>{`<div class="sg-content">
  <sg-table>
    <sg-form>
      <sg-text-input />
    </sg-form>
  </sg-table>
</div>`}</pre>
        </div>
        <p>
          <strong>Urutan eksekusi:</strong>
        </p>
        <ol className="list-decimal list-inside space-y-3 bg-blue-50 p-4 rounded-lg">
          <li>
            <code className="bg-gray-200 px-2 py-1 rounded">constructor()</code> → dari dalam ke luar
          </li>
          <li>
            <code className="bg-gray-200 px-2 py-1 rounded">ngOnInit()</code> → dari dalam ke luar
          </li>
          <li>
            <code className="bg-gray-200 px-2 py-1 rounded">ngAfterContentInit()</code> → saat content projection
            selesai
          </li>
          <li>
            <code className="bg-gray-200 px-2 py-1 rounded">ngAfterViewInit()</code> → setelah view DOM sepenuhnya
            render
          </li>
        </ol>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-yellow-800">
            <strong>Catatan:</strong> Jika ada proses async di <code>ngOnInit()</code>, seperti{" "}
            <code>await http.get()</code>, Angular tetap lanjut ke <code>ngAfterViewInit()</code>. Ini karena urutan
            hooks bersifat <strong>sync</strong>, tapi isi di dalam hook bisa <strong>async</strong>.
          </p>
        </div>
      </Slide>

      <Slide title="Perbedaan ngAfterContentInit & ngAfterViewInit" icon={<Zap />}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
            <h3 className="font-bold text-green-800 mb-3">ngAfterContentInit</h3>
            <p className="text-green-700">
              Dipanggil setelah Angular memproses content dari luar yang masuk melalui{" "}
              <code className="bg-green-100 px-2 py-1 rounded">&lt;ng-content&gt;</code>.
            </p>
          </div>
          <div className="bg-purple-50 border border-purple-200 p-6 rounded-xl">
            <h3 className="font-bold text-purple-800 mb-3">ngAfterViewInit</h3>
            <p className="text-purple-700">
              Dipanggil setelah Angular selesai merender template dan{" "}
              <code className="bg-purple-100 px-2 py-1 rounded">@ViewChild</code> siap.
            </p>
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mt-4">
          <p className="text-blue-800">
            <strong>Tips:</strong> Jika tidak menggunakan <code>&lt;ng-content&gt;</code>, maka{" "}
            <code>ngAfterContentInit</code> tetap dipanggil tapi isinya tidak berguna.
          </p>
        </div>
      </Slide>

      <Slide title="Hook yang Sering Digunakan" icon={<CheckCircle />}>
        <div className="space-y-4">
          {[
            {
              hook: "ngOnInit",
              desc: "Mengambil data dari API, inisialisasi FormGroup.",
              color: "green",
            },
            {
              hook: "ngAfterViewInit",
              desc: "Akses elemen via ViewChild atau manipulasi DOM.",
              color: "blue",
            },
            {
              hook: "ngOnDestroy",
              desc: "Unsubscribe observables, clear interval, cleanup.",
              color: "red",
            },
          ].map(({ hook, desc, color }, i) => (
            <motion.div
              key={i}
              className={`bg-${color}-50 border border-${color}-200 p-4 rounded-xl`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              <strong className={`text-${color}-700`}>{hook}</strong>
              <span className="text-gray-700"> – {desc}</span>
            </motion.div>
          ))}
        </div>
      </Slide>

      <Slide title="Async dalam Lifecycle Angular" icon={<LifeBuoy />}>
        <p>
          <strong>Urutan lifecycle hook adalah sinkron (sync),</strong> tapi isi fungsinya bisa bersifat async.
        </p>
        <p className="mb-4">Contoh:</p>
        <div className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-auto text-sm font-mono mb-4">
          <pre>{`async ngOnInit() {
  const data = await this.http.get('api/products').toPromise();
  this.formGroup.patchValue(data);
}`}</pre>
        </div>
        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
          <p className="text-orange-800">
            <strong>Penting:</strong> Angular tetap lanjut ke <code>ngAfterViewInit()</code> tanpa menunggu{" "}
            <code>await</code> selesai.
          </p>
        </div>
      </Slide>

      <Slide title="Diskusi & Tanya Jawab" icon={<MessageSquareHeart />}>
        <div className="text-center space-y-6">
          <motion.div
            className="text-6xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            ✨
          </motion.div>
          <p className="text-xl">Ada pertanyaan seputar lifecycle hooks?</p>
          <p className="text-lg text-gray-600">Yuk bahas bareng!</p>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
            <p className="text-blue-800 font-medium">💡 Siapkan studi kasus / contoh penggunaanmu agar makin paham!</p>
          </div>
        </div>
      </Slide>
    </div>
  )
}
