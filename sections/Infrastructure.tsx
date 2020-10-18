/* eslint-disable react/no-array-index-key */

import { useEffect, useState } from 'react';
import Description from '../components/forms/Description.style';
import Header from '../components/Header.style';
import { getTerraFormPackage } from '../utils/terraform';
import LoadingIcon from '../components/icons/LoadingIcon';
import Code from '../components/code/Code';
import { ShareLink } from '../components/ShareLink';
import { trail } from '../utils/splitbee';
import useQuestions, { useSummary } from '../questions/useQuestions';
import { Section } from '../components/utils';
import { getShareTitle } from '../utils/sharing';

const Infrastructure = () => {
  const { hasAnsweredAll } = useQuestions();
  const props = useSummary();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => trail('completed', props), []);
  useEffect(() => {
    if (hasAnsweredAll) {
      setTimeout(() => setLoading(false), 800);
    }
  }, [hasAnsweredAll]);
  if (!hasAnsweredAll) {
    return null;
  }
  if (loading) {
    return <LoadingIcon />;
  }
  const { description, mainTfContent } = getTerraFormPackage(props);

  return (
    <>
      <Header as={'h1'}>Bucket is served!</Header>
      Just run the script below, or share this{' '}
      <ShareLink text={getShareTitle(props)}>configuration url</ShareLink> for
      later.
      <Code bucketName={props.bucketName} mainTfContent={mainTfContent} />
      <Description style={{ fontWeight: 'bold' }}>
        The script above will plan the infrastructure and prompt you for
        confirmation.
      </Description>
      {description.map((text, i) => (
        <Description key={i}>{text}</Description>
      ))}
    </>
  );
};

export default () => (
  <Section id="infrastructure" tight>
    <Infrastructure />
  </Section>
);
