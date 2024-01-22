import { useState } from 'react'
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import profileContent from 'content/profile.md?raw'

function ProfilePage() {
  return (
    <div className='page-root'>
        <div className='page-container'>
          <div className='prose prose-invert max-w-none'>
            <Markdown>{profileContent}</Markdown>
          </div>
        </div>
    </div>
  )
}

export default ProfilePage;
