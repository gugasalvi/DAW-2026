import { ProductCard } from "./cases/products/components/product-card";
import { useProducts } from "./cases/products/hooks/use-product";
import { Footer } from "./components/layouts/footer"
import { Header } from "./components/layouts/header"
import { NavigationBar } from "./components/layouts/navigation"
import { categories } from "./data/categories";
import { useState } from "react";


function App() {

    const [activeCategory, setActiveCategory] = useState<string>('todos');

    const products = useProducts();

    function handleSelectCategory(alias: string) {
        setActiveCategory(alias);
    }

    return (
        <>
            <Header />

            <NavigationBar
                categories={categories}
                activeCategory={activeCategory}
                onSelectCategory={handleSelectCategory}
            />

            <main>
                <section>
                    <header>
                        <h2>Produtos</h2>
                        <p>Categoria <span id="selected-category">{ activeCategory }</span> - 10 itens</p>
                    </header>
                   
                  {products.map((product) => (
                    <ProductCard product={product} />
                  ))}

                </section>

                <aside>
                    <h2>Seu Pedido</h2>
                    <div className="cart-empty">
                        <img src="./assets/img/cart.svg" alt="Carrinho vazio" />
                        <p>Seu carrinho está vazio</p>
                        <p>Escolha um item do cardápio para começar.</p>
                    </div>
                </aside>
            </main>

            <Footer />
            <script src="./assets/js/script.js"></script>
        </>
    )
}

export default App