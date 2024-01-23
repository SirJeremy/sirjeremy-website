import { useState } from 'react'
import MarkdownContent from 'src/components/MarkdownContent';

import portfolioContent from 'src/content/portfolio.md?raw';

const rootStyles = "page-root";
const containerStyles = "page-container";

function PortfolioPage() {
  return (
    <div className={rootStyles}>
        <div className='page-container'>
          <MarkdownContent>
            {portfolioContent}
          </MarkdownContent>
        </div>
    </div>
  )
}

export default PortfolioPage;
