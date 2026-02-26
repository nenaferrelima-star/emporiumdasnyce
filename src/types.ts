export type Category = 'Casa' | 'Organização' | 'Beleza' | 'Acessórios' | 'Viral';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  affiliateUrl: string;
  category: Category;
  platform: 'Shopee' | 'Amazon' | 'Mercado Livre' | 'Magazine Luiza';
  isViral?: boolean;
}
