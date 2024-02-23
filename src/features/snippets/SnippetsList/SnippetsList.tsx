import styled from 'styled-components';
import { Snippet } from '../../../types';

type Props = {
  selected?: Snippet;
  onSelect: (snippet: Snippet) => void;
  snippets: Snippet[];
  onInstall: (snippet: Snippet) => void;
  onUninstall: (snippet: Snippet) => void;
};

export const SnippetsList = (props: Props) => {
  const { selected, onSelect, snippets, onInstall, onUninstall } = props;

  const handleChange =
    (snippet: Snippet) => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        onInstall(snippet);
      } else {
        onUninstall(snippet);
      }
    };

  return (
    <Root>
      {snippets?.map((snippet) => (
        <Line key={snippet.id} onClick={() => onSelect(snippet)}>
          <div>
            {/* <input
              type="checkbox"
              onChange={handleChange(snippet)}
              defaultChecked={snippet.checked}
            /> */}
            {snippet.title}
          </div>
          <div>
            <SnippetPrefix>{snippet.prefix}</SnippetPrefix>
            {/* <Component /> */}
          </div>
        </Line>
      ))}
    </Root>
  );
};

const Root = styled.ul`
  display: flex;
  align-self: stretch;
  flex-direction: column;
  background: #212334;
  list-style-type: none;
  width: 240px;
  height: 100%;
  border-radius: 4px;
  padding: 8px 12px;
  margin: 0;
  gap: 8px;
  flex-shrink: 0;
`;

const Line = styled.li`
  font: inter;
  display: flex;
  flex-direction: column;
  height: 38px;
  font-size: 12px;
  justify-content: start;
  align-items: flex-start;
  padding: 4px 8px;

  &:hover {
    background: #181a2d;
  }
`;

const SnippetPrefix = styled.em`
  height: 13px;
  width: 125;
  color: #e6e6e699;
`;
