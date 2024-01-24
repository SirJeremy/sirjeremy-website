import { cloneElement } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import CodeBlock from 'src/components/CodeBlock';

const tailwindClassMentionForCompiler = "md-img-left md-img-right md-img-center md-img-center-full";

const specialComponentResolution = (className, specialComponentMapping) => {
  const firstClass = className.split(" ")[0];
  if (specialComponentMapping !== null && firstClass in specialComponentMapping) {
    const clone = cloneElement(specialComponentMapping[firstClass], {className: className});
    return clone
  }
  return <></>;
};

// specialComponentMapping = { 'first-class-name-on-div': <MyComponent/> }
function MarkdownContent({children, specialComponentMapping=null}) {
  return (
    <div className='prose prose-unamed max-w-none'>
      <Markdown 
        rehypePlugins={[remarkGfm, rehypeRaw]}
        children={children}
        components={{
          code: ({node, ...props}) => <CodeBlock {...props}/>,
          pre: ({ children, ...props }) => children,
          div: ({ node, className, ...props}) => specialComponentResolution(className, specialComponentMapping),
        }}
        />
    </div>
  )
}

export default MarkdownContent;
