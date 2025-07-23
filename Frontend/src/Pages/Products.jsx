import { products } from "./../data/flavourData";
import ProductCards from "./../components/ProductCards";
import styles from "./Products.module.css";
import BackgroundParticles from "../bgParticles/backgroundParticles";

const Section = ({ title, items }) => (
  <section className="my-12">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h2>
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {items.map((product, index) => (
        <div
          key={product.id}
          className={styles.cardAnimation}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <ProductCards {...product} />
        </div>
      ))}
    </div>
  </section>
);

const Products = () => {
  return (
    <div className="min-h-screen relative">
      <BackgroundParticles />
      <div className="relative z-10 p-6 md:p-12">
        <h1 className="uppercase text-4xl md:text-5xl pt-20 font-extrabold text-center text-white mb-12">
          MrBeast Feastables Chocolates
        </h1>

        <Section title="Chocolates 🍫" items={products.chocolates} />
        <Section title="Cups 🧁" items={products.cups} />
        <Section title="Bundles 📦" items={products.bundles} />
        <Section title="Limited Time Deals ⏳" items={products.limited} />
      </div>
    </div>
  );
};

export default Products;
