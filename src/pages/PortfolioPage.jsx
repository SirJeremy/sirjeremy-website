import MarkdownContent from 'src/components/MarkdownContent';
import HavokTanksCarousel from 'src/components/HavokTanksCarousel';

import portfolioContent from 'src/content/portfolio.md?raw';

function PortfolioPage() {
  return (
    <div className='page-root'>
        <div className='page-container'>
          <MarkdownContent specialComponentMapping={{'ht-carousel': <HavokTanksCarousel/>}}>
            {portfolioContent}
          </MarkdownContent>
        </div>
    </div>
  )
}

export default PortfolioPage;
