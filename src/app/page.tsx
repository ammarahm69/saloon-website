"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}