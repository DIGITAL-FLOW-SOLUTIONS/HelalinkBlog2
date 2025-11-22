import { Link } from "wouter";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import type { Article } from "@shared/schema";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
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
    <Link href={`/article/${article.slug}`} data-testid={`link-article-${article.slug}`}>
      <a className="h-full">
        <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group h-full flex flex-col cursor-pointer">
          <div className="relative overflow-hidden aspect-video">
            <img
              src={getImageUrl(article.featuredImage)}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 left-3">
              <Badge className="bg-secondary text-secondary-foreground">
                {article.category}
              </Badge>
            </div>
          </div>

          <CardHeader className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-lg">{getCountryFlag(article.country)}</span>
              <Calendar className="h-4 w-4" />
              <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
            </div>
            <h3 className="text-xl font-bold leading-tight line-clamp-2 group-hover:text-primary transition-colors">
              {article.title}
            </h3>
          </CardHeader>

          <CardContent className="flex-1">
            <p className="text-muted-foreground line-clamp-3 leading-relaxed">
              {article.excerpt}
            </p>
            {article.activationFee && (
              <div className="mt-4 flex items-center gap-2">
                <Badge variant="outline" className="bg-accent/10 text-accent-foreground border-accent">
                  Activation: {article.activationFee}
                </Badge>
              </div>
            )}
          </CardContent>

          <CardFooter>
            <Button variant="ghost" className="w-full group/btn">
              Read More
              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </CardFooter>
        </Card>
      </a>
    </Link>
  );
}
