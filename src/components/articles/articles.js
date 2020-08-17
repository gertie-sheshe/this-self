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
                    </div>
                </a>
            </div>
        ))}
        {/* <div className="article-display">
            <a href="medium.com">
                <div className="container">
                    <i class="fa fa-file-text-o" aria-hidden="true"></i>
                </div>
                <div className="article-details">
                    <h3 className="article-title">Improve Accessibility of Timeline App</h3>
                    <p>How I improved the Accessibility of a GitHub Timeline App I built</p>
                </div>
            </a>
        </div> */}
        {/* <div className="article-display">
            <a href="medium.com">
                <div className="container">
                    <i class="fa fa-file-text-o" aria-hidden="true"></i>
                </div>
                <div className="article-details">
                    <h3 className="article-title">Web Scraping and UI Testing using Puppeteer</h3>
                    <p>Working with Puppeteer.</p>
                </div>
            </a>
        </div>
        <div className="article-display">
            <a href="medium.com">
                <div className="container">
                    <i class="fa fa-file-text-o" aria-hidden="true"></i>
                </div>
                <div className="article-details">
                    <h3 className="article-title">Quadratic to Linear with Javascript Arrays</h3>
                    <p>Working with Puppeteer.</p>
                </div>
            </a>
        </div> */}
    </div>
)

export default Articles;
