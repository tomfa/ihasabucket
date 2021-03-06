import { SectionBackground } from '../../components/utils';
import { useTheme } from '../../styles/theme';
import FooterLinks from './FooterLinks.style';
import Link from './Link';
import FooterAside from './FooterAside.style';
import FooterHeader from './FooterHeader.style';
import FooterSection from './FooterSection.style';

const Footer = () => {
  const theme = useTheme();
  return (
    <SectionBackground
      backgroundColor={theme.colors.secondary}
      color={theme.colors.textSecondary}
      marginTop={'3rem'}>
      <FooterSection>
        <FooterAside>
          <FooterHeader>Wat</FooterHeader>
          <p>
            I love Heroku, Vercel seems awesome, Webflow is a great product.
            Digital ocean got a real nice setup, and all respect to those who
            maintain their own servers.
          </p>
          <p>
            But when it comes to simply hosting a web app or static files, AWS
            S3 is usually faster, cheaper, more reliable and simpler – as long
            as you stay clear of the AWS console.
          </p>
          <p>Let me help you with that.</p>
        </FooterAside>
        <FooterAside right>
          <FooterHeader>Links</FooterHeader>
          <FooterLinks>
            <Link href={'https://tomasafagerbekk.typeform.com/to/K9yBG3Af'}>
              Give feedback
            </Link>
            <Link href={'https://tomasafagerbekk.typeform.com/to/K9yBG3Af'}>
              Ask a question
            </Link>
            <Link
              href={
                'https://medium.com/trackstack/deploying-a-react-app-to-aws-s3-with-github-actions-b1cb9ba75c95'
              }>
              Deploying app to S3
            </Link>
            <Link href={'https://github.com/tomfa/s3-uploader'}>
              User upload to S3
            </Link>
            <Link
              href={
                'https://learn.hashicorp.com/tutorials/terraform/github-actions'
              }>
              Infrastructure with CI
            </Link>
          </FooterLinks>

          <FooterHeader>Me</FooterHeader>
          <FooterLinks>
            <Link href={'https://github.com/tomfa/ihasabucket'}>Github</Link>
            <Link href={'https://linkedin.com/in/fagerbekk'}>LinkedIn</Link>
            <Link href={'https://tomfa.github.io'}>Homepage</Link>
          </FooterLinks>
        </FooterAside>
      </FooterSection>
    </SectionBackground>
  );
};

export default Footer;
