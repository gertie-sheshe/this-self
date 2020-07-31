import React from 'react';
import './articles.scss';

const Articles = () => (
    <div className="articles">
        <div>ARTICLES</div>
        <div className="article-display">
            <a href="medium.com">
                <div className="container">
                    <i className="material-icons">article</i>
                </div>
                <div className="article-details">
                    <h2 className="article-title">Javascript Arrays + Time Complexity</h2>
                    <p>Improve performance of Array solutions</p>
                </div>
            </a>
        </div>
        <div className="article-display">
            <a href="medium.com">
                <div className="container">
                    <i className="material-icons">article</i>
                </div>
                <div className="article-details">
                    <h2 className="article-title">Improve Accessibility of Timeline App</h2>
                    <p>How I improved the Accessibility of a GitHub Timeline App I built</p>
                </div>
            </a>
        </div>
        <div className="article-display">
            <a href="medium.com">
                <div className="container">
                    <i className="material-icons">article</i>
                </div>
                <div className="article-details">
                    <h2 className="article-title">Web Scraping and UI Testing using Puppeteer</h2>
                    <p>Working with Puppeteer.</p>
                </div>
            </a>
        </div>
        <div className="article-display">
            <a href="medium.com">
                <div className="container">
                    <i className="material-icons">article</i>
                </div>
                <div className="article-details">
                    <h2 className="article-title">Quadratic to Linear with Javascript Arrays</h2>
                    <p>Working with Puppeteer.</p>
                </div>
            </a>
        </div>
    </div>
)

export default Articles;
