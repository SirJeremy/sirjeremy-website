import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import CodeBlock from 'src/components/CodeBlock';

const tailwindClassMentionForCompiler = "md-img-left md-img-right md-img-center md-img-center-full";

function MarkdownContent({children}) {
  return (
    <div className='prose prose-unamed max-w-none'>
      <Markdown 
        rehypePlugins={[remarkGfm, rehypeRaw]}
        children={children}
        components={{
        code: ({node, ...props}) => <CodeBlock {...props}/>,
        pre: ({ node, inline, className, children, ...props }) => children,
        }}
        />
    </div>
  )
}

export default MarkdownContent;
