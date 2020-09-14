import { SectionBackground } from '../utils';
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
      backgroundColor={theme.colors.primary}
      color={theme.colors.textSecondary}
      marginTop={'3rem'}>
      <FooterSection>
        <FooterAside>
          <FooterHeader>Wat</FooterHeader>
          <p>
            I love Heroku, Vercel seems awesome, Squarespace is a great product.
            All respect to those who maintain their own servers at DigitalOcean.
          </p>
          <p>
            But when it comes to simply hosting a Webapp or static files, AWS S3
            is usually faster, cheaper, more realible and easier – as long as
            you stay clear of the AWS console.
          </p>
          <p>Let me help you with that.</p>
        </FooterAside>
        <FooterAside right>
          <FooterHeader>Articles</FooterHeader>
          <FooterLinks>
            <Link
              href={
                'https://medium.com/trackstack/deploying-a-react-app-to-aws-s3-with-github-actions-b1cb9ba75c95'
              }>
              Deploying Webapps to S3
            </Link>
            <Link href={'https://github.com/tomfa/s3-uploader'}>
              Allowing user upload to S3
            </Link>
            <Link
              href={
                'https://learn.hashicorp.com/tutorials/terraform/github-actions'
              }>
              Terraform CI deploy
            </Link>
          </FooterLinks>

          <FooterHeader>Links</FooterHeader>
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
