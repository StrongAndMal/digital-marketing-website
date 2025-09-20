import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ExternalLink } from "lucide-react";

// Remove interface PricingCardProps, all type annotations, and React.FC usage. Convert to plain JavaScript.
export const PricingCard = ({
  title,
  price,
  originalPrice,
  yearlyPrice,
  yearlyOriginalPrice,
  description,
  features,
  isPreferred,
  exampleLink,
  isYearly,
  onStripeClick,
  savings,
}) => {
  const currentPrice = isYearly ? yearlyPrice : price;
  const currentOriginalPrice = isYearly ? yearlyOriginalPrice : originalPrice;

  return (
    <Card
      className={`relative h-full flex flex-col ${
        isPreferred ? "border-primary shadow-lg scale-105" : ""
      }`}
    >
      {isPreferred && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl font-bold mb-3">{title}</CardTitle>
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            {currentOriginalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                ${currentOriginalPrice}
              </span>
            )}
            <span className="text-3xl font-bold text-primary">
              ${currentPrice}
            </span>
            <span className="text-muted-foreground">
              /{isYearly ? "year" : "month"}
            </span>
          </div>
          {isYearly && savings && (
            <div className="text-sm text-green-600 font-medium">
              Save {savings}
            </div>
          )}
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col space-y-4">
        <div className="space-y-2 flex-1">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>

        {exampleLink && (
          <Button variant="outline" className="w-full" asChild>
            <a href={exampleLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              View Example
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}

        <div className="mt-auto">
          <Button
            onClick={onStripeClick}
            className="w-full bg-[#635BFF] hover:bg-[#5A52E8] text-white font-semibold py-3 text-lg"
          >
            Subscribe
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
