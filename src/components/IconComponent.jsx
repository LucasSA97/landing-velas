import { ShoppingBag, Flame, Wind, Sparkles, Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MessageCircle } from 'lucide-react';
import React from 'react';


export default function IconComponent({ name }) {
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
  return <Icon />;
}
