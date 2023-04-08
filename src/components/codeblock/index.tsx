import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";

const CustomCodeBlock: React.FC<React.PropsWithChildren<any>> = (props) => {
  // if any language selected or javascript by default
  
  const { className, copy, children } = props;

  const language = className.match(/(?<=language-)(\w.*?)\b/) != null
    ? className.match(/(?<=language-)(\w.*?)\b/)[0]
    : "javascript";

  return copy ? (
    <CopyBlock
      text={children}
      language={language}
      theme={dracula}
      wrapLines
      codeBlock
    />
  ) : (
    <CodeBlock text={children} language={language} theme={dracula} wrapLines />
  );
};

export default CustomCodeBlock;
