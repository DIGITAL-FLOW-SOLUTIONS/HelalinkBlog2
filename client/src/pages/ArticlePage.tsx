import { useRoute, Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, ArrowLeft, ExternalLink, ChevronRight } from "lucide-react";
import type { Article } from "@shared/schema";
import { useEffect, useMemo } from "react";
import { articlesData } from "@/lib/articles";

export default function ArticlePage() {
  const [, params] = useRoute("/article/:slug");
  const slug = params?.slug;

  const article = articlesData.find(a => a.slug === slug);
  const isLoading = false;
  const allArticles = articlesData;

  // Get previous and next articles
  const { prevArticle, nextArticle } = useMemo(() => {
    if (!allArticles || !article) return { prevArticle: undefined, nextArticle: undefined };
    
    const currentIndex = allArticles.findIndex(a => a.slug === article.slug);
    return {
      prevArticle: currentIndex > 0 ? allArticles[currentIndex - 1] : undefined,
      nextArticle: currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : undefined,
    };
  }, [allArticles, article]);

  useEffect(() => {
    if (article) {
      window.scrollTo(0, 0);
      document.title = `${article.title} | HELALINK Blog - Earn Money Online`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", article.metaDescription);
      }
      
      // Update meta keywords based on article category and content
      const keywordMap: Record<string, string> = {
        'kenya': 'HELALINK Kenya, earn money Kenya, KSH earnings, Kenya jobs, online income Kenya, make money Kenya',
        'uganda': 'HELALINK Uganda, earn money Uganda, UGX earnings, Uganda jobs, online income Uganda, make money Uganda',
        'tanzania': 'HELALINK Tanzania, earn money Tanzania, TSH earnings, Tanzania jobs, online income Tanzania, make money Tanzania',
        'getting-started': 'HELALINK getting started, how to register HELALINK, HELALINK tutorial, HELALINK activation',
        'app': 'HELALINK app, HELALINK mobile app, download HELALINK, HELALINK features, app tutorial',
        'tips-strategies': 'HELALINK tips, earning strategies, maximize earnings, HELALINK guide, pro tips',
        'affiliate': 'HELALINK affiliate, affiliate marketing, referral program, passive income, MLM',
        'success-stories': 'HELALINK testimonials, success stories, real earnings, user reviews, case studies',
        'payments': 'HELALINK payments, M-Pesa withdrawal, bank transfer, payment methods, payout guide',
        'faq': 'HELALINK FAQ, frequently asked questions, HELALINK help, support, troubleshooting',
      };
      
      let articleKeywords = 'HELALINK, earn money online, surveys, video rewards, online income, affiliate marketing';
      for (const [key, keywords] of Object.entries(keywordMap)) {
        if (article.slug.includes(key) || article.category.toLowerCase().includes(key)) {
          articleKeywords = keywords;
          break;
        }
      }
      
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', articleKeywords);
      
      // Update canonical URL
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = `${window.location.origin}/article/${article.slug}`;
      
      // Update Open Graph tags
      const updateOGTag = (property: string, content: string) => {
        let tag = document.querySelector(`meta[property="${property}"]`);
        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute('property', property);
          document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
      };
      
      updateOGTag('og:title', `${article.title} | HELALINK Blog`);
      updateOGTag('og:description', article.metaDescription);
      updateOGTag('og:type', 'article');
      updateOGTag('og:url', `${window.location.origin}/article/${article.slug}`);
      updateOGTag('og:image', article.featuredImage.startsWith('http') ? article.featuredImage : `${window.location.origin}/${article.featuredImage}`);
      
      // Add Article Schema Markup (JSON-LD)
      let scriptTag = document.getElementById('article-schema');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'article-schema';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      
      const schema = {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        'headline': article.title,
        'description': article.metaDescription,
        'image': article.featuredImage.startsWith('http') ? article.featuredImage : `${window.location.origin}/${article.featuredImage}`,
        'datePublished': article.publishedAt,
        'dateModified': article.publishedAt,
        'author': {
          '@type': 'Organization',
          'name': 'HELALINK Agencies',
          'logo': `${window.location.origin}/favicon.png`
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'HELALINK Blog',
          'logo': {
            '@type': 'ImageObject',
            'url': `${window.location.origin}/favicon.png`
          }
        },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': `${window.location.origin}/article/${article.slug}`
        }
      };
      
      scriptTag.textContent = JSON.stringify(schema);
    }
  }, [article]);

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <Skeleton className="h-4 w-48 mb-8" />
          <Skeleton className="aspect-video w-full mb-8 rounded-lg" />
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-4 w-48 mb-8" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/" data-testid="link-back-home">
            <a>
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </a>
          </Link>
        </div>
      </div>
    );
  }

  const getCountryFlag = (country: string) => {
    const flags: Record<string, string> = {
      kenya: "🇰🇪",
      uganda: "🇺🇬",
      tanzania: "🇹🇿",
      general: "🌍",
    };
    return flags[country] || "📄";
  };

  const getImageUrl = (path: string) => {
    try {
      return new URL(path, window.location.origin).href;
    } catch {
      return `/${path}`;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb Navigation */}
      <nav className="container mx-auto px-4 py-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Link href="/">
            <a className="hover:text-foreground transition-colors" data-testid="link-breadcrumb-home">Home</a>
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{article.category}</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground line-clamp-1">{article.title}</span>
        </div>
      </nav>

      <article className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Featured Image */}
        <div className="mb-12">
          <div className="relative overflow-hidden rounded-lg shadow-2xl mb-6">
            <img
              src={getImageUrl(article.featuredImage)}
              alt={article.title}
              className="w-full aspect-video object-cover"
              data-testid="img-featured"
            />
          </div>

          {/* Title and Meta Section */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge className="bg-primary text-primary-foreground font-semibold">
                {article.category}
              </Badge>
              <span className="text-xl">{getCountryFlag(article.country)}</span>
              {article.activationFee && (
                <Badge variant="secondary" className="text-sm">
                  Activation: {article.activationFee}
                </Badge>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight" data-testid="text-title">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time data-testid="text-date">{new Date(article.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              </div>
            </div>
          </div>

          {/* Primary CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="https://helalink.com/register.php?ref=VinM"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-article-create-account-primary"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full sm:w-auto px-8">
                Create Account
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a
              href="https://wa.me/254713332676"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-article-whatsapp-primary"
            >
              <Button size="lg" variant="outline" className="font-semibold w-full sm:w-auto px-8">
                Contact on WhatsApp
              </Button>
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <div 
              className="text-base md:text-lg leading-relaxed text-foreground space-y-6" 
              dangerouslySetInnerHTML={{ __html: article.content }} 
              data-testid="content-article" 
            />
          </div>

          {/* Promotional Posters Section */}
          {article.posters && article.posters.length > 0 && (
            <div className="my-12 py-12 border-t border-b border-border">
              <h2 className="text-3xl font-bold text-foreground mb-8">Promotional Materials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {article.posters.map((poster, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={getImageUrl(poster)}
                      alt={`HELALINK Promotional Poster ${index + 1}`}
                      className="w-full h-auto object-cover"
                      data-testid={`img-poster-${index}`}
                    />
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Secondary CTA Section */}
          <div className="my-12 p-8 md:p-12 bg-gradient-to-br from-primary/15 via-secondary/15 to-accent/15 rounded-xl border border-primary/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Ready to Earn Money Online?</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of users earning on HELALINK. Get started today with instant verification and multiple earning opportunities.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://helalink.com/register.php?ref=VinM"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-article-create-account-secondary"
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full sm:w-auto">
                  Create Account
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a
                href="https://wa.me/254713332676"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-article-whatsapp-secondary"
              >
                <Button size="lg" variant="outline" className="font-semibold w-full sm:w-auto">
                  Get Support on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        {(prevArticle || nextArticle) && (
          <div className="my-16 py-12 border-t border-border">
            <h3 className="text-2xl font-bold text-foreground mb-8">More Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Previous Post */}
              {prevArticle && (
                <Link href={`/article/${prevArticle.slug}`}>
                  <a className="group" data-testid={`link-prev-article-${prevArticle.slug}`}>
                    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                      <div className="flex flex-col h-full">
                        <div className="relative overflow-hidden aspect-video">
                          <img
                            src={getImageUrl(prevArticle.featuredImage)}
                            alt={prevArticle.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4 flex-1 flex flex-col">
                          <div className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">← Previous Article</div>
                          <h4 className="font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                            {prevArticle.title}
                          </h4>
                        </div>
                      </div>
                    </Card>
                  </a>
                </Link>
              )}

              {/* Next Post */}
              {nextArticle && (
                <Link href={`/article/${nextArticle.slug}`}>
                  <a className="group" data-testid={`link-next-article-${nextArticle.slug}`}>
                    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                      <div className="flex flex-col h-full">
                        <div className="relative overflow-hidden aspect-video">
                          <img
                            src={getImageUrl(nextArticle.featuredImage)}
                            alt={nextArticle.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4 flex-1 flex flex-col">
                          <div className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Next Article →</div>
                          <h4 className="font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                            {nextArticle.title}
                          </h4>
                        </div>
                      </div>
                    </Card>
                  </a>
                </Link>
              )}
            </div>
          </div>
        )}
      </article>

      {/* Spacing */}
      <div className="py-8" />
    </div>
  );
}
