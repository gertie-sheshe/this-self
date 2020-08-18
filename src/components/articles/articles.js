import React from 'react';
import articles from './data';
import './articles.scss';

const Articles = () => (
    <div className="articles">
        <h3 className="title">ARTICLES</h3>
        {articles.data.map((article, index) => (
            <div key={index} className="article-display">
                <a href={article.link}>
                    <div className="container">
                        <i className="fa fa-file-text-o" aria-hidden="true"></i>
                    </div>
                    <div className="article-details">
                        <h3 className="article-title">{article.title}</h3>
                        <p>{article.description}</p>
                        <p>{article.date}</p>
                    </div>
                </a>
            </div>
        ))}
    </div>
)

export default Articles;
