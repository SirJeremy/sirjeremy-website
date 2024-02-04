import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as highlighTheme } from 'react-syntax-highlighter/dist/esm/styles/prism'

const blockStyles = "not-prose w-full";
const inlineStyles = "not-prose bg-[#1d1f21] text-[#c5c8c6] rounded-sm pl-1 pr-1 ml-0.5 mr-0.5";

const CodeBlock = ({inline, className, children}) => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
        <SyntaxHighlighter
            className={blockStyles}
            children={String(children).replace(/\n$/, '')}
            style={highlighTheme}
            language={match[1]}
            showLineNumbers
        />
        ) : (
        <code className={inlineStyles}>
            {children}
        </code>
        )
};

export default CodeBlock;