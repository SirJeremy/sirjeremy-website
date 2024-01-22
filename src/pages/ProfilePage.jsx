import { useState } from 'react'
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import profileContent from 'content/profile.md?raw'

function ProfilePage() {
  return (
    <div className='page-root'>
        <div className='page-container'>
          <div className='prose prose-unamed max-w-none'>
            <Markdown rehypePlugins={[remarkGfm]}>{profileContent}</Markdown>
          </div>
        </div>
    </div>
  )
}

export default ProfilePage;
