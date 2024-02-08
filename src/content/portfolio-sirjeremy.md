# This Website

<img src="/pics/sirjeremy-website.png" alt="Screenshot of this website. In the screenshot, you can see this very same picture." class="md-img-center-3/4"/>

While this website not that technically impressive, it is something you can see outside a command line and took longer than 2 hours (which are the main hurdles for portfolio projects). So, I am counting it.

This website is made using Vite, React, Tailwind, and is deployed onto a Linode server using nginx and certbot. The source code for the website is available on [GitHub](https://github.com/SirJeremy/sirjeremy-website). The most notable part of this website is the system I put together for adding content to pages. Obviously, writing out text content in HTML is incredibly tedious, so I wanted something more convenient.

## Problem to Solve

For a website based around serving article styled content, some sort of database for page content would be ideal for long term sustainability, but this website did not need such a robust solution. Instead, I just need something that could simplify writing content of webpages without having to create components with a bunch of HTML. Some styling was also needed to have elements like images, links, various header styles, lists, and occasional `code snippets`.

## Basic Solution Using Markdown

Thankfully, there is a such system that supports all of the features desired already: [markdown](https://www.markdownguide.org/basic-syntax/)! Even better, there is already a [npm package](https://www.npmjs.com/package/react-markdown?activeTab=readme) that does all the heavy lifting. Now we add a plugin for [extended markdown sytax](https://www.npmjs.com/package/remark-gfm), a [Typography plugin](https://tailwindcss.com/docs/typography-plugin) for Tailwind for automatic styling, and a custom component for code snippets. Then bam! Now we can write content for pages in plain text in markdown format.

### Not a Complete Solution

There is still one issue that needs to be solved, what if we want something more complicated like an image carousel? While we can easily insert raw HTML into markdown using a plugin, something more complicated like an image carousel would be a pain to make in raw HTML. Therefore, we need a way to insert React components into markdown content.

## Advanced Solution Using Component Mapping

The solution I went with involves some of the more advanced features of the markdown package. The package contains a feature where you can supply your own custom components which map to HTML elements. This feature is already used to create custom styling for code snippets, but this situation is slightly different. Any number of components need to be inserted into markdown content.

After a bit of experimentation, I found out that raw HTML elements already in a markdown file are supported for replacement because of the raw HTML plugin. So now we have a way to replace a single element with a single component, next what we need is a way to map multiple components to a single component.

As it turns out, the mapping on the markdown plugin can be pointed to a function. Using a simple function, we can check the classes on a component, check if it matches a predefined mapping, and then return a component on match. Now we can insert a raw HTML `div` into a markdown file, give it a class, map that class to a component in React, and then the `div` will be replaced with component.

### Code

Below is a snippet of the code distilled to its core components. It demonstrates how the component mapping soltion works and includes an example.


``` jsx
const componentMapper = (className, componentMapping) => {
  const firstClass = className.split(" ")[0];
  if (componentMapping !== null && firstClass in componentMapping) {
    const clone = cloneElement(
      componentMapping[firstClass], {className: className});
    return clone
  }
  return <></>;
};

function MarkdownContent({children, componentMapping=null}) {
  return (
    <div>
      <Markdown 
        rehypePlugins={[rehypeRaw]}
        children={children}
        components={{
          div: ({ node, className, ...props}) => {
              componentMapper(className, componentMapping)
          },
        }}
        />
    </div>
  )
}

// example use
/*
Writting in markdown...

<div class='example-carousel'></div>

Writting in markdown...
*/


function PortfolioPage() {
  return (
    <MarkdownContent componentMapping={{
        'example-carousel': <ExampleCarousel/>,
        }}>
      {markdownContent}
    </MarkdownContent>
  )
}
```

Overall, not a ground breaking innovation, but I think it's neat. *(Also maybe this would fit better in a dev blog section 🤔)*