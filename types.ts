export interface Report {
  id: string;
  title: string;
  summary: string;
  region: string;
  country: string;
  sector: string;
  year: number;
  type: 'Liability Report' | 'Inquisitor File' | 'Dossier';
  imageUrl: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Partner {
  name: string;
  type: string;
}