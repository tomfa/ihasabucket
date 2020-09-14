import Mute from './Mute.style';
import Pre from './Pre.style';

type Props = { mainTfContent: string[]; bucketName: string };

const Code = ({ mainTfContent, bucketName }: Props) => (
  <Pre>
    <Mute># Create a folder to store infrastructure code</Mute>
    {'\n'}
    mkdir infrastructure{'\n'}
    cd infrastructure{'\n'}
    {'\n'}
    <Mute># Create config file</Mute>
    {'\n'}
    cat &lt;&lt;EOT &gt;&gt; ${bucketName || 'main.tf'}.tf{'\n'}
    {mainTfContent.map((line, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <span key={i}>
        {line}
        {'\n'}
      </span>
    ))}
    EOT{'\n'}
    {'\n'}
    <Mute># Deploy</Mute>
    {'\n'}
    terraform init{'\n'}
    terraform apply{'\n'}
  </Pre>
);

export default Code;
