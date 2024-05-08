
type SegmentsTypes = {
    name: string;
    code: string;
}

type LanguageSelectorProps = {
    setCurrentSegment: React.Dispatch<React.SetStateAction<string>>;
  };

const LanguageSelector: React.FC<LanguageSelectorProps> = ({setCurrentSegment}) => {

  const segments: SegmentsTypes[] = [
    {
      name: 'English-US',
      code: 'en-us',
    },
    {
      name: 'Italiano',
      code: 'it',
    },
  ];

  const changeSegmentHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentSegment(e.target.value);
  }

  return (
    <select name="language_selector" onChange={(e) => changeSegmentHandler(e)} >
      {segments.map((segment) => (
        <option key={segment.code} value={segment.code}>
          {segment.name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
