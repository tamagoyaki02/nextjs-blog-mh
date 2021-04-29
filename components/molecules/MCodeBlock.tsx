import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import palenight from "prism-react-renderer/themes/palenight";

interface Props {
  className: string;
  children: string;
}

const MCodeBlock: React.FC<Props> = ({ children, className }: Props) => {
  const language = className
    ? className.replace(/language-/, "")
    : "javascript";

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language as Language}
      theme={palenight}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} font-mono overflow-x-auto -mx-8 my-4 p-4 text-sm`}
          style={style}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default MCodeBlock;
