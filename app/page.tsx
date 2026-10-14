'use client'

import { useState } from 'react'
import { productos, Producto } from '../data/productos'

export default function Home() {
  const [search, setSearch] = useState('')

  // Número de WhatsApp del negocio
  const PHONE_NUMBER = '5493415023837'

  // Filtrado de productos por nombre o categoría
  const filteredProducts = productos.filter((p: Producto) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-600 selection:text-white">
      
      {/* HEADER & BUSCADOR */}
      <header className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-7xl font-black text-white mb-4 tracking-tighter uppercase italic">
          CALOGERO REPUESTOS
        </h1>
        <p className="text-blue-500 font-bold tracking-[0.3em] text-sm mb-8 uppercase">
          Línea Pesada - Rosario, Argentina
        </p>

        {/* BOTÓN CONTACTO */}
        <div className="mb-12">
          <a 
            href="#contacto" 
            className="inline-block bg-blue-700 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-black text-sm transition-all transform hover:scale-105 border-b-4 border-blue-900 active:border-b-0 uppercase tracking-widest shadow-lg shadow-blue-900/40"
          >
            Ir a Contacto
          </a>
        </div>

        {/* BUSCADOR */}
        <div className="max-w-2xl mx-auto relative group">
          <input
            type="text"
            placeholder="Buscar por nombre de repuesto (Ej: Turbo, Filtro...)"
            className="w-full bg-zinc-900 border-2 border-zinc-800 text-white px-6 py-4 rounded-2xl focus:outline-none focus:border-blue-600 transition-all text-base md:text-lg shadow-2xl placeholder:text-zinc-500"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>

      {/* GRID DE PRODUCTOS */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((p: Producto) => {
            // Estado por defecto: si no está explicitado `available`, asume true
            const isAvailable = p.available !== false
            
            // Generador de link de WhatsApp customizado por producto
            const customMessage = encodeURIComponent(
              `Hola! Quiero consultar por el repuesto: ${p.name}`
            )
            const wsLink = `https://wa.me/${PHONE_NUMBER}?text=${customMessage}`

            return (
              <div 
                key={p.id} 
                className="flex flex-col bg-zinc-900 rounded-[2rem] overflow-hidden border border-zinc-800 hover:border-blue-500/50 transition-all duration-300 group shadow-2xl h-full relative"
              >
                
                {/* Contenedor de Imagen */}
                <div className="h-64 bg-white flex items-center justify-center p-8 relative overflow-hidden">
                  
                  {/* BADGE DE DISPONIBILIDAD (Top Right) */}
                  <div className="absolute top-4 right-4 z-10">
                    {isAvailable ? (
                      <span className="inline-flex items-center gap-1.5 bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-md">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        Disponible
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 bg-sky-950/80 text-sky-300 border border-sky-500/40 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-md">
                        <span className="h-2 w-2 rounded-full bg-sky-400" />
                        Consultar
                      </span>
                    )}
                  </div>

                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    className="max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>

                {/* Contenido */}
                <div className="p-7 flex flex-col flex-grow">
                  <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] mb-2">
                    {p.category}
                  </span>
                  
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
                    {p.name}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2 mb-6">
                    {p.description}
                  </p>

                  {/* SECCIÓN PRECIO DIRECTO Y REFERENCIA ML */}
                  <div className="mt-auto pt-4 border-t border-zinc-800/80 mb-6">
                    {p.priceDirect ? (
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="block text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                            Venta Directa
                          </span>
                          <span className="text-2xl md:text-3xl font-black text-white tracking-tight">
                            ${p.priceDirect.toLocaleString('es-AR')}
                          </span>
                        </div>

                        {p.priceML && (
                          <div className="text-right">
                            <span className="block text-[10px] font-medium text-zinc-500 uppercase">
                              En ML
                            </span>
                            <span className="text-sm font-semibold text-zinc-500 line-through">
                              ${p.priceML.toLocaleString('es-AR')}
                            </span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-sm font-bold text-zinc-400 uppercase tracking-wider">
                        Consultar precio directo
                      </div>
                    )}
                  </div>

                  {/* BOTONES DE ACCIÓN */}
                  <div className="flex flex-col gap-2.5">
                    {/* Botón Principal: WhatsApp (Venta Directa) */}
                    <a 
                      href={wsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 active:scale-95 shadow-[0_4px_20px_-5px_rgba(16,185,129,0.3)]"
                    >
                      Comprar Directo (WSP)
                    </a>

                    {/* Botón Secundario: Mercado Libre */}
                    {p.link && (
                      <a 
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-wider transition-all border border-zinc-700/60"
                      >
                        Ver en Mercado Libre
                      </a>
                    )}
                  </div>

                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* SECCIÓN DE CONTACTO */}
      <section id="contacto" className="mt-20 border-t border-blue-900/30 pt-16 pb-20 bg-zinc-900/50 rounded-t-3xl text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-blue-500 mb-6 uppercase tracking-tighter">
            ¿Dudas con un repuesto?
          </h2>
          <p className="text-gray-300 mb-10 text-lg max-w-xl mx-auto">
            Atención personalizada para flotas y talleres. <br/> 
            Envíos a todo el país desde Rosario.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href={`https://wa.me/${PHONE_NUMBER}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-4 rounded-xl font-black text-lg transition-all shadow-lg shadow-emerald-900/30"
            >
              WHATSAPP DIRECTO
            </a>
            <a 
              href="https://maps.app.goo.gl/X8XPVG5VBdh7WMC1A" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-zinc-800 hover:bg-zinc-700 text-white px-10 py-4 rounded-xl font-black text-lg transition-all border border-blue-500/50"
            >
              NUESTRO LOCAL
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}