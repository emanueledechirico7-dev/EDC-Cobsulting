import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  piva: string;
}

export interface SloganResponse {
  slogans: string[];
}