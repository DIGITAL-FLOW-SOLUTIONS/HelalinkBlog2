import { useEffect } from "react";
import { ArticleCard } from "@/components/ArticleCard";
import { Skeleton } from "@/components/ui/skeleton";
import type { Article } from "@shared/schema";
import { Card } from "@/components/ui/card";
import posterImage from "@assets/poster1_1763745124263.jpg";
import { articlesData } from "@/lib/articles";

export default function HomePage() {
  const articles = articlesData;
  const isLoading = false;

  // Update page title and meta tags
  useEffect(() => {
    document.title = "HELALINK - Earn Money Online | Kenya, Uganda, Tanzania";
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", "HELALINK, earn money online, make money from home, surveys, video rewards, online income, Kenya jobs, Uganda jobs, Tanzania jobs, side hustle, passive income, affiliate marketing, M-Pesa, easy money, online earning platform");
    }
  }, []);

  // Add Organization Schema to homepage
  useEffect(() => {
    let scriptTag = document.getElementById('org-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'org-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'HELALINK Agencies',
      'url': window.location.origin,
      'logo': `${window.location.origin}/favicon.png`,
      'description': 'Earn money online with HELALINK. Multiple earning opportunities through surveys, videos, games, and affiliate programs.',
      'contactPoint': {
        '@type': 'ContactPoint',
        'contactType': 'Customer Service',
        'telephone': '+254713332676',
        'availableLanguage': 'English'
      },
      'sameAs': [
        'https://wa.me/254713332676'
      ]
    };
    
    scriptTag.textContent = JSON.stringify(schema);
  }, []);

  return (
    <div className="min-h-screen">
      <section 
        className="relative bg-cover bg-center py-16 md:py-24 overflow-hidden"
        style={{ backgroundImage: `url(${posterImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Welcome to <span className="text-accent">HELALINK</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Your success partner! Earn money online from the comfort of your home using your smartphone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://helalink.com/register.php?ref=VinM"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-hero-create-account"
              >
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl">
                  Get Started Now
                </button>
              </a>
              <a
                href="https://wa.me/254713332676"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-hero-contact"
              >
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-8 border border-white bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm">
                  Contact Us on WhatsApp
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background" id="articles">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover earning opportunities across East Africa. Read about our programs in Kenya, Uganda, and Tanzania.
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <Skeleton className="aspect-video w-full" />
                  <div className="p-6 space-y-4">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                </Card>
              ))}
            </div>
          ) : articles && articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No articles found. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Start Earning?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join thousands of people across Kenya, Uganda, and Tanzania who are earning money online with HELALINK.
              Multiple earning methods, instant withdrawals, and 24/7 customer support.
            </p>
            <a
              href="https://helalink.com/register.php?ref=VinM"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-cta-create-account"
            >
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-12 px-10 bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105">
                Create Your Account Today
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
