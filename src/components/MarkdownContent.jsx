import { cloneElement } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import CodeBlock from 'src/components/CodeBlock';

const tailwindClassMentionForCompiler = "md-img-left md-img-right md-img-center md-img-center-1/2 md-img-center-3/4 md-img-right-xs-center md-img-left-xs-center";

const componentMapper = (className, componentMapping) => {
  const firstClass = className.split(" ")[0];
  if (componentMapping !== null && firstClass in componentMapping) {
    const clone = cloneElement(componentMapping[firstClass], {className: className});
    return clone
  }
  return <></>;
};

// componentMapping = { 'first-class-name-on-div': <MyComponent/> }
function MarkdownContent({children, componentMapping=null}) {
  return (
    <div className='prose prose-unamed max-w-none'>
      <Markdown 
        rehypePlugins={[remarkGfm, rehypeRaw]}
        children={children}
        components={{
          code: ({node, ...props}) => <CodeBlock {...props}/>,
          pre: ({ children, ...props }) => children,
          div: ({ node, className, ...props}) => componentMapper(className, componentMapping),
        }}
        />
    </div>
  )
}

export default MarkdownContent;
