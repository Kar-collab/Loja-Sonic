// Recebe via Props as listas (categories, platforms) e o estado atual do que está selecionado (search, selectedCategory, etc.)
// Também recebe funções ('on...Change') para avisar o componente pai quando o usuário clicar em algo
export function ProductFilters({
  categories,
  platforms,
  selectedCategory,
  selectedPlatform,
  search,
  onCategoryChange,
  onPlatformChange,
  onSearchChange,
}) {
  return (
    // Caixa principal dos filtros com rótulo de acessibilidade para explicar o que essa seção faz
    <div className="filters" aria-label="Filtros do catálogo">

      {/* Campo de Busca por texto */}
      <label className="search-field">
        <span>Buscar produto</span>
        <input
          type="search"
          placeholder="Ex: deluxe, DLC, pôster..."
          // 'value={search}' torna este um "Input Controlado": ele mostra exatamente o que está guardado no estado do React
          value={search}
          // 'onChange' detecta cada tecla digitada. 'event.target.value' pega o texto atualizado e o envia para a função atualizadora
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </label>

      {/* Filtro de Categoria (Menu Dropdown/Select) */}
      <label>
        <span>Categoria</span>
        {/* O select monitora a mudança. Quando o usuário troca a opção, dispara a função passando a nova chave (key) */}
        <select value={selectedCategory} onChange={(event) => onCategoryChange(event.target.value)}>
          {/* '.map()' lê a lista de categorias do products.js e cria dinamicamente uma tag <option> para cada uma */}
          {categories.map((category) => (
            // 'key' identifica a opção. 'value' armazena o id interno (ex: 'jogos') e o texto exibe o nome amigável (ex: 'Jogos')
            <option key={category.key} value={category.key}>{category.label}</option>
          ))}
        </select>
      </label>

      {/* Filtro de Plataforma (Menu Dropdown/Select) */}
      <label>
        <span>Plataforma</span>
        {/* Mesma lógica do select anterior, mas controlando e disparando o filtro das plataformas (ex: 'ps5', 'xbox') */}
        <select value={selectedPlatform} onChange={(event) => onPlatformChange(event.target.value)}>
          {/* Loop dinâmico que lê o array de plataformas e renderiza as opções do menu */}
          {platforms.map((platform) => (
            <option key={platform.key} value={platform.key}>{platform.label}</option>
          ))}
        </select>
      </label>
    </div>
  );
}
