import { useState } from 'react'
import MarkdownContent from 'components/MarkdownContent';

import profileContent from 'content/profile.md?raw'

function ProfilePage() {
  return (
    <div className='page-root'>
        <div className='page-container'>
          <MarkdownContent>
            {profileContent}
          </MarkdownContent>
        </div>
    </div>
  )
}

export default ProfilePage;
