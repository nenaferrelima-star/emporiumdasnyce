import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Search, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  Filter,
  Sparkles,
  Heart,
  ExternalLink,
  Menu,
  X
} from 'lucide-react';
import { PRODUCTS, CATEGORIES } from './constants';
import { Category, Product } from './types';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'Todos'>('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-brand-secondary/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white">
                <ShoppingBag size={20} />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-stone-800">
                EmporiumDasnyce
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#vitrine" className="text-sm font-medium text-stone-600 hover:text-brand-primary transition-colors">Vitrine</a>
              <a href="#sobre" className="text-sm font-medium text-stone-600 hover:text-brand-primary transition-colors">Sobre</a>
              <a href="#seguranca" className="text-sm font-medium text-stone-600 hover:text-brand-primary transition-colors">Segurança</a>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Buscar achadinho..."
                  className="pl-10 pr-4 py-2 bg-stone-100 border-none rounded-full text-sm focus:ring-2 focus:ring-brand-primary transition-all w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-stone-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-stone-200 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-4">
                <a href="#vitrine" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium text-stone-800">Vitrine</a>
                <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium text-stone-800">Sobre</a>
                <a href="#seguranca" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium text-stone-800">Segurança</a>
                <div className="relative pt-2">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Buscar achadinho..."
                    className="w-full pl-10 pr-4 py-3 bg-stone-100 border-none rounded-xl text-base"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
                  Curadoria Exclusiva
                </span>
                <h1 className="font-serif text-5xl lg:text-7xl font-bold text-stone-900 leading-[1.1] mb-6">
                  EmporiumDasnyce <br />
                  <span className="italic text-brand-primary font-light">para facilitar sua vida</span>
                </h1>
                <p className="text-xl text-stone-600 leading-relaxed mb-10">
                  Sabe quando você encontra um produto simples, mas que muda sua rotina? 
                  É exatamente isso que você vai encontrar aqui. Praticidade, bons preços e descobertas úteis.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#vitrine" 
                    className="px-8 py-4 bg-brand-primary text-white rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg shadow-brand-primary/20 flex items-center gap-2"
                  >
                    Explorar Vitrine <ArrowRight size={20} />
                  </a>
                  <a 
                    href="#sobre" 
                    className="px-8 py-4 bg-white text-stone-800 border border-stone-200 rounded-full font-semibold text-lg hover:bg-stone-50 transition-all"
                  >
                    Saiba Mais
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-primary rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/2 w-96 h-96 bg-stone-300 rounded-full blur-3xl" />
          </div>
        </section>

        {/* Features / Trust Section */}
        <section id="sobre" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="order-2 lg:order-1">
                <h2 className="font-serif text-4xl lg:text-5xl font-bold text-stone-900 mb-8">Curadoria que economiza seu tempo (e seu dinheiro)</h2>
                <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                  <p>
                    Nós fazemos o trabalho pesado por você. Garimpamos os melhores produtos diretamente de grandes plataformas confiáveis como 
                    <span className="font-semibold text-stone-800"> Shopee, Amazon, Mercado Livre e Magazine Luiza</span>, 
                    e reunimos aqui apenas os achadinhos que realmente valem a pena.
                  </p>
                  <p>
                    Nada de ficar horas rolando tela. Aqui, você chega, vê, gosta e compra.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {[
                      'Utilidades para casa',
                      'Organização e praticidade',
                      'Beleza e autocuidado',
                      'Acessórios e presentes',
                      'Achadinhos virais',
                      'Produtos funcionais'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-brand-primary rounded-full" />
                        <span className="text-sm font-medium text-stone-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl">
                  <img 
                    src="https://picsum.photos/seed/curation/800/1000" 
                    alt="Curadoria EmporiumDasnyce" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-brand-primary text-white p-8 rounded-3xl shadow-xl max-w-xs">
                  <p className="font-serif text-xl italic">"Como eu não comprei isso antes?"</p>
                  <p className="text-sm mt-2 opacity-80">— O sentimento de quem descobre nossos achadinhos</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                  <Clock size={32} />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Economize Tempo</h3>
                <p className="text-stone-600">
                  Nós fazemos o trabalho pesado. Garimpamos os melhores produtos para você não perder horas rolando telas.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Compra Segura</h3>
                <p className="text-stone-600">
                  Indicações honestas de plataformas confiáveis como Amazon, Shopee e Mercado Livre. Pagamento 100% protegido.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Utilidade Real</h3>
                <p className="text-stone-600">
                  Cada item é escolhido com olhar atento, pensado para resolver pequenos problemas do dia a dia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vitrine / Product Grid */}
        <section id="vitrine" className="py-24 bg-brand-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <div>
                <h2 className="font-serif text-4xl lg:text-5xl font-bold text-stone-900 mb-4">Nossa Vitrine</h2>
                <p className="text-lg text-stone-600 max-w-2xl">
                  Explore nossa seleção de achadinhos que unem praticidade, charme e aquele precinho que a gente ama.
                </p>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => setSelectedCategory('Todos')}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === 'Todos' ? 'bg-brand-primary text-white shadow-md' : 'bg-white text-stone-600 hover:bg-stone-100'}`}
                >
                  Todos
                </button>
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat ? 'bg-brand-primary text-white shadow-md' : 'bg-white text-stone-600 hover:bg-stone-100'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white rounded-3xl overflow-hidden border border-stone-100 hover:shadow-xl hover:shadow-stone-200/50 transition-all flex flex-col h-full"
                  >
                    <div className="relative aspect-square overflow-hidden bg-stone-100">
                      <img 
                        src={product.imageUrl} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      {product.isViral && (
                        <div className="absolute top-4 left-4 px-3 py-1 bg-amber-400 text-amber-950 text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1">
                          <Sparkles size={12} /> Viral
                        </div>
                      )}
                      <div className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-stone-400 hover:text-red-500 transition-colors cursor-pointer">
                        <Heart size={18} />
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{product.category}</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/5 px-2 py-0.5 rounded">{product.platform}</span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-stone-900 mb-2 group-hover:text-brand-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-grow">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-stone-50">
                        <div className="flex flex-col">
                          <span className="text-xs text-stone-400">A partir de</span>
                          <span className="text-2xl font-bold text-stone-900">R$ {product.price.toFixed(2).replace('.', ',')}</span>
                        </div>
                        <a 
                          href={product.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-stone-900 text-white rounded-full flex items-center justify-center hover:bg-brand-primary transition-all group/btn"
                        >
                          <ExternalLink size={20} className="group-hover/btn:scale-110 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-20 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-stone-100 rounded-full text-stone-400 mb-6">
                  <Filter size={32} />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">Nenhum achadinho encontrado</h3>
                <p className="text-stone-500">Tente mudar os filtros ou a sua busca.</p>
                <button 
                  onClick={() => {setSelectedCategory('Todos'); setSearchQuery('');}}
                  className="mt-6 text-brand-primary font-semibold hover:underline"
                >
                  Limpar todos os filtros
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Security Section */}
        <section id="seguranca" className="py-24 bg-stone-900 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-8">Compra segura e sem complicação</h2>
                <p className="text-xl text-stone-400 mb-10 leading-relaxed">
                  Ao escolher seu produto, você será direcionado diretamente para a plataforma oficial onde ele é vendido. 
                  Isso garante total segurança na sua jornada de compra.
                </p>
                
                <div className="space-y-6">
                  {[
                    'Pagamento protegido pela plataforma oficial',
                    'Entrega garantida com rastreamento',
                    'Política de troca e devolução da própria loja',
                    'Indicações honestas e curadoria real'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-6 h-6 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-lg text-stone-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-stone-800 rounded-[40px] p-8 flex flex-col justify-center border border-stone-700">
                  <div className="mb-8">
                    <span className="text-stone-500 text-sm font-bold uppercase tracking-widest mb-4 block">Por que confiar?</span>
                    <h3 className="font-serif text-3xl font-bold">Não vendemos promessas. <br /><span className="text-brand-primary italic">Vendemos indicações honestas.</span></h3>
                  </div>
                  <p className="text-stone-400 text-lg leading-relaxed">
                    Cada achadinho é escolhido pensando em utilidade real, boa avaliação, preço justo e funcionalidade no dia a dia. 
                    É como receber indicação de alguém que testou, gostou e faria a mesma compra.
                  </p>
                </div>
                {/* Decorative circle */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-4xl lg:text-6xl font-bold text-stone-900 mb-8">Pronta para encontrar seu próximo achadinho favorito?</h2>
            <p className="text-xl text-stone-600 mb-12 max-w-2xl mx-auto">
              Explore a vitrine do EmporiumDasnyce e descubra produtos que unem praticidade, charme e aquele precinho que dá vontade de levar mais de um.
            </p>
            <a 
              href="#vitrine" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-brand-primary text-white rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-brand-primary/30"
            >
              Começar a Explorar <ShoppingBag size={24} />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-50 border-t border-stone-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center text-white">
                  <ShoppingBag size={16} />
                </div>
                <span className="font-serif text-xl font-bold tracking-tight text-stone-800">
                  EmporiumDasnyce
                </span>
              </div>
              <p className="text-stone-500 max-w-sm leading-relaxed">
                Curadoria especializada em produtos úteis e práticos que facilitam sua rotina. 
                Achadinhos das melhores plataformas com segurança garantida.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-stone-900 mb-6">Links Rápidos</h4>
              <ul className="space-y-4 text-stone-500">
                <li><a href="#vitrine" className="hover:text-brand-primary transition-colors">Vitrine</a></li>
                <li><a href="#sobre" className="hover:text-brand-primary transition-colors">Sobre Nós</a></li>
                <li><a href="#seguranca" className="hover:text-brand-primary transition-colors">Segurança</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-stone-900 mb-6">Plataformas</h4>
              <ul className="space-y-4 text-stone-500">
                <li><a href="https://shopee.com.br" target="_blank" className="hover:text-brand-primary transition-colors">Shopee</a></li>
                <li><a href="https://amazon.com.br" target="_blank" className="hover:text-brand-primary transition-colors">Amazon</a></li>
                <li><a href="https://mercadolivre.com.br" target="_blank" className="hover:text-brand-primary transition-colors">Mercado Livre</a></li>
                <li><a href="https://magazineluiza.com.br" target="_blank" className="hover:text-brand-primary transition-colors">Magazine Luiza</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-400 text-sm">
            <p>© {new Date().getFullYear()} EmporiumDasnyce. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-stone-600">Privacidade</a>
              <a href="#" className="hover:text-stone-600">Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
