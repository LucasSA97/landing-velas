import {
  ShoppingBag,
  Flame,
  Wind,
  Sparkles,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Phone,
  Mail,
  MessageCircle,
} from 'lucide-react';
import React from 'react';

export default function IconComponent({ name, color = "#A0522D", size = 24 }) {
  const icons = {
    ShoppingBag,
    Flame,
    Wind,
    Sparkles,
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Phone,
    Mail,
    MessageCircle,
  };

  const Icon = icons[name];
  if (!Icon) {
    console.warn(`Icon ${name} not found!`);
    return null;
  }

  return <Icon stroke={color} size={size} />;
}
