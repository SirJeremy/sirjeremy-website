import MarkdownContent from 'src/components/MarkdownContent';
import HavocTanksCarousel from 'src/components/HavocTanksCarousel';

import at4mContent from 'src/content/portfolio-at4m.md?raw';
import rcbcContent from 'src/content/portfolio-rcbc.md?raw';
import htContent from 'src/content/portfolio-ht.md?raw';
import sirjeremyContent from 'src/content/portfolio-sirjeremy.md?raw';

const contentSeparator = "\n\n---\n\n";
const combinedContent = [at4mContent, rcbcContent, htContent, sirjeremyContent].join(contentSeparator);

function PortfolioPage() {
  return (
    <div className='page-root'>
        <div className='page-container'>
          <MarkdownContent componentMapping={{'ht-carousel': <HavocTanksCarousel/>}}>
            {combinedContent}
          </MarkdownContent>
        </div>
    </div>
  )
}

export default PortfolioPage;
