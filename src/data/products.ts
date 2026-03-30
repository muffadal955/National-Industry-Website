import { Droplets, Construction, Zap, Sprout } from 'lucide-react';
import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'pvc-pressure',
    title: 'PVC Pressure Pipes',
    icon: Droplets,
    description: 'Designed for transporting water under pressure in distribution and irrigation networks.',
    longDescription: 'Our PVC pressure pipes are engineered to withstand high internal pressures while maintaining exceptional durability. They are ideal for municipal water distribution, industrial process piping, and large-scale agricultural irrigation systems. These pipes are resistant to corrosion, chemical attack, and biological growth, ensuring a long service life with minimal maintenance.',
    image: 'https://picsum.photos/seed/pressure/1200/800',
    specifications: [
      { label: 'Material', value: 'High-grade Unplasticized PVC (uPVC)' },
      { label: 'Pressure Rating', value: 'PN6, PN10, PN16' },
      { label: 'Standard Length', value: '6 meters (custom lengths available)' },
      { label: 'Joint Type', value: 'Solvent Cement or Rubber Ring Joint' },
      { label: 'Color', value: 'Dark Grey / Blue' }
    ],
    relatedProductIds: ['drainage-pipes', 'agricultural-pipes']
  },
  {
    id: 'drainage-pipes',
    title: 'Drainage Pipes',
    icon: Construction,
    description: 'Waste and rainwater evacuation systems for buildings and public works.',
    longDescription: 'National Industries drainage pipes provide a reliable solution for gravity-fed waste and rainwater management. Designed for both residential and commercial applications, these pipes feature smooth internal walls to prevent clogging and ensure optimal flow rates. They are lightweight yet strong enough to withstand soil loading and typical installation stresses.',
    image: 'https://picsum.photos/seed/drainage/1200/800',
    specifications: [
      { label: 'Application', value: 'Sewerage, Soil & Waste, Rainwater' },
      { label: 'Standard', value: 'Compliance with ISO 4435 / EN 1401' },
      { label: 'Diameter Range', value: '32mm to 400mm' },
      { label: 'Resistance', value: 'High chemical and impact resistance' },
      { label: 'Color', value: 'Terracotta / Light Grey' }
    ],
    relatedProductIds: ['pvc-pressure', 'electrical-conduits']
  },
  {
    id: 'electrical-conduits',
    title: 'Electrical Conduits',
    icon: Zap,
    description: 'Optimal protection for your residential and industrial electrical wiring.',
    longDescription: 'Our electrical conduits are designed to provide superior protection for electrical cables in various environments. They are non-conductive, fire-resistant, and easy to install, making them the preferred choice for contractors and engineers. Whether for surface-mounted or embedded installations, these conduits ensure the safety and longevity of your electrical systems.',
    image: 'https://picsum.photos/seed/electric/1200/800',
    specifications: [
      { label: 'Type', value: 'Rigid PVC Conduit' },
      { label: 'Fire Rating', value: 'Self-extinguishing' },
      { label: 'Flexibility', value: 'High impact strength' },
      { label: 'Standard', value: 'Compliance with IEC 61386' },
      { label: 'Color', value: 'White / Orange' }
    ],
    relatedProductIds: ['drainage-pipes', 'pvc-pressure']
  },
  {
    id: 'agricultural-pipes',
    title: 'Agricultural Pipes',
    icon: Sprout,
    description: 'Robust irrigation solutions adapted to the climatic conditions of Madagascar.',
    longDescription: 'Specifically developed for the Malagasy agricultural sector, our pipes are built to endure harsh outdoor conditions and UV exposure. They are perfect for drip irrigation, sprinkler systems, and water transport across farms. Their flexibility and ease of handling make them ideal for the diverse terrains found across Madagascar.',
    image: 'https://picsum.photos/seed/agri/1200/800',
    specifications: [
      { label: 'UV Resistance', value: 'Enhanced UV protection for outdoor use' },
      { label: 'Flexibility', value: 'Optimized for varied terrain' },
      { label: 'Corrosion', value: 'Immune to fertilizers and soil chemicals' },
      { label: 'Durability', value: 'Long-term performance in tropical climates' },
      { label: 'Color', value: 'Black / Green' }
    ],
    relatedProductIds: ['pvc-pressure', 'drainage-pipes']
  }
];
