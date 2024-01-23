import { useState } from 'react'

import profileContent from 'src/content/profile.md?raw';

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
