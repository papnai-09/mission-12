import Image from "next/image";
import { Button } from "@/components/ui/Button";

export type ProductCardProps = {
  name: string;
  category: string;
  price: string;
  imageUrl: string;
  rating?: number;
  stockStatus?: "In stock" | "Low stock" | "Sold out";
  highlighted?: boolean;
};

export function ProductCard({
  name,
  category,
  price,
  imageUrl,
  rating = 4.8,
  stockStatus = "In stock",
  highlighted = false,
}: ProductCardProps) {
  return (
    <article className={["ds-product-card", highlighted ? "ds-product-card--highlighted" : ""].filter(Boolean).join(" ")}>
      <div className="ds-product-card__media">
        <Image src={imageUrl} alt="" width={72} height={72} loading="eager" />
      </div>
      <div className="ds-product-card__body">
        <div>
          <p className="ds-product-card__category">{category}</p>
          <h3>{name}</h3>
        </div>
        <div className="ds-product-card__meta">
          <span>{price}</span>
          <span>{rating.toFixed(1)} rating</span>
        </div>
        <div className="ds-product-card__footer">
          <span className={`ds-stock ds-stock--${stockStatus.toLowerCase().replace(/\s+/g, "-")}`}>
            {stockStatus}
          </span>
          <Button size="sm" disabled={stockStatus === "Sold out"}>
            Add
          </Button>
        </div>
      </div>
    </article>
  );
}
