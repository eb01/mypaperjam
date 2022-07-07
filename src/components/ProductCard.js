import React from 'react';
import Image from 'gatsby-image';
import { IcAddToCart } from '../components/Icons';

const ProductCard = ({ product }) => (
  <div class="card card-bordered bg-white">
    <figure>
      <Image fluid={product?.thumbnail?.fluid} alt={product?.thumbnail?.alt} />
    </figure>
    <div class="card-body p-4 flex flex-col">
      <h3 class="card-title flex-1">{product?.name}</h3>
      <div class="flex items-center">
        <p class="text-2xl">{product.price}€</p>
      </div>
      <button
          class="btn btn-secondary btn-circle btn-sm snipcart-add-item"
          data-item-id={product?.slug}
          data-item-price={product?.price}
          data-item-url={`/products/${product?.slug}`}
          data-item-image={product?.thumbnail?.url}
          data-item-name={product?.name}
        >
          Ajouter au panier
        </button>
    </div>
  </div>
);

export default ProductCard;
