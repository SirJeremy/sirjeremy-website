import MarkdownContent from 'src/components/MarkdownContent';
import HavocTanksCarousel from 'src/components/HavocTanksCarousel';

import portfolioContent from 'src/content/portfolio.md?raw';

function PortfolioPage() {
  return (
    <div className='page-root'>
        <div className='page-container'>
          <MarkdownContent specialComponentMapping={{'ht-carousel': <HavocTanksCarousel/>}}>
            {portfolioContent}
          </MarkdownContent>
        </div>
    </div>
  )
}

export default PortfolioPage;
