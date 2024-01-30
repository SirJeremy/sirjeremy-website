// https://usehooks-ts.com/react-hook/use-element-size

// Comment: Jeremy Cortez, 2024-01-24
// Doesn't seem to work in every case, but that seems to be a limit of DOM updates.
// In the case where a size is calculated, like maintaining an aspect ratio but only setting a width,
// the height in that case will not bet updated correctly.
// This can be fixed by doing aspect ratio calculations, but this is an important note about functionality.
//
// Another very important detil is that when unpacking width and height (which you should since objects wont proberly work with effect),
// "width" and "hight" must be named exactly so or must be remapped to another name {width: w, hight: h}.
//
// -2 hours >:[

/*
The MIT License (MIT)

Copyright (c) 2020 Julien CARON

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import { useCallback, useState } from 'react'

import useIsomorphicLayoutEffect from 'src/hooks/useIsomorphicLayoutEffect';
import useEventListener from 'src/hooks/useEventListener';

interface Size {
  width: number
  height: number
}

function useElementSize<T extends HTMLElement = HTMLDivElement>(): [
  (node: T | null) => void,
  Size,
] {
  // Mutable values like 'ref.current' aren't valid dependencies
  // because mutating them doesn't re-render the component.
  // Instead, we use a state as a ref to be reactive.
  const [ref, setRef] = useState<T | null>(null)
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  })

  // Prevent too many rendering using useCallback
  const handleSize = useCallback(() => {
    setSize({
      width: ref?.offsetWidth || 0,
      height: ref?.offsetHeight || 0,
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.offsetHeight, ref?.offsetWidth])

  useEventListener('resize', handleSize)

  useIsomorphicLayoutEffect(() => {
    handleSize()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.offsetHeight, ref?.offsetWidth])

  return [setRef, size]
}

export default useElementSize;