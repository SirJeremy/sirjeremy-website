import { useState } from 'react'
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import CodeBlock from 'src/components/CodeBlock';

import profileContent from 'content/profile.md?raw'

function ProfilePage() {
  return (
    <div className='page-root'>
        <div className='page-container'>
          <div className='prose prose-unamed max-w-none'>
            <Markdown 
              rehypePlugins={[remarkGfm, rehypeRaw]}
              children={profileContent}
              components={{
                code: ({node, ...props}) => <CodeBlock {...props}/>,
                pre: ({ node, inline, className, children, ...props }) => children,
                }}
              />
          </div>
        </div>
    </div>
  )
}

export default ProfilePage;
