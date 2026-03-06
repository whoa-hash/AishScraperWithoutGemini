import articles from "./articles.json";
import "./App.css";

export default function App() {
  const featuredIndex = 1; // second article = most current

  return (
    <div className="page">
      <header className="header">
        <h1 className="title">Aish</h1>
        <p className="subtitle">Smart Reads for Curious Minds</p>
      </header>

      <main className="grid">
        {articles.map((article, i) => (
          <article
            key={i}
            className={`card ${
              i === featuredIndex
                ? "card-featured"
                : i % 4 === 0
                ? "card-medium"
                : "card-small"
            }`}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <a href={article.url} target="_blank" rel="noreferrer">
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className="thumb"
                  loading="lazy"
                />
              )}
            </a>

            <div className="content">
              {i === featuredIndex && (
                <span className="badge">FEATURED</span>
              )}

              <div className="tags">
                <span className="tag">{article.category}</span>
              </div>

              <h2 className="articleTitle">{article.title}</h2>

            </div>
          </article>
        ))}
      </main>
    </div>
  );
}
