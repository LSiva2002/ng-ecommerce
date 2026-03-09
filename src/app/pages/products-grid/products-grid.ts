import { Component, signal } from '@angular/core';
import { Product } from '../../models/product';
import { input } from '@angular/core';
import { computed } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSidenavContent } from '@angular/material/sidenav';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { MatListItem, MatNavList } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-products-grid',
  imports: [
    ProductCard,
    MatSidenav,
    MatSidenavContent,
    MatNavList,
    MatListItem,
    MatSidenavContainer,
    RouterLink,
    TitleCasePipe],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export default class ProductsGrid {

  category = input<string>('all');

  products = signal<Product[]>([
    {
      id: "1",
      name: "Wireless Headphones",
      price: 2999,
      description: "High quality wireless headphones with noise cancellation.",
      image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd",
      rating: 4.5,
      reviewCount: 120,
      inStock: true,
      category: "electronics"
    },
    {
      id: "2",
      name: "Smart Watch",
      price: 4999,
      description: "Track your fitness, heart rate, and notifications.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
      rating: 4.3,
      reviewCount: 85,
      inStock: true,
      category: "electronics"
    },
    {
      id: "3",
      name: "Running Shoes",
      price: 2599,
      description: "Comfortable running shoes for daily workouts.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      rating: 4.6,
      reviewCount: 210,
      inStock: true,
      category: "footwear"
    },
    {
      id: "4",
      name: "Backpack",
      price: 1499,
      description: "Durable backpack suitable for travel and office.",
      image: "https://images.unsplash.com/photo-1509762774605-f07235a08f1f",
      rating: 4.2,
      reviewCount: 64,
      inStock: true,
      category: "accessories"
    },
    {
      id: "5",
      name: "Gaming Mouse",
      price: 1999,
      description: "Ergonomic gaming mouse with RGB lighting.",
      image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7",
      rating: 4.7,
      reviewCount: 150,
      inStock: true,
      category: "electronics"
    },
    {
      id: "6",
      name: "Laptop Stand",
      price: 899,
      description: "Aluminum adjustable laptop stand for better posture.",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
      rating: 4.4,
      reviewCount: 45,
      inStock: true,
      category: "accessories"
    },
    {
      id: "7",
      name: "Bluetooth Speaker",
      price: 3499,
      description: "Portable speaker with deep bass and long battery life.",
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=800",
      rating: 4.5,
      reviewCount: 92,
      inStock: true,
      category: "electronics"
    },
    {
      id: "8",
      name: "Sunglasses",
      price: 799,
      description: "Stylish UV protection sunglasses.",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
      rating: 4.1,
      reviewCount: 38,
      inStock: true,
      category: "fashion"
    }
  ]);

  filteredProducts = computed(() => {
    if (this.category() === 'all') {
      return this.products();
    }
    return this.products().filter(p => p.category === this.category().toLowerCase());
  });


  categories = signal<string[]>([
    "all",
    "electronics",
    "footwear",
    "accessories",
    "fashion"
  ]);
}
