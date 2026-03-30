import { LucideIcon } from 'lucide-react';

export interface Product {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  longDescription: string;
  image: string;
  specifications: {
    label: string;
    value: string;
  }[];
  relatedProductIds: string[];
}
