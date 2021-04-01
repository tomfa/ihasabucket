import Header from '../../components/Header.style';
import Pre from '../../components/code/Pre.style';
import useQuestions, { useSummary } from '../../questions/useQuestions';
import { Section } from '../../components/utils';
import { QuestionSummary } from '../../utils/terraform/types';
import Deployment from './Deployment';
import FAQAccordian from './FAQAccordian';
import { FAQuestion } from './types';

const FAQ = () => {
  const { hasAnsweredAll } = useQuestions();
  const summary = useSummary();
  if (!hasAnsweredAll) {
    return null;
  }
  const faqData = getFAQuestions(summary);
  return (
    <Section id="faq">
      <Header>Frequently asked questions</Header>
      {faqData.map((q) => (
        <FAQAccordian key={q.id} question={q} />
      ))}
    </Section>
  );
};

const getFAQuestions = (summary: QuestionSummary): FAQuestion[] => {
  return [
    {
      id: 'faq:deploy',
      title: 'How do I deploy to this S3 bucket?',
      answer: <Deployment summary={summary} />,
    },
    {
      id: 'faq:charged',
      title: 'How much will I be charged?',
      answer: (
        <>
          <p>Very little.</p>
          <p>
            S3 and Cloudfront are basic, cheap infrastructure. Since AWS charges
            per use, it&apos;s impossible to say exactly, but 1$ per month would
            likely covers 1000 monthly users for a lightweight web app.
          </p>
          <p>
            If you have recently signed up for AWS, the expenses will commonly
            be included in the free tier and you won&apos;t pay anything at all.
          </p>
          <p>
            For more details on file hosting and data transfer fees, see{' '}
            <a href="https://aws.amazon.com/s3/pricing/">
              aws.amazon.com/s3/pricing
            </a>
            .
          </p>
        </>
      ),
    },
    {
      id: 'faq:pre-deploy-change',
      title: 'Can I change the input before I deploy it?',
      answer: (
        <>
          <p>Yes, go right ahead!</p>
          <p>
            Hopefully, the arguments and code is self-explainatory. If not,
            check out{' '}
            <a href="http://github.com/tomfa/terraform">
              github.com/tomfa/terraform
            </a>{' '}
            or the{' '}
            <a href="https://registry.terraform.io/providers/hashicorp/aws/latest">
              Terraform registry
            </a>
            , which contains the modules which the repo uses.
          </p>
        </>
      ),
    },
    {
      id: 'faq:stuck-on-validation',
      title: 'My deployment is stuck on verification of certificate.',
      answer: (
        <>
          <p>
            The script will stop and wait for the certificate settings to be
            verified to be correct before continuing.
          </p>
          <p>
            If you use AWS DNS,{' '}
            {summary.configureDns && (
              <strong>which it looks like you do –</strong>
            )}
            go to your domain registrar, then configure the DNS servers to point
            to the newly created Route 53 zone that this script has created. You
            can find the DNS servers that you must point to in the{' '}
            <a href="https://console.aws.amazon.com/route53/v2/hostedzones#">
              AWS console &gt; Route 53
            </a>
            .
          </p>
          <p>
            If you use a different DNS,{' '}
            {!summary.configureDns && summary.createCertificates && (
              <strong>which it looks like you do – </strong>
            )}
            you must add DNS records there to match the records wanted from AWS
            Certificate manager. These records can be found at{' '}
            <a href="https://console.aws.amazon.com/route53/v2/hostedzones#">
              AWS console &gt; Certificate Manager
            </a>
          </p>
          <p>
            Both of these methods require DNS propagation before they take
            effect, so you might have to wait an hour or even a day. The script
            times out after 45 min, but you can re-run it tomorrow, and it will
            continue where it left off.
          </p>
          <p>
            A last resort, can be to add the following line inside terraform
            code:
          </p>
          <Pre>
            module &quot;certificate&quot; &#123; <br />
            {'  '}... <br />
            {'  '}validation_method = EMAIL <br />
            &#125;
          </Pre>
          <p>
            Note that you will have to respond to an email sent to
            postmaster@your-bucket-domain for the validation to go through, and
            that this process will have to be re-run every 3 years or so.
          </p>
        </>
      ),
    },
    {
      id: 'faq:name-taken',
      title: 'My bucket name was taken',
      answer: (
        <>
          <p>
            You can rename your bucket and try again. If you want to keep your
            the domain name, simply replace the <strong>bucket_name</strong>{' '}
            variables in the script, but keep the domain variables, and run the
            script again.
          </p>
          <p>
            Tip: you can go to{' '}
            <a href="https://REPLACE-ME.s3.amazonaws.com">
              REPLACE-ME.s3.amazonaws.com
            </a>{' '}
            to check if <code>REPLACE-ME</code> bucket is available.
          </p>
          <ul>
            <li>
              If it&apos;s <strong>not</strong> taken, it will reply with{' '}
              <code>NoSuchBucket</code>.
            </li>
            <li>
              If it <strong>is taken</strong>, it will likely reply with{' '}
              <code>AccessDeniedAccess</code>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'faq:deploy-twice',
      title: 'What happens if I deploy it twice?',
      answer: (
        <>
          <p>
            If you still have your <code>terraform.tfstate</code> file, it will
            check the AWS resources, and check that they still match the code.
            If necessary, it will ask for confirmation before changing the
            infrastructure to match the code.
          </p>
          <p>
            If you don&apos;t have your state file, it will attempt to recreate
            everything. It will likely fail due to a duplicate bucket name,
            unless you&apos;ve changed that.
          </p>
        </>
      ),
    },
    {
      id: 'faq:post-deploy-change',
      title: 'Can I change the input and redeploy?',
      answer: (
        <>
          <p>
            Yes. You can change the region, bucket name and most other things.
            {summary.createCertificates && (
              <>
                Note that if you make changes that affect the certificate it
                might be re-created.{' '}
                {!summary.configureDns && (
                  <>
                    Since you seem to not be using AWS for DNS, you will then
                    have to reconfigure the DNS pointers to the certificate
                    afterwards.
                  </>
                )}
              </>
            )}
          </p>
          <p>
            When you want to apply the changes, just re-run{' '}
            <code>terraform apply</code>.
          </p>
        </>
      ),
    },
    {
      id: 'faq:terraform-destroy',
      title: 'How can I remove everything I just created?',
      answer: (
        <p>
          <code>terraform destroy</code> will take down all created
          infrastructure, as long as you have kept the{' '}
          <code>terraform.tfstate</code> file. If not, you will have to delete
          it from the <a href="https://console.aws.amazon.com/">AWS console</a>.
        </p>
      ),
    },
    {
      id: 'faq:generated-files',
      title: 'What do I do with the generated files?',
      answer: (
        <>
          <h4>Short answer:</h4>
          <p>
            Save <code>terraform.tfstate</code> for use later. The{' '}
            <code>.terraform</code> folder is basically a cache, and can be
            deleted.
          </p>
          <h4>Longer answer:</h4>
          <p>
            After you have run <code>terraform apply</code>, a folder will be
            created named <code>.terraform</code> along with a file named{' '}
            <code>terraform.tfstate</code>
          </p>
          <p>
            If you save <code>terraform.tfstate</code> you can make changes in
            the code, and re-apply to make those changes take effect in the
            infrastructure. This file is also needed to perform{' '}
            <code>terraform destroy</code> in case you wish to take down the
            infrastructure.
          </p>
          <p>
            It&apos;s OK to delete everything as well, but then you&apos;ll have
            to make further changes using the{' '}
            <a href="https://console.aws.amazon.com">AWS console</a>.
          </p>
        </>
      ),
    },
  ];
};

export default FAQ;
