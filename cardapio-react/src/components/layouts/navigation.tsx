import type { Category } from "../../data/categories";
type NavigationBar = {
  categories: Category[];
  activeCategory: string;
  onSelectCategory: (alias: string) => void;
};
export function NavigationBar({ categories, activeCategory, onSelectCategory }: NavigationBar) {
  return (
    <nav>
      <ul className="container">
        {categories.map((category) => (
          <li key={category.alias}>
            <button
              type="button"
              className={activeCategory === category.alias ? "active" : ""}
              onClick={() => onSelectCategory(category.alias)}
            >
              {category.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}