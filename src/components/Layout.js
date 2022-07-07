import React from 'react';
import { Helmet } from 'react-helmet';

const Layout = ({ children, title, description, image }) => {
  return (
    <div>
      <Helmet
        defaultTitle="PaperJam"
        defer={false}
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content="@monsieur_riz" />
      </Helmet>

      <div class="content">
        <header>
          <button class="snipcart-checkout">
            Panier
          <span class="snipcart-total-price"></span>
          <span class="snipcart-items-count"></span>
          </button>
        </header>
        <main>{children}</main>
        <footer />
      </div>
    </div>
  );
};

export default Layout;