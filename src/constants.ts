import { Product, Category } from './types';

export const CATEGORIES: Category[] = ['Casa', 'Organização', 'Beleza', 'Acessórios', 'Viral'];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Organizador de Geladeira Giratório',
    description: 'Praticidade total para alcançar tudo o que está no fundo da geladeira sem bagunça.',
    price: 45.90,
    imageUrl: 'https://picsum.photos/seed/organizer/400/400',
    affiliateUrl: 'https://shopee.com.br',
    category: 'Organização',
    platform: 'Shopee',
    isViral: true
  },
  {
    id: '2',
    name: 'Mini Processador de Alimentos USB',
    description: 'Triture alho, cebola e temperos em segundos sem esforço e sem cheiro nas mãos.',
    price: 32.50,
    imageUrl: 'https://picsum.photos/seed/processor/400/400',
    affiliateUrl: 'https://amazon.com.br',
    category: 'Casa',
    platform: 'Amazon',
    isViral: true
  },
  {
    id: '3',
    name: 'Kit de Pincéis de Maquiagem Profissional',
    description: 'Cerdas macias e acabamento impecável para o seu autocuidado diário.',
    price: 89.00,
    imageUrl: 'https://picsum.photos/seed/beauty/400/400',
    affiliateUrl: 'https://mercadolivre.com.br',
    category: 'Beleza',
    platform: 'Mercado Livre'
  },
  {
    id: '4',
    name: 'Luminária de Mesa Touch Retrô',
    description: 'Design elegante com controle de intensidade para um ambiente aconchegante.',
    price: 120.00,
    imageUrl: 'https://picsum.photos/seed/lamp/400/400',
    affiliateUrl: 'https://magazineluiza.com.br',
    category: 'Acessórios',
    platform: 'Magazine Luiza'
  },
  {
    id: '5',
    name: 'MOP Limpeza Prática com Balde',
    description: 'Limpe sua casa sem molhar as mãos e com muito mais agilidade.',
    price: 75.90,
    imageUrl: 'https://picsum.photos/seed/mop/400/400',
    affiliateUrl: 'https://shopee.com.br',
    category: 'Casa',
    platform: 'Shopee'
  },
  {
    id: '6',
    name: 'Suporte de Celular Articulado',
    description: 'Ideal para gravar vídeos ou assistir suas séries favoritas com as mãos livres.',
    price: 25.00,
    imageUrl: 'https://picsum.photos/seed/holder/400/400',
    affiliateUrl: 'https://amazon.com.br',
    category: 'Viral',
    platform: 'Amazon',
    isViral: true
  }
];
