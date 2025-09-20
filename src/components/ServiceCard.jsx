import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const ServiceCard = ({
  title,
  price,
  monthlyPrice,
  yearlyPrice,
  description,
  features,
  benefits,
  onStripeClick,
  isBundle = false,
  isYearly = false,
  savings,
}) => {
  const currentPrice = isYearly ? yearlyPrice : monthlyPrice || price;
  const priceLabel = isBundle ? "Monthly" : isYearly ? "year" : "month";

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl font-bold mb-3">{title}</CardTitle>
        <div className="space-y-2">
          <div className="text-2xl font-bold text-primary">${currentPrice}</div>
          <div className="text-sm text-muted-foreground">/{priceLabel}</div>
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
          <h4 className="font-medium text-sm">What's included:</h4>
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>

        {benefits && benefits.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Benefits:</h4>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-blue-700 leading-relaxed">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
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
